
function unique(array){

    let data = array

    const result = [];
    data.forEach((item)=>{
    	//pushes only unique element
        if(!result.includes(item)){
    		result.push(item);
    	}
    })
    return result.length; 
}
module.exports= unique