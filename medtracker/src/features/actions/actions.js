import * as type from '../types'



export const userLogin = (user) => {
    return {
        type:type.USER_LOGIN,
        payload:user
    }
}

///allergees
export const allergies = () => {
    return {
        type: type.GET_ALLERGIES,
    }
}

export const deleteAllergy = (id) => {
    return {
        type: type.DELETE_ALLERGIES,
        payload:id
    }
}



///////diagnosis
export const updateId = (id) => {
    return {
        type: type.UPDATE_ID,
        payload:id
    }
}

//// diagnosos
export const diagnosis = () => {
    return {
        type: type.GET_DIAGNOSIS,
    }
}

export const deleteDiagnosies = (id) => {
    return {
        type: type.DELETE_DIAGNOSIS,
        payload:id
    }
}

///medicine
export const medicine = () => {
    return {
        type: type.GET_ALLERGIES,
    }
}

export const deleteMedicine = (id) => {
    return {
        type: type.GET_ALLERGIES,
        payload:id
    }
}

///vaccine
export const vaccine = () => {
    return {
        type: type.GET_ALLERGIES,
    }
}

export const deleteVaccine = (id) => {
    return {
        type: type.GET_ALLERGIES,
        payload:id
    }
}


