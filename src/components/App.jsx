import React from 'react';
import Card from './Card';
import contacts from '../contacts.js';

function createCard(contact) {
  return <Card 
    key = {contact.id}
    name = {contact.name}
    imgUrl = {contact.imgURL}
    tel = {contact.phone}
    email = {contact.email}
  />
}
function App() {
  console.log('Contact from App:' + contacts[0]);
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      {contacts.map( createCard )}
    </div>
  );
}

export default App;
