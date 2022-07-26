//check if all values of object are not empty, with exception of keys in thhe exceptionKeys array; 
//return an array of keys tht has an empty value
//fill keysToCheck to check only the keys in that array and ignore exceptionKeys
export function validateObjectFilled(_object, exceptionKeys = [], keysToCheck=[]){

    let emptyKeys = []

    if(keysToCheck.length>=1){
        keysToCheck.forEach(_key=>{
            if (_object[_key] === false){
                return
            }
    
            if (!_object[_key]){
                emptyKeys.push(_key)
            }
        })

        return emptyKeys

    }
    
    let keys = Object.keys(_object)
    console.log('keys are'+keys)

    keys = keys.filter( ( el ) => !exceptionKeys.includes( el ) ); //keep only the keys that are not in the exceptionKeys array
    
    keys.forEach(_key => {
        if (_object[_key] === false){
            return
        }

        if (!_object[_key]){
            emptyKeys.push(_key)
        }
        
    });

    return emptyKeys

}

export function validateEmail(email){

    if(! email.includes('@')){
        return false
    }

    if(! email.includes('.')){
        return false
    }

    return true

}