import React from 'react';
import './Form.css';
import {useForm, useFieldArray, Controller} from "react-hook-form"

const Form = () => {

  const {register, control, handleSubmit, reset, trigger, setError} = useForm({
  //  defaultValues: {name:"name", amount:0}
  });
  const {fields, append, prepend, remove, swap, move, insert} = useFieldArray({
    control,
    name: "fieldArray"
  });

  return (
    <form onSubmit={handleSubmit(data => console.log(data))}>
      <ul>
        {fields.map((item, index) => (
          <li key={item.id}>
            <input
              name={`fieldArray[${index}].name`}
              ref={register()}
              defaultValue={item.name}
            />

            <Controller
              as={<input />}
              name={`fieldArray[${index}].amount`}
              control={control}
              defaultValue={item.amount}
            />

            <button type="button" onClick={() => remove(index)}>Delete</button>
          </li>
        ))}
      </ul>
      <button type="button" onClick={() => append({name:"name", amount: 0})}>
        Add person
      </button>
      <button type="submit">Calculate</button>
    </form>
  )
}

export default Form;