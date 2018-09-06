import React from 'react'
import PropTypes from 'prop-types'

import { Grid, Table, Segment, Header, Form } from 'semantic-ui-react'

import MechsList from 'features/mechs/MechsList/index'
import MechsDetail from 'features/mechs/MechsDetail'

export default class Mechs extends React.Component {
    renderMechRows = () => {
        return  this.props.mechs.map(mech => (<Table.Row>
            <Table.Cell>{mech.id}</Table.Cell>
            <Table.Cell>{mech.name}</Table.Cell>
            <Table.Cell>{mech.model}</Table.Cell>
            <Table.Cell>{mech.weight}</Table.Cell>
            <Table.Cell>{mech.classification}</Table.Cell>
        </Table.Row>)
      )
    }

    renderMechDetails = () => {
      return (<Segment >
      <Form size="large">
          <Form.Field name="id" width={6} >
              <label>ID</label>
              <input
                  placeholder="ID"
                  value="1"
              />
          </Form.Field>
          <Form.Field name="name" width={16} >
              <label>Name</label>
              <input
                  placeholder="Name"
                  value="Warhammer"
              />
          </Form.Field>
          <Form.Field name="model" width={6} >
              <label>Model</label>
              <input
                  placeholder="Model"
                  value="WHM-6R"
              />
          </Form.Field>
          <Form.Field name="weight" width={6} >
              <label>Weight</label>
              <input
                  value="70"
              />
          </Form.Field>
          <Form.Field name="class" width={6} >
              <label>Class</label>
              <input
                  value="Heavy"
              />
          </Form.Field>
      </Form>
  </Segment>)
    }

    render() {
        return (<Segment>
            <Grid>
            <Grid.Column width={10}>
                <Header as="h3">Mechs List</Header>
                <MechsList mechs={this.props.mechs} />
            </Grid.Column>
            <Grid.Column width={6}>
              <Header as="h3">Mech Details</Header>
              <MechsDetail mech={this.props.mechs[0] || {}} />
            </Grid.Column>
            </Grid>
        </Segment>)
    }
}

Mechs.propTypes = {
    mechs: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        model: PropTypes.string,
        weight: PropTypes.number
    })
  )
}

Mechs.defaultProps = {
    mechs: [
        {
            id: 1,
            name: 'Warhammer',
            model: 'WHM-6R',
            weight: 70
        }
    ]
}
