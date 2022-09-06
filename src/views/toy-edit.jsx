import { useEffect, useState } from 'react'
import { useRef } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useForm } from '../hooks/useForm'
import { toyService } from '../services/toy.service'

export const ToyEdit = (props) => {

    const params = useParams()
    const navigate = useNavigate()

    // const [toy, setToy] = useState({
    //     model: '',
    //     type: ''
    // })xw
    const [toy, handleChange, setToy] = useForm({
        model: '',
        type: ''
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


    // const handleChange = ({ target }) => {
    //     const field = target.name
    //     const value = target.type === 'number' ? (+target.value || '') : target.value
    //     setToy(prevToy => ({ ...prevToy, [field]: value }))
    // }


    const onSaveToy = (ev) => {
        ev.preventDefault()
        toyService.save({ ...toy }).then(() => {
            navigate('/')
        })
    }


    return (
        <section className='toy-edit'>
            <h1>{toy._id ? 'Edit' : 'Add'} Toy</h1>
            <form onSubmit={onSaveToy}>
                <label htmlFor="model">Model</label>
                <input ref={inputRef} value={toy.model} onChange={handleChange} type="text" name="model" id="model" />

                <label htmlFor="type">Type</label>
                <select value={toy.type} onChange={handleChange} name="type" id="type">
                    <option disabled value="">Choose a type</option>
                    <option value="Cooking">Cooking</option>
                    <option value="Cleaning">Cleaning</option>
                    <option value="Pleasure">Pleasure</option>
                    <option value="Office">Office</option>
                </select>

                <button>Save</button>
            </form>
        </section>
    )
}
