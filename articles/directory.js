import { readdir, readFile } from 'fs/promises';
import path from 'path';

export async function compileArticlesByDate() {
    let years = {};
    const rootDir = "./articles";  // Set root directory to the directory of the current file

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