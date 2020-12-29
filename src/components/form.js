import React, { Component } from 'react'
import shortid from 'shortid'
import Contacts from './contacts'
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

    addContact = e => {
        e.preventDefault()
        const { name, number } = e.target
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
                <Contacts state={this.state} />
            </div>

        )
    }
}

export default Form
