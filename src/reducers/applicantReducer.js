

export default function applicantReducer(
    state = {
        applicants: []
    }, action) {

    switch(action.type){
        case 'FETCH_APPLICANTS':
            return {applicants: action.payload}
        case 'ADD_APPLICANT': 
            return {...state, applicants:[...state.applicants, action.payload]}
        default:
            return state;
    }
}