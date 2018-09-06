import React from 'react'
import PropTypes from 'prop-types'
import { Table } from 'semantic-ui-react'
import { getWeightClass } from 'features/mechs/mechsSelector'

export default function MechsListRow(props) {
    return (<Table.Row>
        <Table.Cell>{props.mech.id}</Table.Cell>
        <Table.Cell>{props.mech.name}</Table.Cell>
        <Table.Cell>{props.mech.model}</Table.Cell>
        <Table.Cell>{props.mech.weight}</Table.Cell>
        <Table.Cell>{getWeightClass(props.mech.weight)}</Table.Cell>
    </Table.Row>)
}

MechsListRow.propTypes = {
  mech: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    model: PropTypes.string,
    weight: PropTypes.number
  })
}

MechsListRow.defaultProps = {
    mech: {}
}
