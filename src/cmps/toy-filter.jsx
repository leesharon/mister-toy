import { useEffect, useState } from 'react'
import { useForm } from '../hooks/useForm'
import { useFormRegister } from '../hooks/useFormRegister'
import { useFormRegisterBase } from '../hooks/useFormRegisterBase'

export const ToyFilter = ({ onChangeFilter }) => {

    const [toy, handleChange, setToy] = useForm({
        name: '',
        inStock: true,
        label: '',
        sortBy: ''
    })

    const inStockValue = toy.inStock ? 'true' : 'false'

    return (
        <section className='toy-edit'>
            <form onSubmit={onChangeFilter}>
                <label htmlFor="name">Name</label>
                <input value={toy.name} onChange={handleChange} type="text" name="name" id="name" />

                <label htmlFor="price">Price</label>
                <input value={toy.price} onChange={handleChange} type="number" name="price" id="price" />

                <label htmlFor="inStock">In Stock?</label>
                <select value={inStockValue} onChange={handleChange} name="inStock" id="inStock">
                    <option disabled value="">Choose option</option>
                    <option value="true">Yes</option>
                    <option value="false">No</option>
                </select>

                <button>Search</button>
            </form>
        </section>
    )
}   
