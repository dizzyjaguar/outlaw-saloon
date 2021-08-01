import { h } from 'preact';

const NumInput = () => {

  const onChange = (event) => {
    const { target } = event;
    const { value } = target;
    
  }
  

  return (
    <>
    <p>numInput</p>
    <form>
      <label>
        How Many
      <input type='number' onInput={onChange} />
      </label>
      <label>
        Low Number
      <input type='number' onInput={onChange} />
      </label>
      <label>
        High Number
      <input type='number' onInput={onChange} />
      </label>
    </form>
    </>
  )
}

export default NumInput;