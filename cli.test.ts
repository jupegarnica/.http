import { assertEquals, sh } from "./dev.deps.ts";
// import './cli.ts'; // react in watch mode

Deno.test({
  name: "read file from disk",
  ignore: true,
  only: false,
  fn: async () => {
    const { stdout, code } = await sh
      `NO_COLOR=1 deno run --allow-read=./ ./cli.ts http/ping-pong.http`;
    assertEquals(code, 0);
    assertEquals(
      stdout,
      `POST https://mock-api.deno.dev?body=Pong
Accept: text/plain
Content-Type: text/plain

Ping
`,
    );
  },
});

Deno.test({
  name: "read file from absolute path",
  ignore: true,
  only: false,
  fn: async () => {
    const { stdout, code } = await sh
      `NO_COLOR=1 deno run --allow-read=./ ./cli.ts ${Deno.cwd()}/http/ping-pong.http`;
    assertEquals(code, 0);
    assertEquals(
      stdout,
      `POST https://mock-api.deno.dev?body=Pong
Accept: text/plain
Content-Type: text/plain

Ping
`,
    );
  },
});

Deno.test({
  name: "read files",
  ignore: true,
  only: false,
  fn: async () => {
    const content = `POST https://mock-api.deno.dev?body=Pong
Accept: text/plain
Content-Type: text/plain

Ping`;
    const { stdout, code } = await sh
      `NO_COLOR=1 deno run --allow-read=./ ./cli.ts http/ping-pong.http http/ping-pong.http`;
    assertEquals(code, 0);
    assertEquals(
      stdout,
      `${content}${content}
`,
    );
  },
});

Deno.test({
  name: "read files from glob",
  ignore: true,
  only: false,
  fn: async () => {
    const content = `POST https://mock-api.deno.dev?body=Pong
Accept: text/plain
Content-Type: text/plain

Ping`;
    const { stdout, code } = await sh
      `NO_COLOR=1 deno run --allow-read=./ ./cli.ts http/ping-pong.http http/ping-pong.http`;
    assertEquals(code, 0);
    assertEquals(
      stdout,
      `${content}${content}
`,
    );
  },
});
