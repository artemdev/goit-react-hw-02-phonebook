import React, { Component, Fragment } from 'react'
import Section from './section'

class Contacts extends Component {

    state = {
        ...this.props.state
    }

    changeFilter = (e) => {
        const { value } = e.target
        this.setState({ filter: value })
    }
    filterResults = (contacts) => {
        return contacts.filter(item => item.name.includes(this.state.filter)).map(item =>
            <div>{item.name} {item.number}</div>)

    }

    render() {
        return (
            <Section title="Contacts">


                <label htmlFor="name">
                    <input type="text" id="name" onChange={this.changeFilter} />
                </label>


                {this.filterResults(this.state.contacts)}
            </Section>
        )
    }
}

export default Contacts
