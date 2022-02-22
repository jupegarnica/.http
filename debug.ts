import { httpToCst } from './httpToCst.ts';
const http = `
GET http://example.com

###
`;
const cst = httpToCst(http);
// console.log(cst);



function see(nodes: any[]) {
    for (const node of nodes) {
        if (!node) {
            console.log('no node', node);

            continue;
        }
        if (confirm(node.type)) {

            // console.log(JSON.stringify(node, null, 2));
            console.log(node);
            const children = Array.isArray(node.children[0]) ? node.children[0] : node.children;
            see(children)

        }
    }
}

see(cst);