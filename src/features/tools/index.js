import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Segment, Button } from 'semantic-ui-react'
import { loadUnitData } from "features/tools/actions";


export function Tools(props) {
  return (<Segment attached="bottom">
    <Button onClick={props.loadUnitData}>Reload Unit Data</Button>
  </Segment>)
}

Tools.propTypes = {
  loadUnitData: PropTypes.func
}

export default connect(null, { loadUnitData })(Tools)