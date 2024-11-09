import React from 'react';

const Contacts = ({ contactsChange, deleteContacts }) => {
  const contacts = contactsChange();
  return (
    <>
      <div>Contacts</div>
      {contacts.map(obj => {
        return (
          <div key={obj.id}>
            {obj.name} : {obj.number}{' '}
            <button name={obj.name} onClick={deleteContacts}>
              Delete
            </button>
          </div>
        );
      })}
    </>
  );
};

export default Contacts;
