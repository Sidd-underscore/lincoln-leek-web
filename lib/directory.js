import { readdir, readFile } from 'fs/promises';
import path from 'path';

export async function compileArticlesByDate() {
    let years = {};
    const rootDir = "./lib/articles";  // Set root directory to the directory of the current file

    try {
        const yearDirs = await readdir(rootDir, { withFileTypes: true });

        for (const yearDir of yearDirs) {
            if (yearDir.isDirectory()) {
                let months = {};
                const monthDirs = await readdir(path.join(rootDir, yearDir.name), { withFileTypes: true });

                for (const monthDir of monthDirs) {
                    if (monthDir.isDirectory()) {
                        let days = {};
                        const dayDirs = await readdir(path.join(rootDir, yearDir.name, monthDir.name), { withFileTypes: true });

                        for (const dayDir of dayDirs) {
                            if (dayDir.isDirectory()) {
                                let articles = {};
                                const articleFiles = await readdir(path.join(rootDir, yearDir.name, monthDir.name, dayDir.name), { withFileTypes: true });

                                for (const file of articleFiles) {
                                    if (!file.isDirectory()) {
                                        const filePath = path.join(rootDir, yearDir.name, monthDir.name, dayDir.name, file.name);
                                        const fileContents = await readFile(filePath, 'utf8');
                                        const articleData = JSON.parse(fileContents);
                                        articles[file.name.replace('.json', '')] = {
                                            title: articleData.title,
                                            date: articleData.date,
                                            content: articleData.content,
                                            author: articleData.author
                                        };
                                    }
                                }

                                days[dayDir.name] = articles;
                            }
                        }

                        months[monthDir.name] = days;
                    }
                }

                years[yearDir.name] = months;
            }
        }
    } catch (error) {
        console.error('Failed to read directories:', error);
    }

    return years;
}

export async function compileAuthors() {
    const articles = await compileArticlesByDate();
    const authorsDir = "./lib/authors"
    const authors = new Map();

    try {
        for (const year in articles) {
            for (const month in articles[year]) {
                for (const day in articles[year][month]) {
                    for (const articleId in articles[year][month][day]) {
                        const article = articles[year][month][day][articleId];
                        const authorId = article.author.id;
                        if (!authors.has(authorId)) {
                            const authorPath = path.join(authorsDir, `${authorId}.json`);
                            const authorData = JSON.parse(await readFile(authorPath, 'utf8'));
                            authors.set(authorId, authorData);
                        }
                    }
                }
            }
        }
    } catch (error) {
        console.error('Failed to compile authors:', error);
    }

    return authors;
}

export async function getArticleByDateAndId(date, id) {
    const rootDir = "./lib/articles";
    const dateObj = new Date(date);
    const year = dateObj.getUTCFullYear();
    const month = String(dateObj.getUTCMonth() + 1).padStart(2, '0'); // JavaScript months are 0-indexed what the heck
    const day = String(dateObj.getUTCDate()).padStart(2, '0');

    const articlePath = path.join(rootDir, year.toString(), month, day, `${id}.json`);

    try {
        const fileContents = await readFile(articlePath, 'utf8');
        return JSON.parse(fileContents);
    } catch (error) {
        console.error(`Failed to read article: ${id} on date: ${date}`, error);
        return null;
    }
}