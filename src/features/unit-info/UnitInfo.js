import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { Segment, Dropdown, Form } from 'semantic-ui-react'


import { selectUnitInfo } from 'features/unit-info/unitInfoSelector'

export function UnitInfo(props) {
  return (<Segment attached="bottom">
    <Form size="large">
      <Form.Field name="name" width={6}>
        <label>Unit Name</label>
        <input 
          placeholder="Name"
          value={props.unitInfo.name}
        />
      </Form.Field>
      <Form.Field name="affiliations" width={6}>
        <label>Affiliations</label>
        <Dropdown 
          selection 
          options={props.factions}
          value={props.unitInfo.affiliation}
        />
      </Form.Field>
    </Form>
  </Segment>)
}

UnitInfo.propTypes = {
  factions: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string,
    text: PropTypes.string
  }))
}

UnitInfo.defaultProps = {
    factions: [
        {value : "cc", text : "Capellan Confederation"},
        {value : "dc", text : "Draconis Combine"},
        {value : "fs", text : "Federated Suns"},
        {value : "fwl", text : "Free Worlds League"},
        {value : "lc", text : "Lyran Commonwealth"},
        {value : "wd", text : "Wolf's Dragoons"}
    ]
}

function mapStateToProps(state) {
  return {
    unitInfo: selectUnitInfo(state)
  }
}

export default connect(mapStateToProps)(UnitInfo)