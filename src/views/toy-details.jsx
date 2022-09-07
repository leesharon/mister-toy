import { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { ToyReview } from '../cmps/toy-review'
import { toyService } from '../services/toy.service'
import React from 'react'

export const ToyDetails = (props) => {

    const [toy, setToy] = useState(null)
    const params = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        loadToy()
    }, [params.id])

    const loadToy = () => {
        const toyId = params.id
        toyService.getById(toyId)
            .then(toy => {
                setToy(toy)
            })
    }

    const onBack = () => {
        navigate('/')
    }

    if (!toy) return <div>Loading...</div>
    const inStockTxt = toy.inStock ? 'In Stock' : 'Out of Stock'
    const inStockStyle = toy.inStock ? 'green' : 'red'
    return (
        <div className='toy-details'>
            <section>
                <h3>Name: {toy.name}</h3>
            </section>
            <section>
                <h3>Price: {toy.price}</h3>
            </section>
            <section>
                <h3 className={inStockStyle}>{inStockTxt}</h3>
            </section>
            <img src={`https://robohash.org/${toy._id}`} alt="" />
            <section className='reviews'>
                <h2>What others think of this toy?</h2>
                {toy.reviews.map(review => <ToyReview review={review} key={toy._id} />)}
            </section>
            <button onClick={onBack}>Back</button>
            {/* <Link to='/toy/r1' >Next Toy</Link> */}
        </div>
    )
}
