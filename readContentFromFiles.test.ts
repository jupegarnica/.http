import { assertEquals } from "./dev.deps.ts";
import { readContentFromFiles } from "./readFiles.ts"; // react in watch mode

Deno.test({
  name: "[readContentFromFiles] read one file",
  ignore: false,
  only: false,
  fn: async () => {
    let contents = "";

    for await (const content of readContentFromFiles(["http/ping-pong.http"])) {
      contents += content;
    }
    assertEquals(
      contents,
      `POST https://mock-api.deno.dev?body=Pong
Accept: text/plain
Content-Type: text/plain

Ping
`,
    );
  },
});

Deno.test({
  name: "[readContentFromFiles] read file from absolute path",
  ignore: false,
  only: false,
  fn: async () => {
    let contents = "";

    for await (
      const content of readContentFromFiles([
        Deno.cwd() + "/http/ping-pong.http",
      ])
    ) {
      contents += content;
    }
    assertEquals(
      contents,
      `POST https://mock-api.deno.dev?body=Pong
Accept: text/plain
Content-Type: text/plain

Ping
`,
    );
  },
});

Deno.test({
  name: "[readContentFromFiles] read files",
  ignore: false,
  only: false,
  fn: async () => {
    const content = `POST https://mock-api.deno.dev?body=Pong
Accept: text/plain
Content-Type: text/plain

Ping
`;
    let contents = "";

    for await (
      const content of readContentFromFiles([
        "http/ping-pong.http",
        "http/ping-pong.http",
      ])
    ) {
      contents += content;
    }
    assertEquals(contents, `${content}${content}`);
  },
});

Deno.test({
  name: "[readContentFromFiles] read files from glob",
  ignore: false,
  only: false,
  fn: async () => {
    const content = `POST https://mock-api.deno.dev?body=Pong
Accept: text/plain
Content-Type: text/plain

Ping
GET https://mock-api.deno.dev?body=Pong
`;
    let contents = "";

    for await (const content of readContentFromFiles(["http/ping*http"])) {
      contents += content;
    }
    assertEquals(contents, content);
  },
});
