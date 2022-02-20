import { parse } from "https://deno.land/std@0.126.0/flags/mod.ts";
import { readContentFromFiles } from "./readFiles.ts";


const args = parse(Deno.args);
const pathsToFiles = args._ as string[];

let contents = ''
for await (const content of readContentFromFiles(pathsToFiles)) {
    contents += content;
}


console.log(contents);
