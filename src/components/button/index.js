import React from 'react';

const Button = ({ addTodo, ...props }) => {
  return (
    <button onClick={addTodo} {...props}>
      Add
    </button>
  )
};

export default Button;