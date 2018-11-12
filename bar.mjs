import foo from './foo.js';
console.log(foo.one === 1); // true

import { one } from './baz.mjs';
console.log(one === 1);