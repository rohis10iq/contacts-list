import React from "react";
import Card from "./Card";
import contacts from "../contacts";

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Card
        name ={contacts[0].name}
        email = {contacts[0].email}
        phone = {contacts[0].phone}
        img = {contacts[0].imgURL}
      />
      <Card
        name ={contacts[1].name}
        email = {contacts[1].email}
        phone = {contacts[1].phone}
        img = {contacts[1].imgURL}
      />
      <Card
        name ={contacts[2].name}
        email = {contacts[2].email}
        phone = {contacts[2].phone}
        img = {contacts[2].imgURL}
        
      />
      
    </div>
  );
}

export default App;
