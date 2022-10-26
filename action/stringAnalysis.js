export const separateString=(data)=>{
    const ddER= /^~[(]~[a-z][)]$/;
    const dER= /^~[(][a-z][)]$/;
    const conjucion=/^[\s]*[(]*[\s]*[a-z][\s]?∧[\s]?[a-z][\s]*[)]*[\s]*$/
    const disyuncion=/^[\s]*[(]*[\s]*[a-z][\s]?∨[\s]?[a-z][\s]*[)]*[\s]*$/
    const disyuncionE=/^[\s]*[(]*[\s]*[a-z][\s]?⨁ [\s]?[a-z][\s]*[)]*[\s]*$/
    const condicionalOimplicacion=/^[\s]*[(]*[\s]*[a-z][\s]?⟹ [\s]?[a-z][\s]*[)]*[\s]*$/
    const bicondicionalOequivalencia=/^[\s]*[(]*[\s]*[a-z][\s]?⟺[\s]?[a-z][\s]*[)]*[\s]*$/

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
        return pConjucion(data)
    else if(disyuncion.test(data))
        return pdisyuncion(data)
    else if(disyuncionE.test(data))
        return pdisyuncionE(data)
    else if(condicionalOimplicacion.test(data))
        return pcondicionalOimplicacion(data)
    else if(bicondicionalOequivalencia.test(data))
        return pbicondicionalOequivalencia(data)
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
    const firstF=/^[\s]*[(]?[\s]*[a-z]/;
    const firstD=firstF.exec(data)[0].replace(/\s+/g, ' ').length==2?firstF.exec(data)[0][1]:firstF.exec(data)[0];
    const lastF=/[∧][\s]*[a-z]/
    const lastD=lastF.exec(data)[0].length==2?lastF.exec(data)[0][1]:lastF.exec(data)[0][2]
    return [[firstD,['v','v','f','f']],[lastD,['v','f','v','f']],[data,['v','f','f','f']]]
}
const pdisyuncion=(data)=>{
    const firstF=/^[\s]*[(]?[\s]*[a-z]/;
    const firstD=firstF.exec(data)[0].replace(/\s+/g, ' ').length==2?firstF.exec(data)[0][1]:firstF.exec(data)[0];
    const lastF=/[∨][\s]*[a-z]/
    const lastD=lastF.exec(data)[0].length==2?lastF.exec(data)[0][1]:lastF.exec(data)[0][2]
    return [[firstD,['v','v','f','f']],[lastD,['v','f','v','f']],[data,['v','v','v','f']]]
}
const pdisyuncionE=(data)=>{
    const firstF=/^[\s]*[(]?[\s]*[a-z]/;
    const firstD=firstF.exec(data)[0].replace(/\s+/g, ' ').length==2?firstF.exec(data)[0][1]:firstF.exec(data)[0];
    const lastF=/[⨁][\s]*[a-z]/
    const lastD=lastF.exec(data)[0].length==2?lastF.exec(data)[0][1]:lastF.exec(data)[0][2]
    return [[firstD,['v','v','f','f']],[lastD,['v','f','v','f']],[data,['f','v','v','f']]]
}
const pcondicionalOimplicacion=(data)=>{
    const firstF=/^[\s]*[(]?[\s]*[a-z]/;
    const firstD=firstF.exec(data)[0].replace(/\s+/g, ' ').length==2?firstF.exec(data)[0][1]:firstF.exec(data)[0];
    const lastF=/[⟹][\s]*[a-z]/
    const lastD=lastF.exec(data)[0].length==2?lastF.exec(data)[0][1]:lastF.exec(data)[0][2]
    return [[firstD,['v','v','f','f']],[lastD,['v','f','v','f']],[data,['v','f','v','v']]] 
}
const pbicondicionalOequivalencia=(data)=>{
    const firstF=/^[\s]*[(]?[\s]*[a-z]/;
    const firstD=firstF.exec(data)[0].replace(/\s+/g, ' ').length==2?firstF.exec(data)[0][1]:firstF.exec(data)[0];
    const lastF=/[⟺][\s]*[a-z]/
    const lastD=lastF.exec(data)[0].length==2?lastF.exec(data)[0][1]:lastF.exec(data)[0][2]
    return [[firstD,['v','v','f','f']],[lastD,['v','f','f','v']],[data,['v','f','v','v']]] 
}