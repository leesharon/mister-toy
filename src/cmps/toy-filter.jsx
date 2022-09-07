import { useFormRegister } from '../hooks/useFormRegister'
import React from 'react'
import { Formik } from 'formik'
import { NativeSelect, Select } from '@mui/material'

export const ToyFilter = (props) => {

    const [register, handleChange] = useFormRegister(
        {
            txt: '',
            minPrice: 0,
            inStock: ''
        },
        props.onChangeFilter
    )

    return (
        <React.Fragment>
            <form className="toy-filter">
                <section>
                    <label htmlFor="txt">Name</label>
                    <input {...register('txt', 'text')} />
                </section>
                <section>
                    <label htmlFor="minPrice">Min Price</label>
                    <input {...register('minPrice', 'number')} />
                </section>
                <NativeSelect
                    {...register('inStock')}
                >
                    <option value="">All</option>
                    <option value="in-stock">In Stock</option>
                    <option value="out-of-stock">Out of Stock</option>
                </NativeSelect>
            </form>
        </React.Fragment >
    )
}
