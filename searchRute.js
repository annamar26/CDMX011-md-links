
const process = require('process');
const { readdir } = require('fs')
const path = require('path');
const analizeFile = require('./analizeFile.js');


let parameter = process.argv[2];  

function search(givenpath){
if(path.isAbsolute(givenpath)) {
 
readdir(givenpath, (err, data) => {
  if (err) throw err;

    data.forEach(element=>{
    if(element.includes('.')){
        const ext = path.extname(path.join(givenpath, element))

        if(ext === '.md'){
    
        const fileRoute = path.join(givenpath, element);
  
        analizeFile(path.join(givenpath, element), fileRoute)
 

    
}

        

    }else{
     
   search(path.join(givenpath, element))

}})});



}else{
   const absPath = path.resolve(path.dirname(givenpath))
  search(absPath)
 
 

}
}
search(parameter)
