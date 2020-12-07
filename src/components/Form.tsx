import React from 'react';
import './Form.css';
import {useForm, useFieldArray} from "react-hook-form"

const Form:React.FC<any> = ({onComplete}) => {
  const {register, control, handleSubmit} = useForm();
  const {fields, append, remove} = useFieldArray({
    control,
    name: "costform"
  });

  const doSubmit = (data:any) => {
    let returnData = data.costform;
    for (let i = 0; i < returnData.length; i++) {
      returnData[i].amount = parseInt(returnData[i].amount)
    }
    //console.log(returnData)
    onComplete(returnData)
  }

  return (
    <form onSubmit={handleSubmit(doSubmit)}>
      <ul>
        {fields.map((item, index) => (
          <li key={item.id}>
            <input className={"name"}
              name={`costform[${index}].name`}
              placeholder={"Name"}
              ref={register({required: true})}
              defaultValue={item.name}
            />
            <input type="number"
              name={`costform[${index}].amount`}
              placeholder={"Amount"}
              ref={register({required: true})}
              defaultValue={item.amount}
            />
            <button type="button" onClick={() => remove(index)}>Delete</button>
          </li>
        ))}
      </ul>
      <button type="button" onClick={() => append({name:"", amount: null})}>
        Add person
      </button>
      <button type="submit">Calculate</button>
    </form>
  )
}

export default Form;