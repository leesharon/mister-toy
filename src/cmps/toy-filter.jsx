import { useFormRegister } from '../hooks/useFormRegister'
import React from 'react'
import { Field, Form, Formik } from 'formik'
import { Button, NativeSelect, Select, TextField } from '@mui/material'
import * as Yup from 'yup'
import { Basic } from './my-form'

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
        // <Basic />

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
    )
}
