import { parse } from "https://deno.land/std@0.126.0/flags/mod.ts";
import { readFiles } from "./readFiles.ts";

const args = parse(Deno.args);
const pathsToFiles = args._ as string[];

let contents = "";
for await (const content of readFiles(...pathsToFiles)) {
  contents += content;
}

console.log(contents);
