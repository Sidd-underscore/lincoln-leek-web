"use server"

export async function submitArticleToSlack(data) {
    fetch(
        process.env.SLACK_URL,
        {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-type": "application/json",
          },
          body: data
        },
      );
}