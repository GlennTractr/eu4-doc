import TurndownService from "turndown";

import { readFile, writeFile, readdir } from "fs/promises";
// import { } from 'fs-extra';

console.log("Start!");

const turndownService = new TurndownService();

async function htmlToMarkdown(path: string): Promise<string> {
  const buffer = await readFile(`./docs-html/${path}`);

  const fileTxt = buffer.toString();
  const markdown = turndownService.turndown(fileTxt);

  await writeFile(`./docs/${path.replace(".html", ".md")}`, markdown);

  return markdown;
}

readdir("./docs-html").then(async (files) => {
  for (let file of files) {
    await htmlToMarkdown(file);
  }
});

console.log("End!");
