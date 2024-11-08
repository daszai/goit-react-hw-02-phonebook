import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import Contacts from './Contacts/Contacts';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
    filter: '',
  };

  add = e => {
    e.preventDefault();
    let temp = this.state.contacts;
    temp.push({
      name: this.state.name,
      id: nanoid(),
      number: this.state.number,
    });
    this.setState({ contacts: temp });
  };
  change = e => {
    this.setState({ name: e.target.value });
  };

  changetel = e => {
    this.setState({ number: e.target.value });
  };

  changefilter = e => {
    this.setState({ filter: e.target.value });
  };
  contactschange = () => {
    let temp = this.state.filter.toLowerCase();
    let temp2 = this.state.contacts;
    let temp3 = false;
    if (temp.length > 0)
      temp2 = this.state.contacts.filter(e => {
        for (let i = 0; i < e.name.length; i++) {
          if (e.name[i].toLowerCase() === temp[0]) {
            temp3 = true;
            for (let j = 0; j < temp.length; j++) {
              if (j + i < e.name.length) {
                if (e.name[j + i].toLowerCase() !== temp[j]) {
                  temp3 = false;
                }
              } else temp3 = false;
            }
            if (temp3 === true) {
              temp3 = false;
              return true;
            }
          }
        }
        return false;
      });
    return temp2;
  };

  render() {
    return (
      <>
        <form>
          <input
            type="text"
            name="name"
            // pattern="^[a-zA-Z]+(([' -][a-zA-Z])?[a-zA-Z]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={this.state.name}
            onChange={this.change}
          />
          <input
            type="tel"
            name="number"
            // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={this.state.number}
            onChange={this.changetel}
          />
          <button onClick={this.add} type="submit">
            Add Contact
          </button>
        </form>
        <form>
          <input
            type="text"
            value={this.state.filter}
            onChange={this.changefilter}
          />
        </form>
        <Contacts contactschange={this.contactschange} />
      </>
    );
  }
}
