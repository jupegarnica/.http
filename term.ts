// import question from 'https://raw.githubusercontent.com/ocpu/question-deno/master/mod.ts'

import question from "https://raw.githubusercontent.com/ocpu/question-deno/master/mod.ts";

const res = await question("list", "Select groceries?", [
  "Cheese",
  "Milk",
  "Tofu",
]);

console.log(res);

const result = await question("confirm", "Confirm removal of X?", true);
if (result === undefined) console.log("Prompt was canceled");
else if (result) console.log("I will now remove X");
else console.log("X will not be removed");
