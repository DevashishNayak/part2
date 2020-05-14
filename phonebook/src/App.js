import React, { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import personService from './services/Person'
import './App.css'

const Notification = ({ message, className }) => {
  if (message === null) {
    return null
  }

  return (
    <div className={className}>
      {message}
    </div>
  )
}

const App = () => {
  const [ persons, setPersons ] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber] = useState('')
  const [ filter, setFilter ] = useState('')
  const [ message, setMessage ] = useState(null)
  const [ className, setClassName ] = useState(null)
  
  useEffect(() => {
    personService
    .getAll()
    .then(initialPersons => {
      setPersons(initialPersons)
    })
  }, [])

  const errormessage ="error"
  const notification ="notification"

  const personObject = {
    name: newName,
    number: newNumber
  }

  const addPerson = (event) => {
    event.preventDefault()
    const duplicate = persons.find(person => person.name.toLowerCase() === newName.toLowerCase())
    if (typeof duplicate !== 'undefined') {
      if(window.confirm(`${duplicate.name} is already added to phonebook, replace the old number with a new one?`)) {
        personService
        .update(duplicate.id, personObject)
        .then(returnedPerson => {
          setPersons(persons.map(person => person.id !== duplicate.id ? person : returnedPerson))
          setNewName('')
          setNewNumber('')
        })
        .catch(error => {
          setMessage(
            `Information of ${duplicate.name} has already been removed from server`
          )
          setClassName(errormessage)
          setTimeout(() => {
            setMessage(null)
          }, 5000)
          setPersons(persons.filter(person => person.id !== duplicate.id))
        })
      }
    }
    else {
      personService
      .create(personObject)
      .then(returnedPerson => {
        setPersons(persons.concat(returnedPerson))

        setNewNumber('')
      })
      setMessage(`Added ${personObject.name}`)
      setClassName(notification)
      setTimeout(() => {
        setMessage(null)
      }, 5000)
    }
  }

  const handleDeleteof = (id) => {
    personService
    .del(id)
    .then(() => {
      setPersons(persons.filter(person => person.id !== id))
    })
  }

  const handleFilter = (event) => {
    setFilter(event.target.value)
  }

  const handleName = (event) => {
    setNewName(event.target.value)
  }

  const handleNumber = (event) => {
    setNewNumber(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={message} className={className} />
      <Filter filter={filter} handleFilter={handleFilter} />
      <h3>add a new</h3>
      <PersonForm addPerson={addPerson} newName={newName} handleName={handleName} newNumber={newNumber} handleNumber={handleNumber} />
      <h3>Numbers</h3>
      <Persons persons={persons} filter={filter} handleDelete={handleDeleteof} />
    </div>
  )
}

export default App