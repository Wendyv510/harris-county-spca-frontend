

export default function applicantReducer(
    state = {
        applicants: []
    }, action) {

    switch(action.type){
        case 'FETCH_APPLICANTS':
            return (applicants: applicants.payload)
        default:
            return state;
    }
}