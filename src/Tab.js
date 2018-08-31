import React from 'react'
import PropTypes from 'prop-types'

import { Menu } from 'semantic-ui-react'

export default function Tab(props) {
  return (<Menu.Item    
    name={props.name}
    content={props.label}
    active={props.active}
    onClick={() => props.onClick(props.name)}
  />)

//   return (<div style={{border: '1px solid red', marginLeft: '20px'}}>
//     <span>Key: {props.key}</span>
//     <pre>{JSON.stringify(props, null, 2)}</pre>
//   </div>)
}

Tab.propTypes = {
    key: PropTypes.string,
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    active: PropTypes.bool,
    onClick: PropTypes.func
}
