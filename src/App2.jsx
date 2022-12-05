import React from 'react'
import './App.css'
import { useState } from 'react';
import ContactForm from './ContactForm'
import Table from './Table.jsx';
export default function App() {
  const [contact, setContact] = useState([])
  const getData = (data) => {
    setContact([
      ...contact,
      data
    ])
  }

  return (
    <div>
      <ContactForm getData={getData}/>
      <Table contacts={contact}/>
    </div>
  )
}
