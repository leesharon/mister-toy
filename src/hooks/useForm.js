import { useEffect, useState } from "react"

export const useForm = (initialState, callBack) => {

    const [fields, setFields] = useState(initialState)

    useEffect(() => {
        if (callBack) callBack(fields)
    }, [fields])

    const handleChange = ({ target }) => {
        const field = target.name
        let value = target.type === 'number' ? (+target.value || '') : target.value
        if (target.type === 'select-one') value = (target.value === 'true')

        setFields(prevFields => ({ ...prevFields, [field]: value }))
    }

    return [fields, handleChange, setFields]
}