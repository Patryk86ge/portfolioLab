import React from 'react'

const FormInfo = ({ style, title, subtitle }) => {
    return (
        <>
            <p style={style}>{title}</p>
            <p style={style}>{subtitle}</p>
        </>
    )
}

export default FormInfo;