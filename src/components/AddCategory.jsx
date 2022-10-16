import React, { useState } from 'react'

export const AddCategory = ({ onNewValue }) => {

  const [inputValue, setInputValue] = useState('test')

  const onChangeHandler = e => {
    setInputValue(e.target.value);
  };

  const onSubmitHandler = e => {
    e.preventDefault();

    if(inputValue.trim().length <= 1) return;

    onNewValue( inputValue.trim() );

    setInputValue('');

  };

  return (
    <form onSubmit={ onSubmitHandler } >
      <input
        type="text"
        placeholder='Buscar Gifs'
        value={ inputValue }
        onChange={ onChangeHandler }
      />
    </form>    
  )
}
