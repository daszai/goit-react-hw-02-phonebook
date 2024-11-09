import React, { Component } from 'react';
class ContactForm extends Component {
  render() {
    return (
      <form>
        <input
          type="text"
          name="name"
          // pattern="^[a-zA-Z]+(([' -][a-zA-Z])?[a-zA-Z]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={this.props.name}
          onChange={this.props.change}
        />
        <input
          type="tel"
          name="number"
          // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={this.props.number}
          onChange={this.props.changeTel}
        />
        <button onClick={this.props.add} type="submit">
          Add Contact
        </button>
      </form>
    );
  }
}

export default ContactForm;
