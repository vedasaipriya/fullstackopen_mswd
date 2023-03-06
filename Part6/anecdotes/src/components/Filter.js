import React from 'react'
import { useDispatch } from 'react-redux'
import { OfilterChange } from '../reducers/OfilterReducer'

const OFilter = () => {
    const dispatch = useDispatch()

    const handleOChange = (event) => {
        dispatch(OfilterChange(event.target.value))
    }
    const style = {
        marginBottom: 10
    }

    return (
        <div style={style}>
        Ofilter <input onChange={handleOChange} />
        </div>
    )
}

export default OFilter