import React from 'react'


export const ToyReview = ({ review }) => {

    const star = '⭐️'

    return (
        <section className="toy-review">
            <h3>{review.name} / {review.createdAt}</h3>
            <h3>Rate: {star.repeat(review.rate)}</h3>
            <p>"{review.txt}"</p>
        </section>
    )
}