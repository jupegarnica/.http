import { dim, red, yellow } from "./deps.ts";

const parseToString = (any: any) => {
  if (typeof any === "object") {
    return JSON.stringify(any, null, 2);
  }
  return String(any);
};

export const warn = (...args: unknown[]): void =>
  console.warn(...args.map((s) => yellow(parseToString(s))));

export const error = (...args: unknown[]): void =>
  console.error(...args.map((s) => red(parseToString(s))));

export const debug = (...args: unknown[]): void =>
  console.debug(...args.map((s) => dim(parseToString(s))));

export const log = (...args: unknown[]): void =>
  console.log(...args.map((s) => s));
