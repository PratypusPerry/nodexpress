const {readFile,writeFile}=require('fs');

readFile('./content/first.txt','utf-8',(err,result)=>{
    if (err)
    return;
    const first=result;
    readFile('./content/second.txt','utf-8',(err,result)=>{
        if (err)
        return;
        const second=result;
        writeFile('./content/fourth.txt',`Hello this is the third file result:${second}`,(err,result)=>{
            if (err)
            return;
            console.log(result);;});
    });
});
