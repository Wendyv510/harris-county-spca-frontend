

export default function applicantReducer(
    state = {
        applicants: []
    }, action) {

    switch(action.type){
        case 'FETCH_APPLICANTS':
            return {applicants: action.payload}
        case 'ADD_APPLICANT': 
            return {applicants: state.applicants.concat(action.payload.text)}
        default:
            return state;
    }
}