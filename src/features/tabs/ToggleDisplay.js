import React from 'react'
import PropTypes from 'prop-types'

export default function ToggleDisplay(props) {
    const displayStyle = {
        display: props.show ? undefined: 'none',
    }
    return (<span style={displayStyle}>{props.children}</span>)
}

ToggleDisplay.propTypes = {
    show: PropTypes.bool,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired
}
