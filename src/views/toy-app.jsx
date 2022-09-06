import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { ToyFilter } from '../cmps/toy-filter'
import { ToyList } from '../cmps/toy-list'
import { loadToys, removeToy, setFilterBy } from '../store/actions/toy.action'
import { spendBalance } from '../store/actions/user.action'

export const ToyApp = (props) => {

    const { toys, isLoading } = useSelector(state => state.toyModule)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(loadToys())
    }, [])

    // componentDidMount() {
    //     props.loadToys()
    // }


    const onRemoveToy = (toyId) => {
        dispatch(removeToy(toyId))
    }

    const onChangeFilter = (filterBy) => {
        dispatch(setFilterBy(filterBy))
        dispatch(loadToys())
    }


    // const { toys } = props
    if (!toys) return <div>Loading...</div>
    return (
        <div className='toy-app'>
            <ToyFilter onChangeFilter={onChangeFilter} />
            <Link to="/toy/edit">Add Toy</Link>
            <ToyList history={props.history} onRemoveToy={onRemoveToy} toys={toys} />
        </div>
    )
}


// const mapStateToProps = state => {

//     return {
//         toys: state.toyModule.toys
//     }
// }

// const mapDispatchToProps = {
//     loadToys,
//     removeToy,
//     setFilterBy,
//     spendBalance
// }

// export const ToyApp = connect(mapStateToProps, mapDispatchToProps)(_ToyApp)
