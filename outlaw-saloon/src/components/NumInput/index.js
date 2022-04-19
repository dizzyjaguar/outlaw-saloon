import { h } from 'preact';
import { useEffect, useRef, useState } from 'preact/hooks';
import { CSVLink, CSVDownload } from "react-csv";
import Csv from '../Csv';
import style from './style.css';


const NumInput = ({numberList, values, onChange, onSubmit, toggleList}) => {
  const [dataState, setDataState] = useState([['The Number']])
  
  
  useEffect(() => {
    let data = [['The Number']]
    numberList.forEach(num => data.push(new Array(num)))
    setDataState(data)
  }, [numberList])
  
  
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
      <Csv data={dataState} /> <br/> <br/>
      <a href="" onClick={toggleList}>Show list</a>
    </div>
  )
}

export default NumInput;