import { h } from 'preact';
import { useState } from 'preact/hooks';
import style from './style.css';


const NumInput = ({values, onChange, onSubmit}) => {
  
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
      </form>
    </div>
  )
}

export default NumInput;