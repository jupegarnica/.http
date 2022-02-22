const RequestLineRegex =
  /^(?<method>GET|POST|PUT|DELETE|PATCH|HEAD|OPTIONS)\s*(?<url>.+?)(\s+HTTP\/(?<version>(\S+)))?$/mu;

// const HeadersRegex = /^(?<name>[^:\n\s]+):\s+(?<value>.+?)(\n)$/gm;

const HeadersRegex =
  /^\s*(?<key>[!#$%&'*+\-.^_`|~0-9A-Za-z]+)\s*:\s*(?<value>.*?),?\s*$/gmu;

const BodyRegex = /\n\n+(?<body>.+)(\n\n)/u;

export function parseHttpToRequest(text: string): Request {
  const match = RequestLineRegex.exec(text);

  if (!match) throw new Error("request not found");
  const firstLine = match[0];
  let textLeft = text.replace(firstLine, "");
  const method = match.groups?.method;
  const url = match.groups?.url as string;

  const headers = {} as Record<string, string>;
  const headerMatch = textLeft.matchAll(HeadersRegex);
  for (const { groups } of headerMatch) {
    const name = (groups?.key) as string;
    const value = (groups?.value) as string;
    headers[name] = value;
  }

  textLeft = textLeft.replaceAll(HeadersRegex, "");

  const body = textLeft.match(BodyRegex)?.groups?.body as string;
  console.log({ body });

  const request = new Request(url, {
    method,
    body,
    headers: new Headers(headers),
  });

  return request;
}
