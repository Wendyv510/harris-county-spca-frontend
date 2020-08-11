

export default function dogReducer(
    state = {
        dogs: []
    }, action) {

    switch(action.type){
        case 'FETCH_DOGS':
            return dogs; dogs.payload
        default:
            return state;
    }
}