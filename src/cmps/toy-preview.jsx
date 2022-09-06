import { Link } from 'react-router-dom'

export function ToyPreview({ toy, onRemoveToy }) {

    const toyStyle = { backgroundImage: `url(https://robohash.org/${toy._id})` }
    return (
        <div style={toyStyle} className='toy-preview'>
            <Link to={`/toy/${toy._id}`} className='info'>
                <h2>{toy.model}</h2>
                <h4>{toy.type}</h4>
            </Link>
            <section className='actions'>
                <button onClick={() => onRemoveToy(toy._id)}>Delete</button>
                <Link to={`/toy/edit/${toy._id}`} >Edit</Link>
            </section>
        </div>
    )
}
