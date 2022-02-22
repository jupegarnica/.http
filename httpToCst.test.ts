
import { httpToCst } from './httpToCst.ts';
import { assertEquals } from "./dev.deps.ts";


Deno.test({
    name: 'httpToCst',
    fn: () => {
        const http = `
POST https://httpbin.org/post

###
`;
        const cst = httpToCst(http);
        assertEquals(cst.length, 1);
    }
})


Deno.test({
    name: 'httpToCst',
    ignore: false,
    only:true,
    fn: () => {
        const http = `
GET http://example.com/

###
`;
        const cst = httpToCst(http);
        assertEquals(cst.length, 1);

    }
})