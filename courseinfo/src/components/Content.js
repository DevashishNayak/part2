import React from 'react';
import Part from './Part'

const Content = ({ parts }) => {
    const total = parts.reduce((sum, value) => sum+value.exercises, 0)

  return (
    <div>
      {parts.map(parts => <Part key={parts.id} name={parts.name} exercises={parts.exercises} />)}
      <p>
          <b>
            total of {total} exercises
          </b>
      </p>
    </div>
  )
}

export default Content