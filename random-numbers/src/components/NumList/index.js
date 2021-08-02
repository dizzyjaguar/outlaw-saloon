import { h } from 'preact';

const NumList = ({numberList}) => {
  
  return (
    <>
      <ul>
			  {
			  numberList.map(num => {
				  return <li>{num}</li>
			  })
		    }
		  </ul>
    </>
  )
}

export default NumList;