import React from "react"
import ReactDOM from "react-dom"
import { useFormik } from "formik"
import * as Yup from "yup"

export const Signup = () => {
    const formik = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            email: "",
            password: ""
        },
        validationSchema: Yup.object({
            firstName: Yup.string()
                .max(5, "Must be 5 characters or less")
                .required("Required"),
            lastName: Yup.string().max(20, "Must be 20 characters or less"),
            email: Yup.string()
                .email("Invalid email address")
                .required("Required"),
            password: Yup.string()
                .required('No password provided.')
                .min(8, 'Password is too short - should be 8 chars minimum.')
                .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.')
        }),
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2))
        }
    })

    const handleFocus = ev => {
        ev.target.classList.add("focus")
    }

    const onBlur = (ev, inputName) => {
        if (formik.values[inputName]) return
        ev.target.classList.remove("focus")
    }

    return (
        <form className="signup-form" onSubmit={formik.handleSubmit}>
            <h5>Sign up for your account</h5>
            <input
                id="firstName"
                name="firstName"
                type="text"
                onChange={formik.handleChange}
                onFocus={handleFocus}
                onBlur={formik.handleBlur}
                onBlurCapture={(ev) => { onBlur(ev, 'firstName') }}
                value={formik.values.firstName}
            />
            <label className="dynamic-placeholder" htmlFor="firstName">First name</label>
            {formik.touched.firstName && formik.errors.firstName ? (
                <span className="error">{formik.errors.firstName}</span>
            ) : <span>&nbsp;</span>}

            <input
                id="lastName"
                name="lastName"
                type="text"
                onChange={formik.handleChange}
                onFocus={handleFocus}
                onBlur={formik.handleBlur}
                onBlurCapture={(ev) => { onBlur(ev, 'lastName') }}
                value={formik.values.lastName}
            />
            <label className="dynamic-placeholder" htmlFor="lastName">Last name</label>
            {formik.touched.lastName && formik.errors.lastName ? (
                <span className="error">{formik.errors.lastName}</span>
            ) : <span>&nbsp;</span>}



            <input
                id="email"
                name="email"
                type="email"
                onChange={formik.handleChange}
                onFocus={handleFocus}
                onBlur={formik.handleBlur}
                onBlurCapture={(ev) => { onBlur(ev, 'email') }}
                value={formik.values.email}
            />
            <label className="dynamic-placeholder" htmlFor="email">Email address</label>
            {formik.touched.email && formik.errors.email ? (
                <span className="error">{formik.errors.email}</span>
            ) : <span>&nbsp;</span>}


            <input
                id="password"
                name="password"
                type="password"
                onChange={formik.handleChange}
                onFocus={handleFocus}
                onBlur={formik.handleBlur}
                onBlurCapture={(ev) => { onBlur(ev, 'password') }}
                value={formik.values.password}
            />
            <label className="dynamic-placeholder" htmlFor="password">Password</label>
            {formik.touched.password && formik.errors.password ? (
                <span className="error">{formik.errors.password}</span>
            ) : <span>&nbsp;</span>}

            <button type="submit">Sign up</button>
        </form>
    )
}

