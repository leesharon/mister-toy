import React from 'react'

import { useEffect } from 'react'
import { useRef } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useForm } from '../hooks/useForm'
import { toyService } from '../services/toy.service'

export const ToyEdit = () => {

    const params = useParams()
    const navigate = useNavigate()

    const [toy, handleChange, setToy] = useForm({
        name: '',
        price: '',
    })

    const inputRef = useRef()

    useEffect(() => {
        inputRef.current.focus()
        const toyId = params.id
        if (!toyId) return
        toyService.getById(toyId)
            .then(toy => {
                setToy(toy)
            })
            .catch(err => {
                console.log('err:', err);
            })
    }, [])

    const onSaveToy = (ev) => {
        ev.preventDefault()
        toyService.save({ ...toy })
            .then(() => {
                navigate('/')
            })
    }

    const inStockValue = toy.inStock ? 'true' : 'false'
    return (
        <section className='toy-edit'>
            <h1>{toy._id ? 'Edit' : 'Add'} Toy</h1>
            <form onSubmit={onSaveToy}>
                <label htmlFor="name">Name</label>
                <input ref={inputRef} value={toy.name} onChange={handleChange} type="text" name="name" id="name" />

                <label htmlFor="price">Price</label>
                <input value={toy.price} onChange={handleChange} type="number" name="price" id="price" />

                <label htmlFor="inStock">In Stock?</label>
                <select value={inStockValue} onChange={handleChange} name="inStock" id="inStock">
                    <option disabled value="">Choose option</option>
                    <option value="true">Yes</option>
                    <option value="false">No</option>
                </select>

                <button>Save</button>
            </form>
        </section>
    )
}
