import React from 'react'
import { storiesOf } from '@storybook/react'
import { Container, Table } from 'semantic-ui-react'

import PilotsListHeader from 'features/pilots/PilotsList/PilotsListHeader'
import PilotsListRow from 'features/pilots/PilotsList/PilotsListRow'
import PilotsList from 'features/pilots/PilotsList/index'

import 'semantic-ui-css/semantic.css'

storiesOf('Pilots/PilotsList/PilotsListComponents')
    .addDecorator(story => (<Container>
        <Table celled>{story()}</Table>
    </Container>)
  )
  .add('Header', () => <PilotsListHeader />)
  .add('Row', () => {
      const pilot = {
        name: 'Natasha Kerensky',
        rank: 'Colonel',
        age: 34,
        gunnery: 2,
        piloting: 3,
        mech: 'WHM-6R'
    }
    return (<Table.Body><PilotsListRow pilot={pilot} /></Table.Body>)
  })

  storiesOf('Pilots/PilotsList')
  .addDecorator(story => <Container>{story()}</Container>)
  .add('the list', () => {
    const pilots = [
      {
          name: 'Natasha Kerensky',
          rank: 'Colonel',
          age: 34,
          gunnery: 2,
          piloting: 3,
          mech: 'WHM-6R'
      }
    ]
    return <PilotsList pilots={pilots} />
})
