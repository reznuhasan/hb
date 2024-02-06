

export const checkValue=(data)=>{
    if(data.name==="" ||data.email==="" || data.department==="" || data.position==="" || data.mobile==="" || data.serial==="" || data.startTime==="" || data.finishTime==="" || data.description==="" || data.certification===""){
        return false
    }else{
        return true
    }
}
export const checkProfile=(data)=>{
    if(data===undefined){
        return false
    }else{
        return true
    }
}