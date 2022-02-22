// import './cli.ts'; // react in watch mode
import { parseHttpToRequest } from "./httpToRequest.ts";
import { assertEquals } from "./dev.deps.ts";
Deno.test({
  name: "parseHttpToRequest",
  ignore: true,
  only: false,
  fn: async () => {
    const http = `###
POST https://mock-api.deno.dev?body=Pong HTTP/1.1
Accept: text/plain
Content-Type: text/plain

Ping
second line of body


`;
    const req = parseHttpToRequest(http);
    const expected = {
      url: "https://mock-api.deno.dev/?body=Pong",
      method: "POST",
      headers: new Headers({
        "accept": "text/plain",
        "content-type": "text/plain",
      }),
      body: "Ping\nsecond line of body\n",
    };
    assertEquals(req.url, expected.url);
    assertEquals(req.method, expected.method);
    assertEquals(
      req.headers.get("content-type"),
      expected.headers.get("content-type"),
    );
    assertEquals(req.headers.get("accept"), expected.headers.get("Accept"));
    assertEquals(await req.text(), expected.body);
  },
});
