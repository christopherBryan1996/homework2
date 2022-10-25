export const separateString=(data)=>{
    const ddER= /^~[(]~[a-z][)]$/;
    const dER= /^~[(][a-z][)]$/;
    const conjucion=/^[\s]*[a-z][\s]?∧[\s]?[a-z][\s]*$/
    if(data.length==1)
        return [[data,['v','f']]]
    else if(data.length==2){
        if(data[0]=='~'){
            return [[data,['f','v']]]
        }else{
            return['error']
        }
    }else if(ddER.test(data))
        return doubleDenial(data)
    else if( dER.test(data))
        return oneDenial(data)
    else if(conjucion.test(data))
        pConjucion(data)
}

const doubleDenial=(data)=>{
    const nER=/~[a-z]/
    const characterN=nER.exec(data)[0]
    return [[characterN,['f','v']],[data,['v','f']]]
}

const oneDenial=(data)=>{
    const nER=/[a-z]/
    const characterN=nER.exec(data)[0]
    return [[characterN,['v','f']],[data,['f','v']]]
}
const pConjucion=(data)=>{
    const firstF=/^[\s]*[a-z][[\s]*/
    const firstD=firstF.exec(data)[0]
    console.log(firstD);
}