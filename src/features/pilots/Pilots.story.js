import React from 'react'
import { storiesOf } from '@storybook/react'
import { Container } from 'semantic-ui-react'

import Pilots from 'features/pilots/index.js'

storiesOf('Pilots')
    .addDecorator(story => (<Container>{story()}</Container>))
    .add('Pilots feature', () => {
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

          const ranks = [
              {value: "Private", text : "Private"},
              {value: "Corporal", text : "Corporal"},
              {value: "Sergeant", text : "Sergeant"},
              {value: "Lieutenant", text : "Lieutenant"},
              {value: "Captain", text : "Captain"},
              {value: "Major", text : "Major"},
              {value: "Colonel", text : "Colonel"},
          ]

          const mechs = [
              {value : "WHM-6R", text : "Warhammer WHM-6R"}
          ]
        return (<Pilots pilots={pilots} mechs={mechs} ranks={ranks} />)
    })