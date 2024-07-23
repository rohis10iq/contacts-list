import React from "react";
import Card from "./Card";
import contacts from "../contacts";


function getCard (contact){
  return (
    <>
    <Card
      key={contact.id}
      name={contact.name}
      email={contact.email}
      phone={contact.phone}
      img = {contact.imgURL}

    />
    </>
  )
}

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      {contacts.map(getCard)}
    </div>
  );
}

export default App;
