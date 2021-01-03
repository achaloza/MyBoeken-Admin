import { useState, useEffect } from 'react'

const useForm = (initialValues, callback, validate) => {
    const [values, setValues] = useState(initialValues)
    const [errorsMsg, setErrorsMsg] = useState({})
    const [errors, setErrors] = useState({})
    const [isSubmitting, setIsSubmitting] = useState(false)

    useEffect(
        () => {
            if (Object.keys(errorsMsg).length === 0 && isSubmitting) {
                callback()
            }
        },
        [errorsMsg],
    )

    const handleSubmit = event => {
        debugger
        if (event) event.preventDefault()
        // Only validate if the validate function is used
        if (validate) {
            setErrorsMsg(validate(values))
        }
        setIsSubmitting(true)
    }

    const handleChange = event => {
        event.persist()
        setValues(values => ({
            ...values,
            [event.target.name]: event.target.value,
        }))
    }

    return {
        handleChange,
        handleSubmit,
        values,
        errorsMsg,
    }
}

export default useForm