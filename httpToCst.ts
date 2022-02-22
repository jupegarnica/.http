
import { parse } from 'https://cdn.skypack.dev/http-request-in-editor@v0.4.0?dts';


type Item = {
    type: string;
    location: number;
    children: Item[];
}

type CST = Item[];

export const httpToCst = (text: string): CST => parse(text)
