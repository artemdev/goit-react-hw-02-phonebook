import React, { Component } from 'react'
import shortid from 'shortid'
import Section from './section'

const INITIAL_STATE = {
    contacts: [
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: ''
}
class Form extends Component {
    state = {
        ...INITIAL_STATE
    }

    number = shortid.generate()
    invalid = (name) => {
        const foundUsers = this.state.contacts.filter(item => item.name === name)
        if (foundUsers.length > 0) {
            return alert('user already exists')
        }
        return false
    }
    addContact = e => {
        e.preventDefault()
        const { name, number } = e.target

        if (this.invalid(name.value)) return


        const contact = {
            "name": name.value,
            "number": number.value,
            "id": shortid.generate()
        }

        this.setState({
            name: name.value,
            number: number.value,
            contacts: [...this.state.contacts, contact]
        })
    }
    changeFilter = (e) => {
        const { value } = e.target

        this.setState({ ...this.state, filter: value.toLowerCase() })
    }
    filterResults = (contacts) => {
        return contacts.filter(item => item.name.toLowerCase().includes(this.state.filter)).map(item =>
            <div key={shortid.generate()}> {item.name} {item.number}</ div>)

    }
    render() {

        return (
            <div>
                <form action="" onSubmit={this.addContact}>

                    <label htmlFor="name">
                        Name <br />
                        <input type="text" id="name" />
                    </label>
                    <br />
                    <label htmlFor="number">
                        Number <br />
                        <input type="text" id="number" />
                    </label>
                    <br />

                    <button type="submit">Add contact</button>
                </form>

                <Section title="Contacts">


                    <label htmlFor="filter">
                        <input type="text" id="filter" onChange={this.changeFilter} />
                    </label>


                    {this.filterResults(this.state.contacts)}
                </Section>
            </div>
        )
    }
}

export default Form
