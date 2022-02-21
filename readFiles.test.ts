import { assertEquals } from "./dev.deps.ts";
import { readFiles } from "./readFiles.ts"; // react in watch mode

Deno.test({
  name: "[readFiles] read one file",
  ignore: false,
  only: false,
  fn: async () => {
    let contents = "";

    for await (const content of readFiles("http/ping-pong.http")) {
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
  name: "[readFiles] read file from absolute path",
  ignore: false,
  only: false,
  fn: async () => {
    let contents = "";

    for await (
      const content of readFiles(
        Deno.cwd() + "/http/ping-pong.http",
      )
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
  name: "[readFiles] read files",
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
      const content of readFiles(
        "http/ping-pong.http",
        "http/ping-pong.http",
      )
    ) {
      contents += content;
    }
    assertEquals(contents, `${content}${content}`);
  },
});

Deno.test({
  name: "[readFiles] read files from glob",
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

    for await (const content of readFiles("http/ping*http")) {
      contents += content;
    }
    assertEquals(contents, content);
  },
});
