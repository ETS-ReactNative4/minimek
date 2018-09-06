import React from 'react'
import PropTypes from 'prop-types'
import { Segment, Form, Dropdown } from 'semantic-ui-react'

export default function PilotDetails(props) {
  return (<Segment >
    <Form size="large">
      <Form.Field name="name" width={16} >
        <label>Name</label>
        <input placeholder="Name" value={props.pilot.name} />
      </Form.Field>
      <Form.Field name="rank" width={16}>
        <label>Rank</label>
        <Dropdown fluid selection options={props.ranks} value={props.pilot.rank} />
      </Form.Field>
      <Form.Field name="age" width={6} >
          <label>Age</label>
          <input placeholder="Age" value={props.pilot.age} />
      </Form.Field>
      <Form.Field name="gunnery" width={6} >
        <label>Gunnery</label>
        <input value={props.pilot.gunnery} />
      </Form.Field>
      <Form.Field name="piloting" width={6} >
        <label>Piloting</label>
        <input value={props.pilot.piloting} />
      </Form.Field>
      <Form.Field name="mech" width={16}>
        <label>Mech</label>
        <Dropdown fluid selection options={props.mechs} value={props.pilot.mech} />
      </Form.Field>
    </Form>
  </Segment>)
}

PilotDetails.propTypes = {
  mechs: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string,
      text: PropTypes.string
    })
  ),
  ranks: PropTypes.arrayOf(PropTypes.shape({
      value: PropTypes.string,
      text: PropTypes.string
    })),
    pilot: PropTypes.shape({
      name: PropTypes.string,
      rank: PropTypes.string,
      age: PropTypes.number,
      gunnery: PropTypes.number,
      piloting: PropTypes.number,
      mech: PropTypes.string
    })
}

PilotDetails.defaultProps = {
  ranks: [],
  mechs: [],
  pilot: {}
}
