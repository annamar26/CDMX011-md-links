
const process = require('process');
const fs = require('fs')


  
 

function analizeFile(ruta, archivo){
   const bf = fs.readFileSync(ruta);
  const str = bf.toString()
   const arrayResult = []
   const lineas = str.split('\n');
for (const linea of lineas){
   if(linea.includes('(')&& linea.includes(')')){
const brackets =  linea.substring(linea.indexOf('(')+1, linea.indexOf(')'))


   const re = /(http|https|ftp|ftps)\:\/\/[a-zA-Z0-9\-\.]+\.[a-zA-Z]{2,3}(\/\S*)?/
   if(re.test(brackets)){
   const linkName = linea.substring(linea.indexOf('[')+1, linea.indexOf(']'))
   
   
    arrayResult.push({"href":brackets.slice(re), "text": linkName, "file": archivo, "line": lineas.indexOf(linea)})
   
   
  
  } 
}
 
}           
 console.log(arrayResult)
  

};
module.exports = analizeFile

 
