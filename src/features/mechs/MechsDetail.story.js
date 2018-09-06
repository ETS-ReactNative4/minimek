import React from 'react'
import { storiesOf } from '@storybook/react'
import { Container } from 'semantic-ui-react'

import MechsDetail from 'features/mechs/MechsDetail'

storiesOf('Mechs/MechsDetail')
    .addDecorator(story => <Container>{story()}</Container>)
    .add('details component', () => {
        const mech = {
            id: 1,
            name: 'Warhammer',
            model: 'WHM-6R',
            weight: 70,
            classification: 'Heavy'
        }
        return <MechsDetail mech={mech} />
    })