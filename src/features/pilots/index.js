import React from 'react'
import PropTypes from 'prop-types'

import { Grid, Table, Segment, Header, Form, Dropdown } from 'semantic-ui-react'
import PilotsList from 'features/pilots/PilotsList/index.js'
import PilotDetails from 'features/pilots/PilotDetails'


export default class Pilots extends React.Component {
   renderPilotDetails = () => {
    return (<Segment >
        <Form size="large">
            <Form.Field name="name" width={16} >
                <label>Name</label>
                <input
                    placeholder="Name"
                    value="Natasha Kerensky"
                />
            </Form.Field>
            <Form.Field name="rank" width={16}>
                <label>Rank</label>
                <Dropdown
                fluid
                selection
                options={this.props.ranks}
                value="Colonel"
            />
        </Form.Field>
        <Form.Field name="age" width={6} >
            <label>Age</label>
            <input
                placeholder="Age"
                value="34"
            />
        </Form.Field>
        <Form.Field name="gunnery" width={6} >
            <label>Gunnery</label>
            <input
                value="2"
            />
        </Form.Field>
        <Form.Field name="piloting" width={6} >
            <label>Piloting</label>
            <input
                value="3"
            />
        </Form.Field>
        <Form.Field name="mech" width={16}>
            <label>Mech</label>
            <Dropdown
                fluid
                selection
                options={this.props.mechs}
                value="WHM-6R"
            />
        </Form.Field>
    </Form>
</Segment>)
   }

    render() {
        return (<Segment>
           <Grid>
             <Grid.Column width={10}>
               <Header as="h3">Pilot List</Header>
               <PilotsList pilots={this.props.pilots} />
             </Grid.Column>
             <Grid.Column width={6}>
               <Header as="h3">Pilot Details</Header>
               <PilotDetails ranks={this.props.ranks} mechs={this.props.mechs} pilot={this.props.pilots[0] || {}} />
             </Grid.Column>
           </Grid>
         </Segment>)
     }
}

Pilots.propTypes = {
  pilots: PropTypes.arrayOf(
    PropTypes.shape({
       name: PropTypes.string,
       rank: PropTypes.string,
       age: PropTypes.number,
       mech: PropTypes.string,
       skills: PropTypes.string
    })
  ),
  mechs: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string,
      text: PropTypes.string
    })
  ),
  ranks: PropTypes.arrayOf(PropTypes.shape({
      value: PropTypes.string,
      text: PropTypes.string
    })
  )
}

Pilots.defaultProps = {
    pilots: [{}],
    ranks: [{}],
    mechs: [{}]
}
