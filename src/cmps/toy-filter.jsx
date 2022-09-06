import { useEffect, useState } from 'react'
import { useFormRegister } from '../hooks/useFormRegister'
import { useFormRegisterBase } from '../hooks/useFormRegisterBase'

export const ToyFilter = ({ onChangeFilter }) => {

    const [filterBy, setFilterBy] = useState({
        name: '',
        minPrice: '',
        maxPrice: '',
    })

    const handleChange = ({ target }) => {
        // const val = target.value
        // this.setState({ search: val }, () => {
        //     this.props.onSetFilterBy(this.state.search)
        // })

        // const field = target.name
        // const value = target.type === 'number' ? +target.value : target.value
        // this.setState((prevState) => ({
        //     filterBy: {
        //         ...prevState.filterBy,
        //         [field]: value
        //     }
        // }), () => {
        //     this.props.onSetFilter(this.state.filterBy)
        // })
    }

    return (
        <form onSubmit={onChangeFilter} className="toy-filter">
            <label htmlFor="search">Search: </label>
            <input
                // ref={this.inputRef}
                type="search"
                placeholder="Enter bug name here"
                id="search"
                name="search"
                value={filterBy.name}
                className="input-search"
                onChange={handleChange}
            />
            {/* <label htmlFor="severity">Severity</label>
                <select name="severity" id="severity">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                </select> */}
            <button className="btn btn-search">Go!</button>
        </form>
    )
}
