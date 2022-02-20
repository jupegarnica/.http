import { isAbsolute, join } from "https://deno.land/std@0.126.0/path/mod.ts";
import { expandGlob } from "https://deno.land/std@0.126.0/fs/mod.ts";

export async function* readContentFromFiles(
  filePaths: string[],
): AsyncIterableIterator<string> {
  const basePath = Deno.cwd();
  for (const path of filePaths) {
    const absolutePath = isAbsolute(path) ? path : join(basePath, path);

    for await (const file of expandGlob(absolutePath)) {
      yield await Deno.readTextFile(file.path);
    }
  }
}
