

export const FiltreName =(state='',action) =>{
    switch (action.type) {
        case 'SERACH_IN_STATE':
            return action.payload
        default:
            return state;
    }
}