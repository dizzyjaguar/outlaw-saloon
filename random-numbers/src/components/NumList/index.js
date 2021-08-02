import { h } from 'preact';
import style from './style.css';

const NumList = ({numberList}) => {
  
  return (
    <div class={style.div}>
      <ul class={style.ul}>
			  {
			  numberList.map(num => {
				  return <li>{num}</li>
			  })
		    }
		  </ul>
    </div>
  )
}

export default NumList;