import React from 'react';

const Contacts = ({ contactschange }) => {
  const contacts = contactschange();
  return (
    <>
      <div>Contacts</div>
      {contacts.map(obj => {
        return (
          <div key={obj.id}>
            {obj.name} : {obj.number}
          </div>
        );
      })}
    </>
  );
};

export default Contacts;
