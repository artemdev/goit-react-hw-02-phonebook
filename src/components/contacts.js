import React, { Component } from 'react'
import Section from './section'
import shortid from 'shortid'
class Contacts extends Component {

    render() {
        return (
            <Section title="Statistics">
                {this.props.state.contacts.map(home => <div key={shortid.generate()}>{home.name}</div>)}
            </Section>
        )
    }
}

export default Contacts
