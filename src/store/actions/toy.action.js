import { toyService } from "../../services/toy.service"

export function loadToys() {
    return (dispatch, getState) => {
        const { filterBy } = getState().toyModule
        dispatch({ type: 'SET_LOADING', isLoading: true })

        toyService.query(filterBy)
            .then(toys => {
                dispatch({ type: 'SET_TOYS', toys })
            })
            .catch(err => {
                console.log('err:', err)
            })
            .finally(() => {
                dispatch({ type: 'SET_LOADING', isLoading: false })
            })
    }
}

export function removeToy(toyId) {
    return (dispatch) => {
        toyService.remove(toyId)
            .then(() => {
                dispatch({ type: 'REMOVE_TOY', toyId })
            })
            .catch(err => {
                console.log('err:', err)
            })
    }
}

export function setFilterBy(filterBy) {
    return (dispatch) => {
        return Promise.resolve(dispatch({ type: 'SET_FILTER_BY', filterBy }))
    }
}