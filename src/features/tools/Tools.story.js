import React from 'react'
import { storiesOf } from '@storybook/react'
import { Container } from 'semantic-ui-react'

import Tools from 'features/tools/index'
import configureStore from 'app/store/configureStore'
import { Provider } from 'react-redux'

storiesOf('Tools', module)
    .addDecorator(story => (<Container><Provider store ={configureStore({})}>{story()}</Provider></Container>))
    .add('tools feature', () => <Tools />)