const a=13;
if(a<=10)
console.log('Small');
else
console.log('Big');
// Accessing Modules or files with JS
const nams= require('./names');
const func= require('./dsipn');
console.log(func(nams.a));
console.log(func(nams.b));