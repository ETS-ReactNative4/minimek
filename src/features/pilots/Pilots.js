import React from 'react'
import PropTypes from 'prop-types'

import { Grid, Table, Segment, Header, Form, Dropdown } from 'semantic-ui-react'

export default class Pilots extends React.Component {
   renderPilotRows = () => {
    return this.props.pilots.map(pilot => ( <Table.Row>
        <Table.Cell>{pilot.name}</Table.Cell>
        <Table.Cell>{pilot.rank}</Table.Cell>
        <Table.Cell>{pilot.age}</Table.Cell>
        <Table.Cell>{pilot.skills}</Table.Cell>
        <Table.Cell>{pilot.mech}</Table.Cell>
    </Table.Row>
    ))
   }

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
               <Table celled>
                 <Table.Header>
                   <Table.Row>
                     <Table.HeaderCell width={5}>Name</Table.HeaderCell>
                     <Table.HeaderCell width={3}>Rank</Table.HeaderCell>
                     <Table.HeaderCell width={2}>Age</Table.HeaderCell>
                     <Table.HeaderCell width={2}>Skills</Table.HeaderCell>
                     <Table.HeaderCell width={4}>Mech</Table.HeaderCell>
                   </Table.Row>
                 </Table.Header>
                 <Table.Body>{this.renderPilotRows()}
                 </Table.Body>
               </Table>
             </Grid.Column>
             <Grid.Column width={6}>
               <Header as="h3">Pilot Details</Header>
               {this.renderPilotDetails()}
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
    pilots: [
      {
          name: 'Natasha Kerensky',
          rank: 'Colonel',
          age: 34,
          skills: '2/3',
          mech: 'WHM-6R'
      }
    ],
    ranks: [
        {value: "Private", text : "Private"},
        {value: "Corporal", text : "Corporal"},
        {value: "Sergeant", text : "Sergeant"},
        {value: "Lieutenant", text : "Lieutenant"},
        {value: "Captain", text : "Captain"},
        {value: "Major", text : "Major"},
        {value: "Colonel", text : "Colonel"},
    ],
    mechs: [
        {value : "WHM-6R", text : "Warhammer WHM-6R"}
    ]
}
