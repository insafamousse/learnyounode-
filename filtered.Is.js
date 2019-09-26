const fs=require('fs')
const path=require('path')
let folder=process.argv[2]
extension="."+process.argv[3]

fs.readdir(folder,(err,list)=>{
    if(err){
        console.log(error)
    }

        list.forEach((item)=>{
            if(path.extname(item)===extension){
                console.log(item)
            }
        })
     
}) 