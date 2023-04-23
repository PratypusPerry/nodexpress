//Os module
const os= require('os');
//Logs the user information
const user= os.userInfo()
console.log(user);
//Logs the system uptime
console.log(`The system uptime is ${os.uptime} seconds`);
//Object for different functions to be done on OS
const obj={
    name:os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freeMem:os.freemem()
}
console.log(obj);
//Path Module
//Different path for accessing a file
const path=require('path');
console.log(path.sep);
console.log(path.join('/content','subfolder','first.txt'));
console.log(path.resolve(__dirname,'content','subfolder','first.txt'));