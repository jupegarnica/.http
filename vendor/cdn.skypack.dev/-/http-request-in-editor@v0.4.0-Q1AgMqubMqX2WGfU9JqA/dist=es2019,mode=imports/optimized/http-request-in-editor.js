import nearley2 from "/-/nearley@v2.20.1-A4c29ItqLXuWOAs5gtul/dist=es2019,mode=imports/optimized/nearley.js";
import * as ramda from "/-/ramda@v0.28.0-vDL6KbwpPkq7DJAM324O/dist=es2019,mode=imports/optimized/ramda.js";
import * as ramdaAdjunct from "/-/ramda-adjunct@v3.0.0-KQqwUtmF7QX8HMVNgUFS/dist=es2019,mode=imports/optimized/ramda-adjunct.js";
import stampit2 from "/-/stampit@v4.3.2-kbRPxiqraWFe5r4ZPBRc/dist=es2019,mode=imports/optimized/stampit.js";
import axios2 from "/-/axios@v0.26.0-261Jkc4LCeEmZLwyCXp8/dist=es2019,mode=imports/optimized/axios.js";
function createCommonjsModule(fn, basedir, module) {
  return module = {
    path: basedir,
    exports: {},
    require: function (path, base) {
      return commonjsRequire(
        path,
        base === void 0 || base === null ? module.path : base,
      );
    },
  },
    fn(module, module.exports),
    module.exports;
}
function getDefaultExportFromNamespaceIfNotNamed(n) {
  return n && Object.prototype.hasOwnProperty.call(n, "default") &&
      Object.keys(n).length === 1
    ? n["default"]
    : n;
}
function commonjsRequire() {
  throw new Error(
    "Dynamic requires are not currently supported by @rollup/plugin-commonjs",
  );
}
const Node = stampit2({
  statics: {
    type: "node",
  },
  props: {
    type: null,
    location: null,
    children: [],
  },
  init({ location = this.location, children = this.children }, { stamp }) {
    this.type = stamp.type;
    this.location = location;
    this.children = children;
  },
});
var node = Node;
const ValueNode = stampit2(node, {
  statics: {
    type: "value-node",
  },
  props: {
    value: null,
  },
  init({ value = this.value } = {}) {
    this.value = value;
  },
});
var valueNode = ValueNode;
const Literal = stampit2(valueNode, {
  statics: {
    type: "literal",
  },
});
var literal = Literal;
const RequestsFile = stampit2(node, {
  statics: {
    type: "requests-file",
  },
  methods: {
    get requests() {
      return this.children;
    },
  },
});
var requestsFile = RequestsFile;
var require$$0 = /* @__PURE__ */ getDefaultExportFromNamespaceIfNotNamed(ramda);
const { defaultTo } = require$$0;
const Request = stampit2(node, {
  statics: {
    type: "request",
  },
  methods: {
    get requestLine() {
      return defaultTo(null, this.children[0]);
    },
  },
});
var request = Request;
const { pathEq } = require$$0;
const isNodeType = pathEq(["type"]);
const isMethod = isNodeType("method");
const isRequestTarget = isNodeType("request-target");
const isHttpVersion = isNodeType("http-version");
const isOriginForm = isNodeType("origin-form");
const isAbsolutePath = isNodeType("absolute-path");
const isLiteral = isNodeType("literal");
const isFilePath = isNodeType("file-path");
const isHeaders = isNodeType("headers");
const isMessageBody = isNodeType("message-body");
const isResponseHandler = isNodeType("response-handler");
const isResponseRef = isNodeType("response-ref");
const isQuery = isNodeType("query");
const isFragment = isNodeType("fragment");
var predicates = {
  isMethod,
  isRequestTarget,
  isHttpVersion,
  isOriginForm,
  isAbsolutePath,
  isLiteral,
  isFilePath,
  isHeaders,
  isMessageBody,
  isResponseHandler,
  isResponseRef,
  isQuery,
  isFragment,
};
const { defaultTo: defaultTo$1, pipe, find } = require$$0;
const {
  isMethod: isMethod$1,
  isRequestTarget: isRequestTarget$1,
  isHttpVersion: isHttpVersion$1,
} = predicates;
const RequestLine = stampit2(node, {
  statics: {
    type: "requests-line",
  },
  methods: {
    get method() {
      return pipe(defaultTo$1(null), find(isMethod$1))(this.children);
    },
    get requestTarget() {
      return pipe(defaultTo$1(null), find(isRequestTarget$1))(this.children);
    },
    get httpVersion() {
      return pipe(defaultTo$1(null), find(isHttpVersion$1))(this.children);
    },
  },
});
var requestLine = RequestLine;
const RequestTarget = stampit2(node, {
  statics: {
    type: "request-target",
  },
});
var requestTarget = RequestTarget;
const OriginForm = stampit2(node, {
  statics: {
    type: "origin-form",
  },
});
var originForm = OriginForm;
const AbsolutePath = stampit2(node, {
  statics: {
    type: "absolute-path",
  },
});
var absolutePath = AbsolutePath;
const Query = stampit2(valueNode, {
  statics: {
    type: "query",
  },
});
var query = Query;
const Fragment = stampit2(valueNode, {
  statics: {
    type: "fragment",
  },
});
var fragment = Fragment;
const PathSeparator = stampit2(valueNode, {
  statics: {
    type: "path-separator",
  },
});
var pathSeparator = PathSeparator;
const Segment = stampit2(valueNode, {
  statics: {
    type: "segment",
  },
});
var segment = Segment;
const AbsoluteForm = stampit2(node, {
  statics: {
    type: "absolute-form",
  },
});
var absoluteForm = AbsoluteForm;
const HierPart = stampit2(node, {
  statics: {
    type: "hier-part",
  },
});
var hierPart = HierPart;
const Authority = stampit2(node, {
  statics: {
    type: "authority",
  },
});
var authority = Authority;
const Host = stampit2(node, {
  statics: {
    type: "host",
  },
});
var host = Host;
const Port = stampit2(valueNode, {
  statics: {
    type: "port",
  },
});
var port = Port;
const Ipv6Address = stampit2(valueNode, {
  statics: {
    type: "ipv6-address",
  },
});
var ipv6Address = Ipv6Address;
const Ipv4OrRegName = stampit2(valueNode, {
  statics: {
    type: "ipv4-or-reg-name",
  },
});
var ipv4OrRegName = Ipv4OrRegName;
const AsteriskForm = stampit2(valueNode, {
  statics: {
    type: "asterisk-form",
  },
});
var asteriskForm = AsteriskForm;
const Scheme = stampit2(valueNode, {
  statics: {
    type: "scheme",
  },
});
var scheme = Scheme;
const Method = stampit2(valueNode, {
  statics: {
    type: "method",
  },
});
var method = Method;
const HttpVersion = stampit2(valueNode, {
  statics: {
    type: "http-version",
  },
});
var httpVersion = HttpVersion;
const Headers = stampit2(node, {
  statics: {
    type: "headers",
  },
});
var headers = Headers;
const { head, last } = require$$0;
const HeaderField = stampit2(node, {
  statics: {
    type: "header-field",
  },
  methods: {
    get fieldName() {
      return head(this.children);
    },
    get fieldValue() {
      return last(this.children);
    },
  },
});
var headerField = HeaderField;
const FieldName = stampit2(valueNode, {
  statics: {
    type: "field-name",
  },
});
var fieldName = FieldName;
const FieldValue = stampit2(valueNode, {
  statics: {
    type: "field-value",
  },
});
var fieldValue = FieldValue;
const MessageBody = stampit2(node, {
  statics: {
    type: "message-body",
  },
});
var messageBody = MessageBody;
const Messages = stampit2(node, {
  statics: {
    type: "messages",
  },
});
var messages = Messages;
const MessageLine = stampit2(valueNode, {
  statics: {
    type: "message-line",
  },
});
var messageLine = MessageLine;
const InputFileRef = stampit2(node, {
  statics: {
    type: "input-file-ref",
  },
});
var inputFileRef = InputFileRef;
const FilePath = stampit2(valueNode, {
  statics: {
    type: "file-path",
  },
});
var filePath = FilePath;
const ResponseHandler = stampit2(node, {
  statics: {
    type: "response-handler",
  },
});
var responseHandler = ResponseHandler;
const HandlerScript = stampit2(valueNode, {
  statics: {
    type: "handler-script",
  },
});
var handlerScript = HandlerScript;
const ResponseRef = stampit2(node, {
  statics: {
    type: "response-ref",
  },
});
var responseRef = ResponseRef;
const EnvVariable = stampit2(valueNode, {
  statics: {
    type: "env-variable",
  },
  methods: {
    get name() {
      return this.value.match(/^{{\s*(?<variable_name>[a-zA-Z0-9_-]+)\s*}}$/)
        .groups.variable_name;
    },
  },
});
var envVariable = EnvVariable;
var cst = {
  Literal: literal,
  RequestsFile: requestsFile,
  Request: request,
  RequestLine: requestLine,
  RequestTarget: requestTarget,
  OriginForm: originForm,
  AbsolutePath: absolutePath,
  Query: query,
  Fragment: fragment,
  PathSeparator: pathSeparator,
  Segment: segment,
  AbsoluteForm: absoluteForm,
  HierPart: hierPart,
  Authority: authority,
  Host: host,
  Port: port,
  Ipv6Address: ipv6Address,
  Ipv4OrRegName: ipv4OrRegName,
  AsteriskForm: asteriskForm,
  Scheme: scheme,
  Method: method,
  HttpVersion: httpVersion,
  Headers: headers,
  HeaderField: headerField,
  FieldName: fieldName,
  FieldValue: fieldValue,
  MessageBody: messageBody,
  Messages: messages,
  MessageLine: messageLine,
  InputFileRef: inputFileRef,
  FilePath: filePath,
  ResponseHandler: responseHandler,
  HandlerScript: handlerScript,
  ResponseRef: responseRef,
  EnvVariable: envVariable,
};
var require$$0$1 = /* @__PURE__ */ getDefaultExportFromNamespaceIfNotNamed(
  ramdaAdjunct,
);
const { flatten, nth, join, pipe: pipe$1 } = require$$0;
const { flattenDepth, stubNull, isNotNull } = require$$0$1;
const {
  isHeaders: isHeaders$1,
  isMessageBody: isMessageBody$1,
  isResponseHandler: isResponseHandler$1,
  isResponseRef: isResponseRef$1,
  isHttpVersion: isHttpVersion$2,
  isMethod: isMethod$2,
  isQuery: isQuery$1,
  isFragment: isFragment$1,
  isAbsolutePath: isAbsolutePath$1,
} = predicates;
const stringify = join("");
const stringifyId = pipe$1(nth(0), stringify);
const requestsFile$1 = (data, location) => {
  const requests = flattenDepth(2, [data[2], data[3]]);
  return cst.RequestsFile({
    location,
    children: requests,
  });
};
const request$1 = ([
  requestLineNode,
  ,
  ,
  headersNode,
  ,
  messageBodyNode,
  responseHandlerNode,
  responseRefNode,
], location) => {
  const children = [requestLineNode];
  if (isHeaders$1(headersNode) && headersNode.children.length > 0) {
    children.push(headersNode);
  }
  if (isMessageBody$1(messageBodyNode) && messageBodyNode.children.length > 0) {
    children.push(messageBodyNode);
  }
  if (
    isResponseHandler$1(responseHandlerNode) &&
    responseHandlerNode.children.length > 0
  ) {
    children.push(responseHandlerNode);
  }
  if (isResponseRef$1(responseRefNode) && responseRefNode.children.length > 0) {
    children.push(responseRefNode);
  }
  return cst.Request({ location, children });
};
const requestLine$1 = (
  [methodNode, requestTargetNode, httpVersionNode],
  location,
) => {
  const children = [];
  if (isMethod$2(methodNode)) {
    children.push(methodNode);
  }
  children.push(requestTargetNode);
  if (isHttpVersion$2(httpVersionNode)) {
    children.push(httpVersionNode);
  }
  return cst.RequestLine({
    location,
    children,
  });
};
const method$1 = ([httpVerb], location) =>
  cst.Method({ location, value: httpVerb });
const httpVersion$1 = (data, location) =>
  cst.HttpVersion({
    location,
    value: `${stringify(data[1])}.${stringify(data[3])}`,
  });
const requestTarget$1 = (data, location) =>
  cst.RequestTarget({ location, children: data[0] });
const originForm$1 = (
  [absolutePathNode, queryMatch, fragmentMatch],
  location,
) => {
  const children = [absolutePathNode];
  if (queryMatch !== null) {
    children.push(cst.Literal({ location, value: queryMatch[0] }));
    children.push(queryMatch[1]);
  }
  if (fragmentMatch !== null) {
    children.push(cst.Literal({ location, value: fragmentMatch[0] }));
    children.push(fragmentMatch[1]);
  }
  return cst.OriginForm({
    location,
    children,
  });
};
const absoluteForm$1 = (
  [schemeMatch, hierPartNode, queryMatch, fragmentMatch],
  location,
) => {
  const children = [];
  if (schemeMatch !== null) {
    children.push(schemeMatch[0]);
    children.push(cst.Literal({ location, value: schemeMatch[1] }));
  }
  children.push(hierPartNode);
  if (queryMatch !== null) {
    children.push(cst.Literal({ location, value: queryMatch[0] }));
    children.push(queryMatch[1]);
  }
  if (fragmentMatch !== null) {
    children.push(cst.Literal({ location, value: fragmentMatch[0] }));
    children.push(fragmentMatch[1]);
  }
  return cst.AbsoluteForm({
    location,
    children,
  });
};
const asteriskForm$1 = (data, location) =>
  cst.AsteriskForm({ location, value: data[0] });
const scheme$1 = (data, location) =>
  cst.Scheme({ location, value: stringify(flatten(data)) });
const hierPart$1 = ([authorityNode, absolutePathNode], location) => {
  const children = [authorityNode];
  if (isAbsolutePath$1(absolutePathNode)) {
    children.push(absolutePathNode);
  }
  return cst.HierPart({
    location,
    children,
  });
};
const authority$1 = (data, location) => {
  const [hostNode] = data;
  const children = [hostNode];
  if (Array.isArray(data[1])) {
    children.push(cst.Literal({ location, value: data[1][0] }));
    children.push(data[1][1]);
  }
  return cst.Authority({ location, children });
};
const port$1 = (data, location) =>
  cst.Port({ location, value: stringifyId(data) });
const host$1 = (data, location) => {
  const children = [];
  if (data[0].length === 3) {
    children.push(cst.Literal({ location, value: data[0][0] }));
    children.push(data[0][1]);
    children.push(cst.Literal({ location, value: data[0][2] }));
  } else {
    children.push(data[0][0]);
  }
  return cst.Host({ location, children });
};
const ipv6Address$1 = (data, location) =>
  cst.Ipv6Address({ location, value: stringifyId(data) });
const ipv4OrRegName$1 = (data, location, reject) => {
  const value = stringifyId(data);
  if (value === "*") {
    return reject;
  }
  return cst.Ipv4OrRegName({ location, value });
};
const absolutePath$1 = (data, location, reject) => {
  const children = flatten(data);
  const absPath = children.reduce((acc, node2) => acc + node2.value, "");
  if (absPath.startsWith("//")) {
    return reject;
  }
  return cst.AbsolutePath({ location, children });
};
const pathSeparator$1 = (data, location) =>
  cst.PathSeparator({ location, value: data[0] });
const segment$1 = (data, location) =>
  cst.Segment({ location, value: stringifyId(data) });
const query$1 = (data, location) => {
  const value = flatten(data).filter(isNotNull).map((v) => {
    if (isQuery$1(v)) {
      return v.value;
    }
    return v;
  });
  return cst.Query({ location, value: flatten(value).join("") });
};
const fragment$1 = (data, location) => {
  const value = flatten(data).filter(isNotNull).map((v) => {
    if (isFragment$1(v)) {
      return v.value;
    }
    return v;
  });
  return cst.Fragment({ location, value: flatten(value).join("") });
};
const headers$1 = (data, location) =>
  cst.Headers({ location, children: [...data[0]] });
const headerField$1 = (data, location) =>
  cst.HeaderField({ location, children: [data[0], data[3]] });
const fieldName$1 = (data, location) =>
  cst.FieldName({ location, value: stringifyId(data) });
const fieldValue$1 = (data, location, reject) => {
  const lineTail2 = stringifyId(data);
  if (lineTail2.startsWith(" ") || lineTail2.endsWith(" ")) {
    return reject;
  }
  return cst.FieldValue({ location, value: lineTail2 });
};
const messageBody$1 = (data, location) => {
  const children = [];
  const messages2 = data[0];
  if (messages2.children.length > 0) {
    children.push(messages2);
  }
  return cst.MessageBody({ location, children });
};
const messages$1 = (data, location) =>
  cst.Messages({ location, children: [...data[0]] });
const messageLine$1 = (data, location, reject) => {
  const lineTail2 = stringifyId(data);
  if (
    lineTail2.includes("<") || lineTail2.includes("> ") ||
    lineTail2.includes("<> ") || lineTail2.includes("###")
  ) {
    return reject;
  }
  return cst.MessageLine({ location, value: lineTail2 });
};
const inputFileRef$1 = (data, location) =>
  cst.InputFileRef({ location, children: [data[2]] });
const filePath$1 = (data, location) =>
  cst.FilePath({ location, value: stringifyId(data) });
const responseHandler$1 = (data, location) =>
  cst.ResponseHandler({ location, children: [data[0]] });
const responseHandlerFilePath = (data, location, reject) => {
  const filePathNode = data[2];
  if (filePathNode.value.startsWith("{%")) {
    return reject;
  }
  return filePathNode;
};
const handlerScript$1 = (data, location, reject) => {
  const script = stringify(data[1]);
  if (script.includes("%}") || script.includes("###")) {
    return reject;
  }
  return cst.HandlerScript({ location, value: script });
};
const responseRef$1 = (data, location) =>
  cst.ResponseRef({ location, children: [data[2]] });
const lineTail = (data) => stringifyId(data);
const lineComment = (data, location, reject) => {
  if (data[1].includes("##")) {
    return reject;
  }
  return data[1];
};
const envVariable$1 = (data, location) =>
  cst.EnvVariable({ location, value: stringify(flatten(data)) });
var postprocessors = {
  nth,
  stubNull,
  stringifyId,
  requestsFile: requestsFile$1,
  request: request$1,
  requestLine: requestLine$1,
  method: method$1,
  httpVersion: httpVersion$1,
  requestTarget: requestTarget$1,
  originForm: originForm$1,
  absoluteForm: absoluteForm$1,
  asteriskForm: asteriskForm$1,
  scheme: scheme$1,
  hierPart: hierPart$1,
  authority: authority$1,
  port: port$1,
  host: host$1,
  ipv6Address: ipv6Address$1,
  ipv4OrRegName: ipv4OrRegName$1,
  absolutePath: absolutePath$1,
  pathSeparator: pathSeparator$1,
  segment: segment$1,
  query: query$1,
  fragment: fragment$1,
  headers: headers$1,
  headerField: headerField$1,
  fieldName: fieldName$1,
  fieldValue: fieldValue$1,
  messageBody: messageBody$1,
  messages: messages$1,
  messageLine: messageLine$1,
  inputFileRef: inputFileRef$1,
  filePath: filePath$1,
  responseHandler: responseHandler$1,
  responseHandlerFilePath,
  handlerScript: handlerScript$1,
  responseRef: responseRef$1,
  lineTail,
  lineComment,
  envVariable: envVariable$1,
};
var grammar = createCommonjsModule(function (module) {
  (function () {
    function id(x) {
      return x[0];
    }
    const {
      nth: nth2,
      stubNull: stubNull2,
      stringifyId: stringifyId2,
      requestsFile: requestsFile2,
      request: request2,
      requestLine: requestLine2,
      method: method2,
      httpVersion: httpVersion3,
      requestTarget: requestTarget3,
      originForm: originForm3,
      absoluteForm: absoluteForm3,
      asteriskForm: asteriskForm4,
      scheme: scheme2,
      hierPart: hierPart2,
      authority: authority2,
      port: port2,
      host: host2,
      ipv6Address: ipv6Address3,
      ipv4OrRegName: ipv4OrRegName3,
      absolutePath: absolutePath4,
      pathSeparator: pathSeparator3,
      segment: segment2,
      query: query2,
      fragment: fragment2,
      headers: headers2,
      headerField: headerField3,
      fieldName: fieldName2,
      fieldValue: fieldValue2,
      messageBody: messageBody3,
      messages: messages2,
      messageLine: messageLine3,
      inputFileRef: inputFileRef2,
      filePath: filePath2,
      responseHandler: responseHandler2,
      responseHandlerFilePath: responseHandlerFilePath2,
      handlerScript: handlerScript2,
      responseRef: responseRef2,
      lineTail: lineTail2,
      lineComment: lineComment2,
      envVariable: envVariable2,
    } = postprocessors;
    var grammar2 = {
      Lexer: void 0,
      ParserRules: [
        { name: "unsigned_int$ebnf$1", symbols: [/[0-9]/] },
        {
          name: "unsigned_int$ebnf$1",
          symbols: ["unsigned_int$ebnf$1", /[0-9]/],
          postprocess: function arrpush(d) {
            return d[0].concat([d[1]]);
          },
        },
        {
          name: "unsigned_int",
          symbols: ["unsigned_int$ebnf$1"],
          postprocess: function (d) {
            return parseInt(d[0].join(""));
          },
        },
        { name: "int$ebnf$1$subexpression$1", symbols: [{ literal: "-" }] },
        { name: "int$ebnf$1$subexpression$1", symbols: [{ literal: "+" }] },
        {
          name: "int$ebnf$1",
          symbols: ["int$ebnf$1$subexpression$1"],
          postprocess: id,
        },
        {
          name: "int$ebnf$1",
          symbols: [],
          postprocess: function (d) {
            return null;
          },
        },
        { name: "int$ebnf$2", symbols: [/[0-9]/] },
        {
          name: "int$ebnf$2",
          symbols: ["int$ebnf$2", /[0-9]/],
          postprocess: function arrpush(d) {
            return d[0].concat([d[1]]);
          },
        },
        {
          name: "int",
          symbols: ["int$ebnf$1", "int$ebnf$2"],
          postprocess: function (d) {
            if (d[0]) {
              return parseInt(d[0][0] + d[1].join(""));
            } else {
              return parseInt(d[1].join(""));
            }
          },
        },
        { name: "unsigned_decimal$ebnf$1", symbols: [/[0-9]/] },
        {
          name: "unsigned_decimal$ebnf$1",
          symbols: ["unsigned_decimal$ebnf$1", /[0-9]/],
          postprocess: function arrpush(d) {
            return d[0].concat([d[1]]);
          },
        },
        {
          name: "unsigned_decimal$ebnf$2$subexpression$1$ebnf$1",
          symbols: [/[0-9]/],
        },
        {
          name: "unsigned_decimal$ebnf$2$subexpression$1$ebnf$1",
          symbols: ["unsigned_decimal$ebnf$2$subexpression$1$ebnf$1", /[0-9]/],
          postprocess: function arrpush(d) {
            return d[0].concat([d[1]]);
          },
        },
        {
          name: "unsigned_decimal$ebnf$2$subexpression$1",
          symbols: [
            { literal: "." },
            "unsigned_decimal$ebnf$2$subexpression$1$ebnf$1",
          ],
        },
        {
          name: "unsigned_decimal$ebnf$2",
          symbols: ["unsigned_decimal$ebnf$2$subexpression$1"],
          postprocess: id,
        },
        {
          name: "unsigned_decimal$ebnf$2",
          symbols: [],
          postprocess: function (d) {
            return null;
          },
        },
        {
          name: "unsigned_decimal",
          symbols: ["unsigned_decimal$ebnf$1", "unsigned_decimal$ebnf$2"],
          postprocess: function (d) {
            return parseFloat(
              d[0].join("") + (d[1] ? "." + d[1][1].join("") : ""),
            );
          },
        },
        {
          name: "decimal$ebnf$1",
          symbols: [{ literal: "-" }],
          postprocess: id,
        },
        {
          name: "decimal$ebnf$1",
          symbols: [],
          postprocess: function (d) {
            return null;
          },
        },
        { name: "decimal$ebnf$2", symbols: [/[0-9]/] },
        {
          name: "decimal$ebnf$2",
          symbols: ["decimal$ebnf$2", /[0-9]/],
          postprocess: function arrpush(d) {
            return d[0].concat([d[1]]);
          },
        },
        { name: "decimal$ebnf$3$subexpression$1$ebnf$1", symbols: [/[0-9]/] },
        {
          name: "decimal$ebnf$3$subexpression$1$ebnf$1",
          symbols: ["decimal$ebnf$3$subexpression$1$ebnf$1", /[0-9]/],
          postprocess: function arrpush(d) {
            return d[0].concat([d[1]]);
          },
        },
        {
          name: "decimal$ebnf$3$subexpression$1",
          symbols: [{ literal: "." }, "decimal$ebnf$3$subexpression$1$ebnf$1"],
        },
        {
          name: "decimal$ebnf$3",
          symbols: ["decimal$ebnf$3$subexpression$1"],
          postprocess: id,
        },
        {
          name: "decimal$ebnf$3",
          symbols: [],
          postprocess: function (d) {
            return null;
          },
        },
        {
          name: "decimal",
          symbols: ["decimal$ebnf$1", "decimal$ebnf$2", "decimal$ebnf$3"],
          postprocess: function (d) {
            return parseFloat(
              (d[0] || "") + d[1].join("") +
                (d[2] ? "." + d[2][1].join("") : ""),
            );
          },
        },
        {
          name: "percentage",
          symbols: ["decimal", { literal: "%" }],
          postprocess: function (d) {
            return d[0] / 100;
          },
        },
        {
          name: "jsonfloat$ebnf$1",
          symbols: [{ literal: "-" }],
          postprocess: id,
        },
        {
          name: "jsonfloat$ebnf$1",
          symbols: [],
          postprocess: function (d) {
            return null;
          },
        },
        { name: "jsonfloat$ebnf$2", symbols: [/[0-9]/] },
        {
          name: "jsonfloat$ebnf$2",
          symbols: ["jsonfloat$ebnf$2", /[0-9]/],
          postprocess: function arrpush(d) {
            return d[0].concat([d[1]]);
          },
        },
        { name: "jsonfloat$ebnf$3$subexpression$1$ebnf$1", symbols: [/[0-9]/] },
        {
          name: "jsonfloat$ebnf$3$subexpression$1$ebnf$1",
          symbols: ["jsonfloat$ebnf$3$subexpression$1$ebnf$1", /[0-9]/],
          postprocess: function arrpush(d) {
            return d[0].concat([d[1]]);
          },
        },
        {
          name: "jsonfloat$ebnf$3$subexpression$1",
          symbols: [
            { literal: "." },
            "jsonfloat$ebnf$3$subexpression$1$ebnf$1",
          ],
        },
        {
          name: "jsonfloat$ebnf$3",
          symbols: ["jsonfloat$ebnf$3$subexpression$1"],
          postprocess: id,
        },
        {
          name: "jsonfloat$ebnf$3",
          symbols: [],
          postprocess: function (d) {
            return null;
          },
        },
        {
          name: "jsonfloat$ebnf$4$subexpression$1$ebnf$1",
          symbols: [/[+-]/],
          postprocess: id,
        },
        {
          name: "jsonfloat$ebnf$4$subexpression$1$ebnf$1",
          symbols: [],
          postprocess: function (d) {
            return null;
          },
        },
        { name: "jsonfloat$ebnf$4$subexpression$1$ebnf$2", symbols: [/[0-9]/] },
        {
          name: "jsonfloat$ebnf$4$subexpression$1$ebnf$2",
          symbols: ["jsonfloat$ebnf$4$subexpression$1$ebnf$2", /[0-9]/],
          postprocess: function arrpush(d) {
            return d[0].concat([d[1]]);
          },
        },
        {
          name: "jsonfloat$ebnf$4$subexpression$1",
          symbols: [
            /[eE]/,
            "jsonfloat$ebnf$4$subexpression$1$ebnf$1",
            "jsonfloat$ebnf$4$subexpression$1$ebnf$2",
          ],
        },
        {
          name: "jsonfloat$ebnf$4",
          symbols: ["jsonfloat$ebnf$4$subexpression$1"],
          postprocess: id,
        },
        {
          name: "jsonfloat$ebnf$4",
          symbols: [],
          postprocess: function (d) {
            return null;
          },
        },
        {
          name: "jsonfloat",
          symbols: [
            "jsonfloat$ebnf$1",
            "jsonfloat$ebnf$2",
            "jsonfloat$ebnf$3",
            "jsonfloat$ebnf$4",
          ],
          postprocess: function (d) {
            return parseFloat(
              (d[0] || "") + d[1].join("") + (d[2]
                ? "." + d[2][1].join("")
                : "") + (d[3]
                  ? "e" + (d[3][1] || "+") + d[3][2].join("")
                  : ""),
            );
          },
        },
        { name: "REQUESTS_FILE$ebnf$1", symbols: [] },
        {
          name: "REQUESTS_FILE$ebnf$1$subexpression$1",
          symbols: ["REQUEST_SEPARATOR"],
        },
        {
          name: "REQUESTS_FILE$ebnf$1",
          symbols: [
            "REQUESTS_FILE$ebnf$1",
            "REQUESTS_FILE$ebnf$1$subexpression$1",
          ],
          postprocess: function arrpush(d) {
            return d[0].concat([d[1]]);
          },
        },
        { name: "REQUESTS_FILE$ebnf$2", symbols: [] },
        {
          name: "REQUESTS_FILE$ebnf$2$subexpression$1",
          symbols: ["REQUEST_WITH_SEPARATOR"],
        },
        {
          name: "REQUESTS_FILE$ebnf$2",
          symbols: [
            "REQUESTS_FILE$ebnf$2",
            "REQUESTS_FILE$ebnf$2$subexpression$1",
          ],
          postprocess: function arrpush(d) {
            return d[0].concat([d[1]]);
          },
        },
        { name: "REQUESTS_FILE$ebnf$3", symbols: [] },
        {
          name: "REQUESTS_FILE$ebnf$3$subexpression$1",
          symbols: ["REQUEST_SEPARATOR"],
        },
        {
          name: "REQUESTS_FILE$ebnf$3",
          symbols: [
            "REQUESTS_FILE$ebnf$3",
            "REQUESTS_FILE$ebnf$3$subexpression$1",
          ],
          postprocess: function arrpush(d) {
            return d[0].concat([d[1]]);
          },
        },
        {
          name: "REQUESTS_FILE",
          symbols: [
            "WHIT?",
            "REQUESTS_FILE$ebnf$1",
            "REQUEST",
            "REQUESTS_FILE$ebnf$2",
            "REQUESTS_FILE$ebnf$3",
          ],
          postprocess: requestsFile2,
        },
        {
          name: "REQUEST_WITH_SEPARATOR$ebnf$1",
          symbols: ["REQUEST_SEPARATOR"],
        },
        {
          name: "REQUEST_WITH_SEPARATOR$ebnf$1",
          symbols: ["REQUEST_WITH_SEPARATOR$ebnf$1", "REQUEST_SEPARATOR"],
          postprocess: function arrpush(d) {
            return d[0].concat([d[1]]);
          },
        },
        {
          name: "REQUEST_WITH_SEPARATOR",
          symbols: ["REQUEST_WITH_SEPARATOR$ebnf$1", "REQUEST"],
          postprocess: nth2(1),
        },
        { name: "REQUEST$ebnf$1", symbols: [] },
        {
          name: "REQUEST$ebnf$1",
          symbols: ["REQUEST$ebnf$1", "LINE_COMMENT"],
          postprocess: function arrpush(d) {
            return d[0].concat([d[1]]);
          },
        },
        {
          name: "REQUEST$ebnf$2",
          symbols: ["RESPONSE_HANDLER"],
          postprocess: id,
        },
        {
          name: "REQUEST$ebnf$2",
          symbols: [],
          postprocess: function (d) {
            return null;
          },
        },
        { name: "REQUEST$ebnf$3", symbols: ["RESPONSE_REF"], postprocess: id },
        {
          name: "REQUEST$ebnf$3",
          symbols: [],
          postprocess: function (d) {
            return null;
          },
        },
        {
          name: "REQUEST",
          symbols: [
            "REQUEST_LINE",
            "NEW_LINE",
            "REQUEST$ebnf$1",
            "HEADERS",
            "NEW_LINE",
            "MESSAGE_BODY",
            "REQUEST$ebnf$2",
            "REQUEST$ebnf$3",
          ],
          postprocess: request2,
        },
        {
          name: "REQUEST_LINE$ebnf$1$subexpression$1",
          symbols: ["METHOD", "__"],
          postprocess: method2,
        },
        {
          name: "REQUEST_LINE$ebnf$1",
          symbols: ["REQUEST_LINE$ebnf$1$subexpression$1"],
          postprocess: id,
        },
        {
          name: "REQUEST_LINE$ebnf$1",
          symbols: [],
          postprocess: function (d) {
            return null;
          },
        },
        {
          name: "REQUEST_LINE$ebnf$2$subexpression$1",
          symbols: ["__", "HTTP_VERSION"],
          postprocess: nth2(1),
        },
        {
          name: "REQUEST_LINE$ebnf$2",
          symbols: ["REQUEST_LINE$ebnf$2$subexpression$1"],
          postprocess: id,
        },
        {
          name: "REQUEST_LINE$ebnf$2",
          symbols: [],
          postprocess: function (d) {
            return null;
          },
        },
        {
          name: "REQUEST_LINE",
          symbols: [
            "REQUEST_LINE$ebnf$1",
            "REQUEST_TARGET",
            "REQUEST_LINE$ebnf$2",
          ],
          postprocess: requestLine2,
        },
        {
          name: "METHOD$string$1",
          symbols: [{ literal: "G" }, { literal: "E" }, { literal: "T" }],
          postprocess: function joiner(d) {
            return d.join("");
          },
        },
        { name: "METHOD", symbols: ["METHOD$string$1"], postprocess: id },
        {
          name: "METHOD$string$2",
          symbols: [
            { literal: "H" },
            { literal: "E" },
            { literal: "A" },
            { literal: "D" },
          ],
          postprocess: function joiner(d) {
            return d.join("");
          },
        },
        { name: "METHOD", symbols: ["METHOD$string$2"], postprocess: id },
        {
          name: "METHOD$string$3",
          symbols: [
            { literal: "P" },
            { literal: "O" },
            { literal: "S" },
            { literal: "T" },
          ],
          postprocess: function joiner(d) {
            return d.join("");
          },
        },
        { name: "METHOD", symbols: ["METHOD$string$3"], postprocess: id },
        {
          name: "METHOD$string$4",
          symbols: [{ literal: "P" }, { literal: "U" }, { literal: "T" }],
          postprocess: function joiner(d) {
            return d.join("");
          },
        },
        { name: "METHOD", symbols: ["METHOD$string$4"], postprocess: id },
        {
          name: "METHOD$string$5",
          symbols: [
            { literal: "D" },
            { literal: "E" },
            { literal: "L" },
            { literal: "E" },
            { literal: "T" },
            { literal: "E" },
          ],
          postprocess: function joiner(d) {
            return d.join("");
          },
        },
        { name: "METHOD", symbols: ["METHOD$string$5"], postprocess: id },
        {
          name: "METHOD$string$6",
          symbols: [
            { literal: "C" },
            { literal: "O" },
            { literal: "N" },
            { literal: "N" },
            { literal: "E" },
            { literal: "C" },
            { literal: "T" },
          ],
          postprocess: function joiner(d) {
            return d.join("");
          },
        },
        { name: "METHOD", symbols: ["METHOD$string$6"], postprocess: id },
        {
          name: "METHOD$string$7",
          symbols: [
            { literal: "P" },
            { literal: "A" },
            { literal: "T" },
            { literal: "C" },
            { literal: "H" },
          ],
          postprocess: function joiner(d) {
            return d.join("");
          },
        },
        { name: "METHOD", symbols: ["METHOD$string$7"], postprocess: id },
        {
          name: "METHOD$string$8",
          symbols: [
            { literal: "O" },
            { literal: "P" },
            { literal: "T" },
            { literal: "I" },
            { literal: "O" },
            { literal: "N" },
            { literal: "S" },
          ],
          postprocess: function joiner(d) {
            return d.join("");
          },
        },
        { name: "METHOD", symbols: ["METHOD$string$8"], postprocess: id },
        {
          name: "METHOD$string$9",
          symbols: [
            { literal: "T" },
            { literal: "R" },
            { literal: "A" },
            { literal: "C" },
            { literal: "E" },
          ],
          postprocess: function joiner(d) {
            return d.join("");
          },
        },
        { name: "METHOD", symbols: ["METHOD$string$9"], postprocess: id },
        {
          name: "HTTP_VERSION$string$1",
          symbols: [
            { literal: "H" },
            { literal: "T" },
            { literal: "T" },
            { literal: "P" },
            { literal: "/" },
          ],
          postprocess: function joiner(d) {
            return d.join("");
          },
        },
        {
          name: "HTTP_VERSION",
          symbols: [
            "HTTP_VERSION$string$1",
            "DIGIT",
            { literal: "." },
            "DIGIT",
          ],
          postprocess: httpVersion3,
        },
        { name: "REQUEST_TARGET$subexpression$1", symbols: ["ORIGIN_FORM"] },
        { name: "REQUEST_TARGET$subexpression$1", symbols: ["ABSOLUTE_FORM"] },
        { name: "REQUEST_TARGET$subexpression$1", symbols: ["ASTERISK_FORM"] },
        {
          name: "REQUEST_TARGET",
          symbols: ["REQUEST_TARGET$subexpression$1"],
          postprocess: requestTarget3,
        },
        {
          name: "ORIGIN_FORM$ebnf$1$subexpression$1",
          symbols: [{ literal: "?" }, "QUERY"],
        },
        {
          name: "ORIGIN_FORM$ebnf$1",
          symbols: ["ORIGIN_FORM$ebnf$1$subexpression$1"],
          postprocess: id,
        },
        {
          name: "ORIGIN_FORM$ebnf$1",
          symbols: [],
          postprocess: function (d) {
            return null;
          },
        },
        {
          name: "ORIGIN_FORM$ebnf$2$subexpression$1",
          symbols: [{ literal: "#" }, "FRAGMENT"],
        },
        {
          name: "ORIGIN_FORM$ebnf$2",
          symbols: ["ORIGIN_FORM$ebnf$2$subexpression$1"],
          postprocess: id,
        },
        {
          name: "ORIGIN_FORM$ebnf$2",
          symbols: [],
          postprocess: function (d) {
            return null;
          },
        },
        {
          name: "ORIGIN_FORM",
          symbols: [
            "ABSOLUTE_PATH",
            "ORIGIN_FORM$ebnf$1",
            "ORIGIN_FORM$ebnf$2",
          ],
          postprocess: originForm3,
        },
        {
          name: "ABSOLUTE_FORM$ebnf$1$subexpression$1$string$1",
          symbols: [{ literal: ":" }, { literal: "/" }, { literal: "/" }],
          postprocess: function joiner(d) {
            return d.join("");
          },
        },
        {
          name: "ABSOLUTE_FORM$ebnf$1$subexpression$1",
          symbols: ["SCHEME", "ABSOLUTE_FORM$ebnf$1$subexpression$1$string$1"],
        },
        {
          name: "ABSOLUTE_FORM$ebnf$1",
          symbols: ["ABSOLUTE_FORM$ebnf$1$subexpression$1"],
          postprocess: id,
        },
        {
          name: "ABSOLUTE_FORM$ebnf$1",
          symbols: [],
          postprocess: function (d) {
            return null;
          },
        },
        {
          name: "ABSOLUTE_FORM$ebnf$2$subexpression$1",
          symbols: [{ literal: "?" }, "QUERY"],
        },
        {
          name: "ABSOLUTE_FORM$ebnf$2",
          symbols: ["ABSOLUTE_FORM$ebnf$2$subexpression$1"],
          postprocess: id,
        },
        {
          name: "ABSOLUTE_FORM$ebnf$2",
          symbols: [],
          postprocess: function (d) {
            return null;
          },
        },
        {
          name: "ABSOLUTE_FORM$ebnf$3$subexpression$1",
          symbols: [{ literal: "#" }, "FRAGMENT"],
        },
        {
          name: "ABSOLUTE_FORM$ebnf$3",
          symbols: ["ABSOLUTE_FORM$ebnf$3$subexpression$1"],
          postprocess: id,
        },
        {
          name: "ABSOLUTE_FORM$ebnf$3",
          symbols: [],
          postprocess: function (d) {
            return null;
          },
        },
        {
          name: "ABSOLUTE_FORM",
          symbols: [
            "ABSOLUTE_FORM$ebnf$1",
            "HIER_PART",
            "ABSOLUTE_FORM$ebnf$2",
            "ABSOLUTE_FORM$ebnf$3",
          ],
          postprocess: absoluteForm3,
        },
        {
          name: "SCHEME$string$1",
          symbols: [
            { literal: "h" },
            { literal: "t" },
            { literal: "t" },
            { literal: "p" },
          ],
          postprocess: function joiner(d) {
            return d.join("");
          },
        },
        { name: "SCHEME", symbols: ["SCHEME$string$1"], postprocess: scheme2 },
        {
          name: "SCHEME$string$2",
          symbols: [
            { literal: "h" },
            { literal: "t" },
            { literal: "t" },
            { literal: "p" },
            { literal: "s" },
          ],
          postprocess: function joiner(d) {
            return d.join("");
          },
        },
        { name: "SCHEME", symbols: ["SCHEME$string$2"], postprocess: scheme2 },
        {
          name: "HIER_PART$ebnf$1",
          symbols: ["ABSOLUTE_PATH"],
          postprocess: id,
        },
        {
          name: "HIER_PART$ebnf$1",
          symbols: [],
          postprocess: function (d) {
            return null;
          },
        },
        {
          name: "HIER_PART",
          symbols: ["AUTHORITY", "HIER_PART$ebnf$1"],
          postprocess: hierPart2,
        },
        {
          name: "ASTERISK_FORM",
          symbols: [{ literal: "*" }],
          postprocess: asteriskForm4,
        },
        {
          name: "AUTHORITY$ebnf$1$subexpression$1",
          symbols: [{ literal: ":" }, "PORT"],
        },
        {
          name: "AUTHORITY$ebnf$1",
          symbols: ["AUTHORITY$ebnf$1$subexpression$1"],
          postprocess: id,
        },
        {
          name: "AUTHORITY$ebnf$1",
          symbols: [],
          postprocess: function (d) {
            return null;
          },
        },
        {
          name: "AUTHORITY",
          symbols: ["HOST", "AUTHORITY$ebnf$1"],
          postprocess: authority2,
        },
        { name: "PORT", symbols: ["DIGIT"], postprocess: port2 },
        {
          name: "HOST$subexpression$1",
          symbols: [{ literal: "[" }, "IPV6_ADDRESS", { literal: "]" }],
        },
        { name: "HOST$subexpression$1", symbols: ["IPV4_OR_REG_NAME"] },
        { name: "HOST", symbols: ["HOST$subexpression$1"], postprocess: host2 },
        { name: "IPV6_ADDRESS$ebnf$1", symbols: [/[^\s/\]]/] },
        {
          name: "IPV6_ADDRESS$ebnf$1",
          symbols: ["IPV6_ADDRESS$ebnf$1", /[^\s/\]]/],
          postprocess: function arrpush(d) {
            return d[0].concat([d[1]]);
          },
        },
        {
          name: "IPV6_ADDRESS",
          symbols: ["IPV6_ADDRESS$ebnf$1"],
          postprocess: ipv6Address3,
        },
        { name: "IPV4_OR_REG_NAME$ebnf$1", symbols: [/[^\s/:?#]/] },
        {
          name: "IPV4_OR_REG_NAME$ebnf$1",
          symbols: ["IPV4_OR_REG_NAME$ebnf$1", /[^\s/:?#]/],
          postprocess: function arrpush(d) {
            return d[0].concat([d[1]]);
          },
        },
        {
          name: "IPV4_OR_REG_NAME",
          symbols: ["IPV4_OR_REG_NAME$ebnf$1"],
          postprocess: ipv4OrRegName3,
        },
        {
          name: "ABSOLUTE_PATH$ebnf$1$subexpression$1",
          symbols: ["PATH_SEPARATOR", "SEGMENT"],
        },
        {
          name: "ABSOLUTE_PATH$ebnf$1",
          symbols: ["ABSOLUTE_PATH$ebnf$1$subexpression$1"],
        },
        {
          name: "ABSOLUTE_PATH$ebnf$1$subexpression$2",
          symbols: ["PATH_SEPARATOR", "SEGMENT"],
        },
        {
          name: "ABSOLUTE_PATH$ebnf$1",
          symbols: [
            "ABSOLUTE_PATH$ebnf$1",
            "ABSOLUTE_PATH$ebnf$1$subexpression$2",
          ],
          postprocess: function arrpush(d) {
            return d[0].concat([d[1]]);
          },
        },
        {
          name: "ABSOLUTE_PATH",
          symbols: ["ABSOLUTE_PATH$ebnf$1"],
          postprocess: absolutePath4,
        },
        {
          name: "PATH_SEPARATOR$subexpression$1",
          symbols: [{ literal: "/" }],
          postprocess: id,
        },
        {
          name: "PATH_SEPARATOR$subexpression$1",
          symbols: ["NEW_LINE_WITH_INDENT"],
          postprocess: () => "\n",
        },
        {
          name: "PATH_SEPARATOR",
          symbols: ["PATH_SEPARATOR$subexpression$1"],
          postprocess: pathSeparator3,
        },
        { name: "SEGMENT$ebnf$1", symbols: [] },
        {
          name: "SEGMENT$ebnf$1",
          symbols: ["SEGMENT$ebnf$1", /[^\r\n/?# ]/],
          postprocess: function arrpush(d) {
            return d[0].concat([d[1]]);
          },
        },
        { name: "SEGMENT", symbols: ["SEGMENT$ebnf$1"], postprocess: segment2 },
        { name: "QUERY$ebnf$1", symbols: [] },
        {
          name: "QUERY$ebnf$1",
          symbols: ["QUERY$ebnf$1", /[^\r\n\s#]/],
          postprocess: function arrpush(d) {
            return d[0].concat([d[1]]);
          },
        },
        {
          name: "QUERY$ebnf$2$subexpression$1",
          symbols: ["NEW_LINE_WITH_INDENT", "QUERY"],
        },
        {
          name: "QUERY$ebnf$2",
          symbols: ["QUERY$ebnf$2$subexpression$1"],
          postprocess: id,
        },
        {
          name: "QUERY$ebnf$2",
          symbols: [],
          postprocess: function (d) {
            return null;
          },
        },
        {
          name: "QUERY",
          symbols: ["QUERY$ebnf$1", "QUERY$ebnf$2"],
          postprocess: query2,
        },
        { name: "FRAGMENT$ebnf$1", symbols: [] },
        {
          name: "FRAGMENT$ebnf$1",
          symbols: ["FRAGMENT$ebnf$1", /[^\r\n\s\?]/],
          postprocess: function arrpush(d) {
            return d[0].concat([d[1]]);
          },
        },
        {
          name: "FRAGMENT$ebnf$2$subexpression$1",
          symbols: ["NEW_LINE_WITH_INDENT", "FRAGMENT"],
        },
        {
          name: "FRAGMENT$ebnf$2",
          symbols: ["FRAGMENT$ebnf$2$subexpression$1"],
          postprocess: id,
        },
        {
          name: "FRAGMENT$ebnf$2",
          symbols: [],
          postprocess: function (d) {
            return null;
          },
        },
        {
          name: "FRAGMENT",
          symbols: ["FRAGMENT$ebnf$1", "FRAGMENT$ebnf$2"],
          postprocess: fragment2,
        },
        { name: "HEADERS$ebnf$1", symbols: [] },
        { name: "HEADERS$ebnf$1$subexpression$1$ebnf$1", symbols: [] },
        {
          name: "HEADERS$ebnf$1$subexpression$1$ebnf$1",
          symbols: ["HEADERS$ebnf$1$subexpression$1$ebnf$1", "LINE_COMMENT"],
          postprocess: function arrpush(d) {
            return d[0].concat([d[1]]);
          },
        },
        {
          name: "HEADERS$ebnf$1$subexpression$1",
          symbols: [
            "HEADER_FIELD",
            "NEW_LINE",
            "HEADERS$ebnf$1$subexpression$1$ebnf$1",
          ],
          postprocess: id,
        },
        {
          name: "HEADERS$ebnf$1",
          symbols: ["HEADERS$ebnf$1", "HEADERS$ebnf$1$subexpression$1"],
          postprocess: function arrpush(d) {
            return d[0].concat([d[1]]);
          },
        },
        { name: "HEADERS", symbols: ["HEADERS$ebnf$1"], postprocess: headers2 },
        {
          name: "HEADER_FIELD",
          symbols: ["FIELD_NAME", { literal: ":" }, "_", "FIELD_VALUE", "_"],
          postprocess: headerField3,
        },
        { name: "FIELD_NAME$ebnf$1", symbols: [/[^\r\n:]/] },
        {
          name: "FIELD_NAME$ebnf$1",
          symbols: ["FIELD_NAME$ebnf$1", /[^\r\n:]/],
          postprocess: function arrpush(d) {
            return d[0].concat([d[1]]);
          },
        },
        {
          name: "FIELD_NAME",
          symbols: ["FIELD_NAME$ebnf$1"],
          postprocess: fieldName2,
        },
        { name: "FIELD_VALUE$ebnf$1", symbols: [] },
        {
          name: "FIELD_VALUE$ebnf$1",
          symbols: ["FIELD_VALUE$ebnf$1", "INPUT_CHARACTER"],
          postprocess: function arrpush(d) {
            return d[0].concat([d[1]]);
          },
        },
        {
          name: "FIELD_VALUE$ebnf$2$subexpression$1$subexpression$1",
          symbols: [{ literal: "#" }],
        },
        {
          name: "FIELD_VALUE$ebnf$2$subexpression$1$subexpression$1$string$1",
          symbols: [{ literal: "/" }, { literal: "/" }],
          postprocess: function joiner(d) {
            return d.join("");
          },
        },
        {
          name: "FIELD_VALUE$ebnf$2$subexpression$1$subexpression$1",
          symbols: [
            "FIELD_VALUE$ebnf$2$subexpression$1$subexpression$1$string$1",
          ],
        },
        { name: "FIELD_VALUE$ebnf$2$subexpression$1$ebnf$1", symbols: [] },
        {
          name: "FIELD_VALUE$ebnf$2$subexpression$1$ebnf$1",
          symbols: [
            "FIELD_VALUE$ebnf$2$subexpression$1$ebnf$1",
            "INPUT_CHARACTER",
          ],
          postprocess: function arrpush(d) {
            return d[0].concat([d[1]]);
          },
        },
        {
          name: "FIELD_VALUE$ebnf$2$subexpression$1",
          symbols: [
            "__",
            "FIELD_VALUE$ebnf$2$subexpression$1$subexpression$1",
            "FIELD_VALUE$ebnf$2$subexpression$1$ebnf$1",
          ],
        },
        {
          name: "FIELD_VALUE$ebnf$2",
          symbols: ["FIELD_VALUE$ebnf$2$subexpression$1"],
          postprocess: id,
        },
        {
          name: "FIELD_VALUE$ebnf$2",
          symbols: [],
          postprocess: function (d) {
            return null;
          },
        },
        {
          name: "FIELD_VALUE",
          symbols: ["FIELD_VALUE$ebnf$1", "FIELD_VALUE$ebnf$2"],
          postprocess: fieldValue2,
        },
        {
          name: "FIELD_VALUE",
          symbols: ["NEW_LINE_WITH_INDENT", "FIELD_VALUE"],
          postprocess: nth2(1),
        },
        {
          name: "MESSAGE_BODY",
          symbols: ["MESSAGES"],
          postprocess: messageBody3,
        },
        { name: "MESSAGES$ebnf$1", symbols: [] },
        {
          name: "MESSAGES$ebnf$1$subexpression$1",
          symbols: ["MESSAGE_LINE", "NEW_LINE"],
          postprocess: id,
        },
        {
          name: "MESSAGES$ebnf$1",
          symbols: ["MESSAGES$ebnf$1", "MESSAGES$ebnf$1$subexpression$1"],
          postprocess: function arrpush(d) {
            return d[0].concat([d[1]]);
          },
        },
        {
          name: "MESSAGES",
          symbols: ["MESSAGES$ebnf$1"],
          postprocess: messages2,
        },
        { name: "MESSAGE_LINE$ebnf$1", symbols: [] },
        {
          name: "MESSAGE_LINE$ebnf$1",
          symbols: ["MESSAGE_LINE$ebnf$1", "INPUT_CHARACTER"],
          postprocess: function arrpush(d) {
            return d[0].concat([d[1]]);
          },
        },
        {
          name: "MESSAGE_LINE",
          symbols: ["MESSAGE_LINE$ebnf$1"],
          postprocess: messageLine3,
        },
        { name: "MESSAGE_LINE", symbols: ["INPUT_FILE_REF"], postprocess: id },
        {
          name: "INPUT_FILE_REF",
          symbols: [{ literal: "<" }, "__", "FILE_PATH"],
          postprocess: inputFileRef2,
        },
        { name: "FILE_PATH$ebnf$1", symbols: ["INPUT_CHARACTER"] },
        {
          name: "FILE_PATH$ebnf$1",
          symbols: ["FILE_PATH$ebnf$1", "INPUT_CHARACTER"],
          postprocess: function arrpush(d) {
            return d[0].concat([d[1]]);
          },
        },
        {
          name: "FILE_PATH",
          symbols: ["FILE_PATH$ebnf$1"],
          postprocess: filePath2,
        },
        {
          name: "RESPONSE_HANDLER$subexpression$1$ebnf$1",
          symbols: ["NEW_LINE"],
        },
        {
          name: "RESPONSE_HANDLER$subexpression$1$ebnf$1",
          symbols: ["RESPONSE_HANDLER$subexpression$1$ebnf$1", "NEW_LINE"],
          postprocess: function arrpush(d) {
            return d[0].concat([d[1]]);
          },
        },
        {
          name: "RESPONSE_HANDLER$subexpression$1",
          symbols: [
            { literal: ">" },
            "__",
            "HANDLER_SCRIPT",
            "RESPONSE_HANDLER$subexpression$1$ebnf$1",
          ],
          postprocess: nth2(2),
        },
        {
          name: "RESPONSE_HANDLER$subexpression$1$ebnf$2",
          symbols: ["NEW_LINE"],
        },
        {
          name: "RESPONSE_HANDLER$subexpression$1$ebnf$2",
          symbols: ["RESPONSE_HANDLER$subexpression$1$ebnf$2", "NEW_LINE"],
          postprocess: function arrpush(d) {
            return d[0].concat([d[1]]);
          },
        },
        {
          name: "RESPONSE_HANDLER$subexpression$1",
          symbols: [
            { literal: ">" },
            "__",
            "FILE_PATH",
            "RESPONSE_HANDLER$subexpression$1$ebnf$2",
          ],
          postprocess: responseHandlerFilePath2,
        },
        {
          name: "RESPONSE_HANDLER",
          symbols: ["RESPONSE_HANDLER$subexpression$1"],
          postprocess: responseHandler2,
        },
        {
          name: "HANDLER_SCRIPT$string$1",
          symbols: [{ literal: "{" }, { literal: "%" }],
          postprocess: function joiner(d) {
            return d.join("");
          },
        },
        { name: "HANDLER_SCRIPT$ebnf$1", symbols: [/[\S\s]/] },
        {
          name: "HANDLER_SCRIPT$ebnf$1",
          symbols: ["HANDLER_SCRIPT$ebnf$1", /[\S\s]/],
          postprocess: function arrpush(d) {
            return d[0].concat([d[1]]);
          },
        },
        {
          name: "HANDLER_SCRIPT$string$2",
          symbols: [{ literal: "%" }, { literal: "}" }],
          postprocess: function joiner(d) {
            return d.join("");
          },
        },
        {
          name: "HANDLER_SCRIPT",
          symbols: [
            "HANDLER_SCRIPT$string$1",
            "HANDLER_SCRIPT$ebnf$1",
            "HANDLER_SCRIPT$string$2",
          ],
          postprocess: handlerScript2,
        },
        {
          name: "RESPONSE_REF$string$1",
          symbols: [{ literal: "<" }, { literal: ">" }],
          postprocess: function joiner(d) {
            return d.join("");
          },
        },
        {
          name: "RESPONSE_REF",
          symbols: ["RESPONSE_REF$string$1", "__", "FILE_PATH", "WHIT"],
          postprocess: responseRef2,
        },
        { name: "INPUT_CHARACTER", symbols: [/[^\r\n]/] },
        { name: "ALPHA", symbols: [/[a-zA-Z]/] },
        { name: "DIGIT", symbols: ["unsigned_int"] },
        { name: "IDENTIFIER_CHARACTER", symbols: [/[_a-zA-Z0-9-]/] },
        { name: "IDENTIFIER$ebnf$1", symbols: ["IDENTIFIER_CHARACTER"] },
        {
          name: "IDENTIFIER$ebnf$1",
          symbols: ["IDENTIFIER$ebnf$1", "IDENTIFIER_CHARACTER"],
          postprocess: function arrpush(d) {
            return d[0].concat([d[1]]);
          },
        },
        { name: "IDENTIFIER", symbols: ["IDENTIFIER$ebnf$1"] },
        { name: "CR", symbols: [/[\r]/] },
        { name: "LF", symbols: [/[\n]/] },
        { name: "CRLF", symbols: ["CR", "LF"] },
        { name: "NEW_LINE", symbols: ["CR"] },
        { name: "NEW_LINE", symbols: ["LF"] },
        { name: "NEW_LINE", symbols: ["CRLF"] },
        {
          name: "NEW_LINE_WITH_INDENT",
          symbols: ["NEW_LINE", "__"],
          postprocess: stubNull2,
        },
        { name: "LINE_TAIL$ebnf$1", symbols: [] },
        {
          name: "LINE_TAIL$ebnf$1",
          symbols: ["LINE_TAIL$ebnf$1", "INPUT_CHARACTER"],
          postprocess: function arrpush(d) {
            return d[0].concat([d[1]]);
          },
        },
        {
          name: "LINE_TAIL",
          symbols: ["LINE_TAIL$ebnf$1", "NEW_LINE"],
          postprocess: lineTail2,
        },
        { name: "SP", symbols: [{ literal: " " }] },
        { name: "HT", symbols: [/[\t]/] },
        { name: "FF", symbols: [/[\f]/] },
        { name: "WHITESPACE", symbols: ["SP"], postprocess: id },
        { name: "WHITESPACE", symbols: ["HT"], postprocess: id },
        { name: "WHITESPACE", symbols: ["FF"], postprocess: id },
        { name: "OPTIONAL_WHITESPACE$ebnf$1", symbols: [] },
        {
          name: "OPTIONAL_WHITESPACE$ebnf$1",
          symbols: ["OPTIONAL_WHITESPACE$ebnf$1", "WHITESPACE"],
          postprocess: function arrpush(d) {
            return d[0].concat([d[1]]);
          },
        },
        {
          name: "OPTIONAL_WHITESPACE",
          symbols: ["OPTIONAL_WHITESPACE$ebnf$1"],
          postprocess: stubNull2,
        },
        { name: "REQUIRED_WHITESPACE$ebnf$1", symbols: ["WHITESPACE"] },
        {
          name: "REQUIRED_WHITESPACE$ebnf$1",
          symbols: ["REQUIRED_WHITESPACE$ebnf$1", "WHITESPACE"],
          postprocess: function arrpush(d) {
            return d[0].concat([d[1]]);
          },
        },
        {
          name: "REQUIRED_WHITESPACE",
          symbols: ["REQUIRED_WHITESPACE$ebnf$1"],
          postprocess: stubNull2,
        },
        { name: "_", symbols: ["OPTIONAL_WHITESPACE"], postprocess: stubNull2 },
        {
          name: "__",
          symbols: ["REQUIRED_WHITESPACE"],
          postprocess: stubNull2,
        },
        { name: "WHIT", symbols: ["WHITRAW"] },
        { name: "WHIT", symbols: ["WHITRAW?", "LINE_COMMENT", "WHIT?"] },
        { name: "WHIT?", symbols: [] },
        { name: "WHIT?", symbols: ["WHIT"] },
        { name: "WHITRAW", symbols: [/[\s]/] },
        { name: "WHITRAW", symbols: ["WHITRAW", /[\s]/] },
        { name: "WHITRAW?", symbols: [] },
        { name: "WHITRAW?", symbols: ["WHITRAW"] },
        {
          name: "LINE_COMMENT",
          symbols: [{ literal: "#" }, "LINE_TAIL"],
          postprocess: lineComment2,
        },
        {
          name: "LINE_COMMENT$string$1",
          symbols: [{ literal: "/" }, { literal: "/" }],
          postprocess: function joiner(d) {
            return d.join("");
          },
        },
        {
          name: "LINE_COMMENT",
          symbols: ["LINE_COMMENT$string$1", "LINE_TAIL"],
          postprocess: lineComment2,
        },
        {
          name: "REQUEST_SEPARATOR$string$1",
          symbols: [{ literal: "#" }, { literal: "#" }, { literal: "#" }],
          postprocess: function joiner(d) {
            return d.join("");
          },
        },
        {
          name: "REQUEST_SEPARATOR",
          symbols: ["REQUEST_SEPARATOR$string$1", "NEW_LINE", "WHIT?"],
          postprocess: stubNull2,
        },
        {
          name: "REQUEST_SEPARATOR$string$2",
          symbols: [
            { literal: "#" },
            { literal: "#" },
            { literal: "#" },
            { literal: " " },
          ],
          postprocess: function joiner(d) {
            return d.join("");
          },
        },
        {
          name: "REQUEST_SEPARATOR",
          symbols: ["REQUEST_SEPARATOR$string$2", "LINE_TAIL", "WHIT?"],
          postprocess: stubNull2,
        },
        {
          name: "ENV_VARIABLE$string$1",
          symbols: [{ literal: "{" }, { literal: "{" }],
          postprocess: function joiner(d) {
            return d.join("");
          },
        },
        {
          name: "ENV_VARIABLE$ebnf$1",
          symbols: [{ literal: "$" }],
          postprocess: id,
        },
        {
          name: "ENV_VARIABLE$ebnf$1",
          symbols: [],
          postprocess: function (d) {
            return null;
          },
        },
        {
          name: "ENV_VARIABLE$string$2",
          symbols: [{ literal: "}" }, { literal: "}" }],
          postprocess: function joiner(d) {
            return d.join("");
          },
        },
        {
          name: "ENV_VARIABLE",
          symbols: [
            "ENV_VARIABLE$string$1",
            "_",
            "ENV_VARIABLE$ebnf$1",
            "IDENTIFIER",
            "_",
            "ENV_VARIABLE$string$2",
          ],
          postprocess: envVariable2,
        },
      ],
      ParserStart: "REQUESTS_FILE",
    };
    {
      module.exports = grammar2;
    }
  })();
});
const compiledGrammar = nearley2.Grammar.fromCompiled(grammar);
const createParser = () => new nearley2.Parser(compiledGrammar);
const parse = (http) => {
  const parser2 = createParser();
  parser2.feed(http);
  return parser2.results;
};
var parser = {
  createParser,
  parse,
};
const { prop, pipe: pipe$2, curryN, always } = require$$0;
const { isFunction, isString, isNotNil } = require$$0$1;
const getVisitFn = (visitor2, type, isLeaving) => {
  const typeVisitor = visitor2[type];
  if (isNotNil(typeVisitor)) {
    if (!isLeaving && isFunction(typeVisitor)) {
      return typeVisitor;
    }
    const typeSpecificVisitor = isLeaving
      ? typeVisitor.leave
      : typeVisitor.enter;
    if (isFunction(typeSpecificVisitor)) {
      return typeSpecificVisitor;
    }
  } else {
    const specificVisitor = isLeaving ? visitor2.leave : visitor2.enter;
    if (isNotNil(specificVisitor)) {
      if (isFunction(specificVisitor)) {
        return specificVisitor;
      }
      const specificTypeVisitor = specificVisitor[type];
      if (isFunction(specificTypeVisitor)) {
        return specificTypeVisitor;
      }
    }
  }
  return null;
};
const defaultKeyMap = new Proxy({}, {
  get: always(["children"]),
});
const BREAK = {};
const getNodeType = prop("type");
const isNode = curryN(1, pipe$2(getNodeType, isString));
const visit = (root, visitor2, {
  keyMap = defaultKeyMap,
  state = {},
  breakSymbol = BREAK,
  visitFnGetter = getVisitFn,
  nodeTypeGetter = getNodeType,
  nodePredicate = isNode,
} = {}) => {
  const visitorKeys = keyMap || {};
  let stack;
  let inArray = Array.isArray(root);
  let keys = [root];
  let index = -1;
  let parent;
  let edits = [];
  const path = [];
  const ancestors = [];
  let newRoot = root;
  do {
    index += 1;
    const isLeaving = index === keys.length;
    let key;
    let node2;
    const isEdited = isLeaving && edits.length !== 0;
    if (isLeaving) {
      key = ancestors.length === 0 ? void 0 : path.pop();
      node2 = parent;
      parent = ancestors.pop();
      if (isEdited) {
        if (inArray) {
          node2 = node2.slice();
        } else {
          node2 = Object.create(
            Object.getPrototypeOf(node2),
            Object.getOwnPropertyDescriptors(node2),
          );
        }
        let editOffset = 0;
        for (let ii = 0; ii < edits.length; ii += 1) {
          let editKey = edits[ii][0];
          const editValue = edits[ii][1];
          if (inArray) {
            editKey -= editOffset;
          }
          if (inArray && editValue === null) {
            node2.splice(editKey, 1);
            editOffset += 1;
          } else {
            node2[editKey] = editValue;
          }
        }
      }
      index = stack.index;
      keys = stack.keys;
      edits = stack.edits;
      inArray = stack.inArray;
      stack = stack.prev;
    } else {
      key = parent ? inArray ? index : keys[index] : void 0;
      node2 = parent ? parent[key] : newRoot;
      if (node2 === null || node2 === void 0) {
        continue;
      }
      if (parent) {
        path.push(key);
      }
    }
    let result;
    if (!Array.isArray(node2)) {
      if (!nodePredicate(node2)) {
        throw new Error(`Invalid AST Node:  ${JSON.stringify(node2)}`);
      }
      const visitFn = visitFnGetter(visitor2, nodeTypeGetter(node2), isLeaving);
      if (visitFn) {
        for (const [stateKey, stateValue] of Object.entries(state)) {
          visitor2[stateKey] = stateValue;
        }
        result = visitFn.call(visitor2, node2, key, parent, path, ancestors);
        if (result === breakSymbol) {
          break;
        }
        if (result === false) {
          if (!isLeaving) {
            path.pop();
            continue;
          }
        } else if (result !== void 0) {
          edits.push([key, result]);
          if (!isLeaving) {
            if (nodePredicate(result)) {
              node2 = result;
            } else {
              path.pop();
              continue;
            }
          }
        }
      }
    }
    if (result === void 0 && isEdited) {
      edits.push([key, node2]);
    }
    if (!isLeaving) {
      stack = { inArray, index, keys, edits, prev: stack };
      inArray = Array.isArray(node2);
      keys = inArray ? node2 : visitorKeys[nodeTypeGetter(node2)] || [];
      index = -1;
      edits = [];
      if (parent) {
        ancestors.push(parent);
      }
      parent = node2;
    }
  } while (stack !== void 0);
  if (edits.length !== 0) {
    [, newRoot] = edits[edits.length - 1];
  }
  return newRoot;
};
var visitor = {
  getVisitFn,
  keyMap: defaultKeyMap,
  BREAK,
  getNodeType,
  isNode,
  visit,
};
const { visit: visit$1 } = visitor;
const SexpressionVisitor = stampit2({
  props: {
    nestingLevel: 0,
    result: "",
  },
  methods: {
    enter(node2) {
      const indent = "  ".repeat(this.nestingLevel);
      this.result += this.nestingLevel > 0 ? "\n" : "";
      this.result += `${indent}(${node2.type}`;
      this.nestingLevel += 1;
    },
    leave() {
      this.nestingLevel -= 1;
      this.result += ")";
    },
  },
});
const sexprs = (cst2) => {
  const visitor2 = SexpressionVisitor();
  visit$1(cst2, visitor2);
  return visitor2.result;
};
var sexprs_1 = {
  sexprs,
};
const { trim } = require$$0;
const AbsolutePathVisitor = stampit2({
  props: {
    absolutePath: "",
  },
  methods: {
    "path-separator": function pathSeparator2(node2) {
      this.absolutePath += trim(node2.value);
    },
    segment(node2) {
      this.absolutePath += node2.value;
    },
  },
});
var AbsolutePathVisitor_1 = AbsolutePathVisitor;
const { visit: visit$2 } = visitor;
const OriginFormVisitor = stampit2({
  props: {
    originForm: "",
  },
  methods: {
    "absolute-path": function absolutePath2(node2) {
      const visitor2 = AbsolutePathVisitor_1();
      visit$2(node2, visitor2);
      this.originForm += visitor2.absolutePath;
      return false;
    },
    query(node2) {
      this.originForm += `?${node2.value}`;
    },
    fragment(node2) {
      this.originForm += `#${node2.value}`;
    },
  },
});
var OriginFormVisitor_1 = OriginFormVisitor;
const { visit: visit$3 } = visitor;
const AbsoluteFormVisitor = stampit2({
  props: {
    absoluteForm: "",
  },
  methods: {
    scheme(node2) {
      this.absoluteForm = `${node2.value}://`;
    },
    "ipv4-or-reg-name": function ipv4OrRegName2(node2) {
      this.absoluteForm += node2.value;
    },
    "ipv6-address": function ipv6Address2(node2) {
      this.absoluteForm += `[${node2.value}]`;
    },
    "absolute-path": function absolutePath3(node2) {
      const visitor2 = AbsolutePathVisitor_1();
      visit$3(node2, visitor2);
      this.absoluteForm += visitor2.absolutePath;
      return false;
    },
    query(node2) {
      this.absoluteForm += `?${node2.value}`;
    },
    fragment(node2) {
      this.absoluteForm += `#${node2.value}`;
    },
  },
});
var AbsoluteFormVisitor_1 = AbsoluteFormVisitor;
const AsteriskFormVisitor = stampit2({
  props: {
    asteriskForm: "",
  },
  methods: {
    "asterisk-form": function asteriskForm2(node2) {
      this.asteriskForm = node2.value;
    },
  },
});
var AsteriskFormVisitor_1 = AsteriskFormVisitor;
const { BREAK: BREAK$1, visit: visit$4 } = visitor;
const RequestTargetVisitor = stampit2({
  prop: {
    requestTarget: "",
  },
  methods: {
    "origin-form": function originForm2(node2) {
      const visitor2 = OriginFormVisitor_1();
      visit$4(node2, visitor2);
      this.requestTarget = visitor2.originForm;
      return BREAK$1;
    },
    "absolute-form": function absoluteForm2(node2) {
      const visitor2 = AbsoluteFormVisitor_1();
      visit$4(node2, visitor2);
      this.requestTarget = visitor2.absoluteForm;
      return BREAK$1;
    },
    "asterisk-form": function asteriskForm3(node2) {
      const visitor2 = AsteriskFormVisitor_1();
      visit$4(node2, visitor2);
      this.requestTarget = visitor2.asteriskForm;
      return BREAK$1;
    },
  },
});
var RequestTargetVisitor_1 = RequestTargetVisitor;
const MessageBodyVisitor = stampit2({
  props: {
    messageBody: "",
  },
  methods: {
    "message-line": function messageLine2(node2) {
      this.messageBody += node2.value;
    },
  },
});
var MessageBodyVisitor_1 = MessageBodyVisitor;
const { visit: visit$5 } = visitor;
const AxiosVisitor = stampit2({
  props: {
    configs: [],
    config: {},
  },
  init() {
    this.configs = [];
  },
  methods: {
    request() {
      this.config = {};
      this.configs.push(this.config);
    },
    method(node2) {
      this.config.method = node2.value.toLowerCase();
    },
    "http-version": function httpVersion2(node2) {
      if (node2.value === "2.0") {
        throw new Error("AxiosVisitor doesn't support HTTP/2.0");
      }
    },
    "request-target": function requestTarget2(node2) {
      const visitor2 = RequestTargetVisitor_1();
      visit$5(node2, visitor2);
      const url = new URL(visitor2.requestTarget);
      this.config.url = url.pathname;
      this.config.baseURL = `${url.protocol}//${url.hostname}/`;
      this.config.params = url.searchParams;
      return false;
    },
    headers() {
      this.config.headers = {};
    },
    "header-field": function headerField2(node2) {
      this.config.headers[node2.fieldName.value] = node2.fieldValue.value;
      return false;
    },
    "message-body": function messageBody2(node2) {
      const visitor2 = MessageBodyVisitor_1();
      visit$5(node2, visitor2);
      this.config.data = visitor2.messageBody;
      return false;
    },
  },
});
var AxiosVisitor_1 = AxiosVisitor;
const { allSettledP } = require$$0$1;
const { visit: visit$6 } = visitor;
const AxiosRunner = stampit2({
  props: {
    cstTree: null,
    visitor: null,
  },
  init({ cstTree }) {
    this.cstTree = cstTree;
    this.visitor = AxiosVisitor_1();
  },
  methods: {
    async run() {
      visit$6(this.cstTree, this.visitor);
      const { configs } = this.visitor;
      return allSettledP(configs.map(axios2));
    },
  },
});
var axios_1 = AxiosRunner;
const { pathOr } = require$$0;
const { parse: parse$1 } = parser;
const runSpec = async (httpSpec, options = {}) => {
  const cstTree = parse$1(httpSpec);
  const runner = pathOr(axios_1, ["runner"], options)({ cstTree });
  return runner.run();
};
var runtime = {
  runSpec,
};
const { parse: parse$2 } = parser;
const { sexprs: sexprs$1 } = sexprs_1;
const { runSpec: runSpec$1 } = runtime;
var src = {
  parse: parse$2,
  sexprs: sexprs$1,
  runSpec: runSpec$1,
  AxiosVisitor: AxiosVisitor_1,
  AxiosRunner: axios_1,
  AbsoluteFormVisitor: AbsoluteFormVisitor_1,
  AbsolutePathVisitor: AbsolutePathVisitor_1,
  AsteriskFormVisitor: AsteriskFormVisitor_1,
  MessageBodyVisitor: MessageBodyVisitor_1,
  OriginFormVisitor: OriginFormVisitor_1,
  RequestTargetVisitor: RequestTargetVisitor_1,
};
var AbsoluteFormVisitor$1 = src.AbsoluteFormVisitor;
var AbsolutePathVisitor$1 = src.AbsolutePathVisitor;
var AsteriskFormVisitor$1 = src.AsteriskFormVisitor;
var AxiosRunner$1 = src.AxiosRunner;
var AxiosVisitor$1 = src.AxiosVisitor;
var MessageBodyVisitor$1 = src.MessageBodyVisitor;
var OriginFormVisitor$1 = src.OriginFormVisitor;
var RequestTargetVisitor$1 = src.RequestTargetVisitor;
export default src;
var parse$3 = src.parse;
var runSpec$2 = src.runSpec;
var sexprs$2 = src.sexprs;
export {
  AbsoluteFormVisitor$1 as AbsoluteFormVisitor,
  AbsolutePathVisitor$1 as AbsolutePathVisitor,
  AsteriskFormVisitor$1 as AsteriskFormVisitor,
  AxiosRunner$1 as AxiosRunner,
  AxiosVisitor$1 as AxiosVisitor,
  MessageBodyVisitor$1 as MessageBodyVisitor,
  OriginFormVisitor$1 as OriginFormVisitor,
  parse$3 as parse,
  RequestTargetVisitor$1 as RequestTargetVisitor,
  runSpec$2 as runSpec,
  sexprs$2 as sexprs,
  src as __moduleExports,
};
