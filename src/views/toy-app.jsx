import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { ToyFilter } from '../cmps/toy-filter'
import { ToyList } from '../cmps/toy-list'
import { loadToys, removeToy, setFilterBy } from '../store/actions/toy.action'
import React from 'react'

export const ToyApp = () => {

    const { toys, isLoading } = useSelector(state => state.toyModule)
    const dispatch = useDispatch()

    const onRemoveToy = (toyId) => {
        dispatch(removeToy(toyId))
    }

    const onChangeFilter = (filterBy) => {
        dispatch(setFilterBy(filterBy))
            .then(() => {
                dispatch(loadToys())
            })
    }

    const Loader = () => {
        return (
            <div>Loading...</div>
        )
    }

    // if (!toys || isLoading) return 
    return (
        <div className='toy-app'>
            <ToyFilter onChangeFilter={onChangeFilter} />
            <Link to="/toy/edit">Add Toy</Link>
            {toys && !isLoading && <ToyList onRemoveToy={onRemoveToy} toys={toys} />}
            {isLoading && <Loader />}
        </div>
    )
}