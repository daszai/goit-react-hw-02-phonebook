import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import Contacts from './Contacts/Contacts';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
    filter: '',
  };

  add = e => {
    e.preventDefault();

    if (
      !this.state.contacts.some(e => {
        if (this.state.name === e.name) {
          return true;
        }
        return false;
      })
    ) {
      let temp = this.state.contacts;
      temp.push({
        name: this.state.name,
        id: nanoid(),
        number: this.state.number,
      });

      this.setState({ contacts: temp });
    } else alert(`${this.state.name} is already in contact`);
  };
  change = e => {
    this.setState({ name: e.target.value });
  };

  changeTel = e => {
    this.setState({ number: e.target.value });
  };

  changeFilter = e => {
    this.setState({ filter: e.target.value });
  };
  contactsChange = () => {
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
  deleteContacts = e => {
    let temp = this.state.contacts;
    const temp2 = temp.filter(obj => {
      if (e.currentTarget.name === obj.name) {
        return false;
      }
      return true;
    });

    this.setState({ contacts: temp2 });
  };
  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm
          name={this.state.name}
          change={this.change}
          number={this.state.number}
          changeTel={this.changeTel}
          add={this.add}
        />
        <h2>Contacts</h2>
        <Filter filter={this.state.filter} changeFilter={this.changeFilter} />
        <Contacts
          contactsChange={this.contactsChange}
          deleteContacts={this.deleteContacts}
        />
      </div>
    );
  }
}
