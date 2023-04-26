const pl= require('lodash');
const b=[1,[2,[3,[4,[5]]]]];
var fa=pl.flattenDeep(b);
console.log(b);
console.log(fa);