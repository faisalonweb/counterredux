const counterReducer = (state = 0, action) => {

    // console.log(action.type);
    // console.log(state);
    switch (action.type) {
        case "INCREMENT" :
           console.log(state)  
           return state+1;
        case "DECREMENT":
           console.log(state) 
           return state-1;    
        default:
            return state;   
    }

}
export default counterReducer;