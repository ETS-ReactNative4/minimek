import React from 'react'

export default function ToggleDisplay(props) {
    const displayStyle = {
        display: props.show ? undefined: 'none',
    }
    return (<span style={displayStyle}>{props.children}</span>)
}
