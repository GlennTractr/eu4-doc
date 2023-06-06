import TurndownService from "turndown";

import { readFile, writeFile } from "fs/promises";
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

htmlToMarkdown("Incident_events.html").then((markdown) => {
  console.log("End read!", markdown);
});

console.log("End!");
