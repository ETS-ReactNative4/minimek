import React from 'react'
import PropTypes from 'prop-types'
import { Table } from 'semantic-ui-react'

import MechsListHeader from 'features/mechs/MechsList/MechsListHeader'
import MechsListRow from 'features/mechs/MechsList/MechsListRow'

export default class MechsList extends React.Component {
  renderMechsRow = () => {
    return this.props.mechs.map(item => (<MechsListRow mech={item} key={item.id} />))
  }

  render() {
    return (<Table celled>
      <MechsListHeader />
      <Table.Body>{this.renderMechsRow()}</Table.Body>
    </Table>)
  }
}