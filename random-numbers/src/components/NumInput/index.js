import { h } from 'preact';
import { useState } from 'preact/hooks';
import { CSVLink, CSVDownload } from "react-csv";
import style from './style.css';


const NumInput = ({values, onChange, onSubmit}) => {

  const data = [ 
    ["firstname", "lastname", "email"],
  ["Ahmed", "Tomi", "ah@smthing.co.com"],
  ["Raed", "Labes", "rl@smthing.co.com"],
  ["Yezzi", "Min l3b", "ymin@cocococo.com"]
  ]

  const head = [
    {
      id: 'first',
      displayName: 'First column',
    },
    {
      id: 'second',
      displayName: 'Second column',
    },
  ]
  
  return (
    <div class={style.div}>
      <h1>Howdy what do ya' need partner?</h1>
      <form class={style.form}>
        <label>
          How Many <br/>
        <input type='number' name='howMany' value={values.howMany} onInput={onChange} />
        </label> <br/>
        <label>
          Low Number <br/>
        <input type='number' name='lowNum' value={values.lowNum} onInput={onChange} />
        </label> <br/>
        <label>
          High Number <br/>
        <input type='number' name='highNum' value={values.highNum} onInput={onChange} />
        </label> <br/>
        <button onClick={onSubmit}>Enter</button>
      </form> <br/>
      <CSVLink data={data}>Download me</CSVLink>;
    </div>
  )
}

export default NumInput;