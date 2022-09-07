import React from 'react'

import { ToyPreview } from './toy-preview'

export const ToyList = ({ toys, onRemoveToy }) => {

    return (
        <div className='toy-list simple-cards-grid'>
            {toys.map(
                toy => <ToyPreview
                    key={toy._id}
                    toy={toy}
                    onRemoveToy={onRemoveToy} />)}
        </div>
    )
}
