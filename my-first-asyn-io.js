const fs=require('fs')
 
fs.readFile(process.argv[2],'utf8',(err,x)=>{
    if(err){
        console.log('error')
    }
    else{
        space = x.toString().split('\n').length-1
        console.log(space)
    }

}) 