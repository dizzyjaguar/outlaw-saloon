import { h } from 'preact';
import { useState } from 'preact/hooks';
import style from './style.css';


const NumInput = () => {

  const [values, setValues] = useState({
    howMany: 0,
    lowNum: 0,
    highNum: 0
  });

  const onChange = (event) => {
    const { target } = event;
    const { name, value } = target;
    

    setValues({ ...values, [name]: value });
  };
  
  
  return (
    <div class={style.div}>
      <h1>What do ya' need partner?</h1>
      <form class={style.form}>
        <label>
          How Many <br/>
        <input type='number' name='howMany' value={values.howMany} onInput={onChange} />
        </label> <br/>
        <label>
          Low Number <br/>
        <input type='number' value={values.lowNum} onInput={onChange} />
        </label> <br/>
        <label>
          High Number <br/>
        <input type='number' value={values.highNum} onInput={onChange} />
        </label> <br/>
        <button>Enter</button>
      </form>
    </div>
  )
}

export default NumInput;