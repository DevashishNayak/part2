import React from 'react'
import Person from './Person'

const Persons = ({persons, filter, handleDelete}) => {
  const filtered = persons.filter(person => person.name.toLowerCase().indexOf(filter.toLowerCase()) !== -1);

  const handleDeleteOf = (id) => {
    const deleteObject = persons.find(person => person.id === id)
    if(window.confirm(`Delete ${deleteObject.name} ?`)) {
      handleDelete(id)
    }
  } 

  return (
    <div>
      {filtered.map(person => <Person key={person.name} name={person.name} number={person.number} handleDelete={() => handleDeleteOf(person.id)} />)}
    </div>
  )
}

export default Persons