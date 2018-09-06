import React from 'react'
import PropTypes from 'prop-types'
import { Table } from 'semantic-ui-react'

import PilotsListHeader from 'features/pilots/PilotsList/PilotsListHeader'
import PilotsListRow from 'features/pilots/PilotsList/PilotsListRow'

export default class PilotsList extends React.Component {
  renderPilotRows = () => {
      return this.props.pilots.map(pilot => (<PilotsListRow 
        pilot={pilot} 
        key={pilot.name}
      />)
    )
  }

  render() {
    return (<Table celled>
      <PilotsListHeader />
      <Table.Body>{this.renderPilotRows()}</Table.Body>
    </Table>)
  }
}

PilotsList.propTypes = {
  pilots: PropTypes.arrayOf(PilotsListRow.propTypes)
}

