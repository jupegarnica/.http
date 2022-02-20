import {
  compile,
  compileToString,
  config,
  configure,
  getConfig,
  loadFile,
  parse,
  render,
  renderAsync,
  renderFile,
  renderFileAsync,
  templates,
} from "https://deno.land/x/eta@v1.12.3/mod.ts";

import { config as env } from "https://deno.land/x/dotenv/mod.ts";
import { debug, warn } from "./logger.ts";
env({ export: true, path: "./.env" });

const path = `${Deno.cwd()}/http/test.http`;

const environment = Deno.env.toObject();

// Set Eta's configuration
const conf = {
  useWith: true,
  tags: ["{{", "}}"],
  autoEscape: false,
  async: true,
  cache: false,
  parse: {
    exec: "",
    interpolate: "=",
    raw: "~",
  },
  plugins: [
    { processTemplate: (x) => (warn("processTemplate"), debug(x), x) },
    { processAST: (x) => (warn("processAST"), debug(x), x) },
    { processFnString: (x) => (warn("processFnString"), debug(x), x) },
  ],

  /** Remove all safe-to-remove whitespace */
  rmWhitespace: false,

  /** A filter function applied to every interpolation or raw interpolation */
  filter: (x) => (x),
  // /** Function to include templates by name */
  // include ?: Function;

  // /** Function to include templates by filepath */
  // includeFile ?: Function;

  // /** Name of template */
  // name ?: string;

  // /** Where should absolute paths begin? Default '/' */
  // root ?: string;

  // /** Make data available on the global object instead of varName */
  // useWith ?: boolean;

  // /** Whether or not to cache templates if `name` or `filename` is passed: duplicate of `cache` */
  // "view cache" ?: boolean;

  // /** Directory or directories that contain templates */
  // views ?: string | Array < string >;
};
configure(conf);

// Eta assumes the .eta extension if you don't specify an extension
// You could also write renderFile("template.eta"),
// renderFile("/template"), etc.

const input = await Deno.readTextFile(path);
console.log("input", input);
// let templateAST = await parse(fileText, conf);

const output = await renderAsync(input, { env: environment });

console.log("globalThis.hello", globalThis.hello);

console.log("output", output);
