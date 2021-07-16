export const FiltreRate =(state=0,action) =>{
    switch (action.type) {
        case 'RATE_IN_STATE' :
                return action.payload
        default:
            return state;
    }
}