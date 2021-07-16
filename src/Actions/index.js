
export const Addmovie =(newMovie) =>{
    return{
        type:'ADD_MOVIE',
        payload: newMovie,
    }
}

export const HandleSearch =(searchFiltre) =>{
    return{
        type:'SERACH_IN_STATE',
        payload: searchFiltre,
    }
}

export const HandleRate =(rate) =>{
    return{
        type:'RATE_IN_STATE',
        payload: rate,
    }
}