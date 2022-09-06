
const INITIAL_STATE = {
    robots: null,
    filterBy: null,
    isLoading: false
}


// action = {type: SET_ROBOTS, robots: [...]}
export function robotReducer(state = INITIAL_STATE, action) {

    switch (action.type) {
        case 'SET_ROBOTS':
            return {
                ...state,
                robots: action.robots
            }

        case 'ADD_ROBOT':
            return {
                ...state,
                robots: [...state.robots, action.robot]
            }

        case 'REMOVE_ROBOT':
            return {
                ...state,
                robots: state.robots.filter(robot => robot._id !== action.robotId)
            }

        case 'UPDATE_ROBOT':
            return {
                ...state,
                robots: state.robots.map(robot => robot._id === action.robot._id ? action.robot : robot)
            }

        case 'SET_FILTER_BY':
            return {
                ...state,
                filterBy: { ...action.filterBy }
            }
        case 'SET_LOADING':
            return {
                ...state,
                isLoading: action.isLoading
            }





        default:
            return state;
    }
}