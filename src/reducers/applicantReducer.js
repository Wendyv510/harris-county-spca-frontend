

export default function applicantReducer(
    state = {
        applicants: []
    }, action) {

    switch(action.type){
        case 'FETCH_APPLICANTS':
            return {applicants: action.payload}
        default:
            return state;
    }
}