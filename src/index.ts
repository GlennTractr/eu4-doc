import TurndownService from "turndown";

import { readFile, writeFile, readdir } from "fs/promises";

import * as docsJSON from "./docs.json";

console.log("Start!");

const turndownService = new TurndownService();

interface Docs {
  url: string;
  pageTitle: string;
  h1: string;
  content?: string | undefined;
  length: number | null;
}

async function htmlToMarkdown(path: string): Promise<string> {
  const buffer = await readFile(`./docs-html/${path}`);

  const fileTxt = buffer.toString();
  const markdown = turndownService.turndown(fileTxt);

  await writeFile(`./docs/${path.replace(".html", ".md")}`, markdown);

  return markdown;
}

async function jsonToHtml() {
  for (let docs of Object.values(docsJSON)) {
    const docsTyped = docs as Docs;
    if (docsTyped.pageTitle) {
      const pageTitle = docsTyped.pageTitle.replace(
        " - Europa Universalis 4 Wiki",
        ""
      );
      console.log("docs", pageTitle);

      if (docsTyped.content) {
        await writeFile(`./docs-html/${pageTitle}.html`, docsTyped.content);
      }
    }
  }
}

async function tranformAllhtml() {
  return readdir("./docs-html").then(async (files) => {
    for (let file of files) {
      await htmlToMarkdown(file);
    }
  });
}

function execFormat() {
  const { exec } = require("child_process");

  return new Promise((resolve, reject) => {
    exec("npm run format:docs", (error: any, stdout: any, stderr: any) => {
      if (error) {
        console.log(`error: ${error.message}`);
        reject(error);
      }
      if (stderr) {
        console.log(`stderr: ${stderr}`);
        reject(stderr);
      }
      console.log(`stdout: ${stdout}`);
      resolve(stdout);
    });
  });
}

jsonToHtml()
  .then(() => {
    console.log("jsonToHtml Done!");
  })
  .then(() => {
    return execFormat();
  })
  .then((t) => {
    console.log("End prettier", t);
  })
  .then(() => {
    return tranformAllhtml();
  });
console.log("End!");
