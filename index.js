
const process = require('process');
const fs = require('fs')


  let parameter = process.argv[2];

  
  const bf = fs.readFileSync(parameter);
  const str = bf.toString()

  const ext = parameter.slice(parameter.indexOf('.')+1)

  if(ext === 'md'){
   const lineas = str.split('\n');
for (const linea of lineas){
 const urls =  linea.slice(linea.indexOf('(')+1,linea.indexOf(')'))

if(urls.includes('http')){
  console.log(urls.slice(urls.indexOf('h')))
}
}
  

  }
  else{
    console.error('El archivo no es md, proporcione un archivo md o su ruta')
  }

 
  

