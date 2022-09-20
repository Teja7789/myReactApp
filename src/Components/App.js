//reacthook used for react functional component -useState
//reacthook -useEffect  to store data on localStorage
//useEffect used to render the component again
import React, { useState, useEffect } from 'react';

import './App.css';
import { uuid } from 'uuidv4';
import AppHeader from './AppHeader';
import AddContact from './AddContact';
import Contactlist from './Contactlist';
// import Contactcard from './Contactcard';
export default function App() {
  const [contacts, setContacts] = useState([]);
  //key
  const LOCAL_STORAGE_KEY = 'contacts';
  // const contacts = [
  //   {
  //     id:"1",
  //     name:"Dipesh",
  //     email:"malvia@gmail.com"
  //   },
  //   {
  //     id:"2",
  //     name:"Mukhesh",
  //     email:"mukhesha@gmail.com"
  //   }
  // ]
  const addContactHandler = (contact) => {
    console.log(contact);
    //from AddContact ==> contactlist
    setContacts([...contacts, contact]);
  };
  //useEffect
  //setItem
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);
  //getItem -- query
  useEffect(() => {
    const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (retriveContacts) setContacts(retriveContacts);
  }, []);
  return (
    <div className="ui container">
      New app
      <AppHeader />
      {/* state */}
      {/* props as fuction used to transfer data from child to parent  */}
      <AddContact addContactHandler={addContactHandler} />
      {/* props passing contacts property and value */}
      <Contactlist contacts={contacts} />
      {/* <Contactcard/> */}
    </div>
  );
}
