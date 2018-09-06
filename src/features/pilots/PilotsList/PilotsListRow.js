import React from 'react'
import PropTypes from 'prop-types'
import { Table } from 'semantic-ui-react'

export default function PilotsListRow(props) {
    return (<Table.Row>
        <Table.Cell>{props.pilot.name}</Table.Cell>
        <Table.Cell>{props.pilot.rank}</Table.Cell>
        <Table.Cell>{props.pilot.age}</Table.Cell>
        <Table.Cell>{props.pilot.gunnery}/{props.pilot.piloting}</Table.Cell>
        <Table.Cell>{props.pilot.mech}</Table.Cell>
    </Table.Row>)
}

PilotsListRow.PropTypes = {
    pilot: PropTypes.shape({
        name: PropTypes.string,
        rank: PropTypes.string,
        age: PropTypes.number,
        gunnery: PropTypes.number,
        piloting: PropTypes.number,
        mech: PropTypes.string
    })
}

PilotsListRow.defaultProps = {
    pilot: {}
}

