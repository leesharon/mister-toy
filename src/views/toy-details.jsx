import { useEffect } from 'react'
import { useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { toyService } from '../services/toy.service'

export const ToyDetails = (props) => {

    const [toy, setToy] = useState(null)
    const params = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        loadToy()
    }, [params.id])



    // componentDidUpdate(prevProps, prevState) {
    //     if (prevparams.id !== params.id) {
    //         loadToy()
    //     }
    // }


    const loadToy = () => {
        const toyId = params.id
        toyService.getById(toyId).then(toy => {
            setToy(toy)
        })
    }

    const onBack = () => {
        navigate('/')
    }


    console.log('render');

    if (!toy) return <div>Loading...</div>
    return (
        <div className='toy-details'>
            <section>
                <h3>Model: {toy.model}</h3>
            </section>
            <section>
                <h3>Type: {toy.type}</h3>
            </section>
            <section>
                <h3>Battery Status: {toy.batteryStatus}</h3>
            </section>
            <img src={`https://robohash.org/${toy._id}`} alt="" />
            <button onClick={onBack}>Back</button>
            <Link to='/toy/r1' >Next Toy</Link>
        </div>
    )
}
