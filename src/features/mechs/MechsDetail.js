import React from 'react'
import PropTypes from 'prop-types'
import { Segment, Form } from 'semantic-ui-react'

import { getWeightClass } from 'features/mechs/mechsSelector'

export default function MechsDetail(props) {
  return (<Segment >
    <Form size="large">
      <Form.Field name="id" width={6} >
        <label>ID</label>
        <input placeholder="ID" value={props.mech.id} />
      </Form.Field>
      <Form.Field name="name" width={16} >
        <label>Name</label>
        <input placeholder="Name" value={props.mech.name} />
      </Form.Field>
      <Form.Field name="model" width={6} >
        <label>Model</label>
        <input placeholder="Model" value={props.mech.model} />
      </Form.Field>
      <Form.Field name="weight" width={6} >
        <label>Weight</label>
        <input value={props.mech.weight} />
      </Form.Field>
      <Form.Field name="class" width={6} >
        <label>Class</label>
        <input value={getWeightClass(props.mech.weight)} />
      </Form.Field>
    </Form>
  </Segment>)
}

MechsDetail.propTypes = {
  mech: {
    id: PropTypes.string,
    name: PropTypes.string,
    model: PropTypes.string,
    weight: PropTypes.number
  }
}

MechsDetail.defaultProps = {
  mech: {}
}
