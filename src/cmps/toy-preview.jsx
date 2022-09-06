import { Link } from 'react-router-dom'

export const ToyPreview = ({ toy, onRemoveToy }) => {

    const toyStyle = { backgroundImage: `url(https://robohash.org/${toy._id})` }
    const inStockTxt = toy.inStock ? 'In Stock' : 'Out of Stock'
    const inStockStyle = toy.inStock ? 'green' : 'red'
    return (
        <div style={toyStyle} className='toy-preview'>
            <Link to={`/toy/${toy._id}`} className='info'>
                <h2>{toy.name}</h2>
                <h4>{toy.price}</h4>
                <h4 className={inStockStyle}>{inStockTxt}</h4>
            </Link>
            <section className='actions'>
                <button onClick={() => onRemoveToy(toy._id)}>Delete</button>
                <Link to={`/toy/edit/${toy._id}`} >Edit</Link>
            </section>
        </div>
    )
}
