import { h } from 'preact';
import { useState } from 'preact/hooks';

const NumInput = () => {

  const [values, setValues] = useState({
    howMany: 0,
    lowNum: 0,
    highNum: 0
  });

  const onChange = (event) => {
    const { target } = event;
    const { name, value } = target;
    event.linkstate()

    setValues({ ...values, [name]: value });
  };
  

  return (
    <>
    <p>numInput</p>
    <form>
      <label>
        How Many
      <input type='number' value={values.howMany} onInput={onChange} />
      </label>
      <label>
        Low Number
      <input type='number' value={values.lowNum} onInput={onChange} />
      </label>
      <label>
        High Number
      <input type='number' value={values.highNum} onInput={onChange} />
      </label>
    </form>
    </>
  )
}

export default NumInput;