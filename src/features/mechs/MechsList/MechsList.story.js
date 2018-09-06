import React from 'react'
import { storiesOf } from '@storybook/react'
import { Container, Table } from 'semantic-ui-react'

import MechsListHeader from 'features/mechs/MechsList/MechsListHeader'
import MechsListRow from 'features/mechs/MechsList/MechsListRow'
import MechsList from 'features/mechs/MechsList/index'

storiesOf('Mechs/MechsList/Components')
    .addDecorator(story => (<Container>
        <Table celled>{story()}</Table>
        </Container>)
    )
    .add('ListHeader', () => <MechsListHeader />)
    .add('ListRow', () => {
        const mech = {
            id: 1,
            name: 'Warhammer',
            model: 'WHM-6R',
            weight: 70,
            classification: 'Heavy'
        }
        return <MechsListRow mech={mech} />
    })

storiesOf('Mechs/MechsList')
    .addDecorator(story => <Container>{story()}</Container>)
    .add('list component', () => {
        const mechs = [
            {
                id: 1,
                name: 'Warhammer',
                model: 'WHM-6R',
                weight: 70,
                classification: 'Heavy'
            }
        ]
        return <MechsList mechs={mechs} />
    })