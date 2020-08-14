

export default function dogReducer(
    state = {
        dogs: []
    }, action) {

    switch(action.type){
        case 'FETCH_DOGS':
            return {dogs: action.payload.data}
        default:
            return state;
    }
}