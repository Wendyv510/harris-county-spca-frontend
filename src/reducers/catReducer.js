

export default function catReducer(
    state = {
        cats: []
    }, action) {

    switch(action.type){
        case 'FETCH_CATS':
            return (cats: cats.payload)
        default:
            return state;
    }
}