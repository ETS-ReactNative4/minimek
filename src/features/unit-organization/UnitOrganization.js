import React from 'react'
import PropTypes from 'prop-types'

import { Grid, Segment, Header, List } from 'semantic-ui-react'

export default class UnitOrganization extends React.Component {
    renderLances = () => {
        return this.props.lances.map(lance => (<List.List>
            <List.Item>
                <List.Icon name="cube" />  
                <List.Content>
                    <List.Header>{lance.name}</List.Header>
                    <List.List>{this.renderUnits(lance.units)}</List.List>
                </List.Content>
            </List.Item>
        </List.List>)
      )
    }

    renderUnits = (units) => {
       return units.map(unit => (<List.Item>
        <List.Icon name="user" />
          <List.Content>
            <List.Header>{unit.pilot} - {unit.mech}</List.Header>
          </List.Content>
        </List.Item>)
      )
    }


    render() {
        return (<Segment>
            <Grid>
                <Grid.Column width={10}>
                    <Header as="h3">Unit Table of Organization</Header>
                    <List size="large">
                    <List.Item>
                        <List.Icon name="cubes" />
                        <List.Content>
                            <List.Header>Black Widow Company</List.Header>
                            {this.renderLances()}
                        </List.Content>    
                    </List.Item>
                    </List>
                </Grid.Column>
            </Grid>    
        </Segment>)
    }
}

UnitOrganization.propTypes = {
    name: PropTypes.string,
    lances: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string,
        units: PropTypes.arrayOf(PropTypes.shape({
            pilot: PropTypes.string,
            mech: PropTypes.string
        }))
    }))
}

UnitOrganization.defaultProps = {
    name: 'Black Widow Company',
    lances: [
        {
            name: 'Command Lance',
            units: [
              {
                  pilot: 'Cpt. Natasha Kerensky',
                  mech: 'WHM-6R Warhammer'
              },
              {
                  pilot: 'Colin Maclaren',
                  mech: 'MAD-3R Marauder'
              },
              {
                  pilot: 'Lynn Sheridan',
                  mech: 'CRD-3R Crusader'
              },
              {
                  pilot: 'John Hayes',
                  mech: 'GRF-1N Griffin'
              }
            ]
        },
        {
            name: 'Fire Lance',
            units: [
                {
                   pilot: 'Lt. Takiro Ikeda',
                   mech: 'ARC-2R Archer'     
                },
                {
                    pilot: 'Miklos Delius',
                    mech: 'ARC-2R Archer'
                },
                {
                    pilot: 'Nikolai Koniev',
                    mech: 'WSP-1A Wasp'
                },
                {
                    pilot: 'Alex Ward',
                    mech: 'STG-3R Stinger'
                }
            ]
        },
        {
            name: 'Recon Lance',
            units: [
                {
                    pilot: 'Lt. John "Gentleman Johnny" Clavell',
                    mech: 'RFL-3N Rifleman'
                },
                {
                    pilot: 'Piet Nichols',
                    mech: 'PXH-1K Phoenix Hawk'
                },
                {
                    pilot: 'Simon Fraser',
                    mech: 'STG-3R Stinger'
                },
                {
                    pilot: 'Mohammar Jahan',
                    mech: 'STG-3R Stinger'
                }
            ]
        }
    ]
}
