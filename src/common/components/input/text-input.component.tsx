import React from 'react';
import classes from './text-input.styles.css';

interface Props {
  value: string;
  name?: string;
  id?: string;
  type?: "text" | "password";
  onChange: (event) => void;
  placeholder?: string;
  label?: string  
}
export const TextInputComponent : React.FC<Props> = (props) => {
  const {value, id, name, type, onChange, placeholder, label } = props;
  
  return(
    <div className={classes.container}>
      {label && <label>{label}</label>}
      <input 
        id={id}
        name={name}
        value={value} 
        type={type}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder} 
      />
    </div>
  )
}