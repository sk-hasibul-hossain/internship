// import myDefaultImport, { five, myName } from "./export.mjs";

// console.log(five, myName, myDefaultImport);

import * as secondModule from "./export.mjs";

console.log(secondModule.five, secondModule.myName, secondModule.default);
