const axios = require('axios');



let array = []

function validate(result){
return new Promise ((resolve, reject)=>{
result.forEach(element => {
array.push(axiosValidate(element))


})
resolve (Promise.all(array))

})
}
  
async function axiosValidate(objeto){
  return await axios.get(objeto.href)
  .then(response => {
   return {...objeto, 
  'code': response.status,
  'status': 'ok'
  }
  
    
  })
  .catch(error => {
    return {...objeto, 
     'code': error.response.status,
      'status': 'fail'
  }});
}

module.exports= validate

