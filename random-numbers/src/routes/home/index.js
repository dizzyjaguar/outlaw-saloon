import { h } from 'preact';
import { useEffect, useState } from 'preact/hooks';
import { generateNumbers } from '../../utils/numberGenerator';
import NumInput from '../../components/NumInput';
import style from './style.css';
import NumList from '../../components/NumList';

const Home = () => {
	const [numberList, setNumberList] = useState([])
	const [values, setValues] = useState({
    howMany: 0,
    lowNum: 0,
    highNum: 0
  });

  const onChange = (event) => {
    const { target } = event;
    const { name, value } = target;
    
    setValues({ ...values, [name]: Number(value) });
  };

	console.log(typeof values.lowNum)

  const onSubmit = (e) => {
		let list = generateNumbers(values.howMany, values.lowNum, values.highNum)
    setNumberList(list)
		e.preventDefault();
		// console.log(generateNumbers(values.howMany, values.lowNum, values.highNum))
  }
	
	
	return (
	<div class={style.home}>
		
		<NumInput numberList={numberList} values={values} setValues={setValues} onChange={onChange} onSubmit={onSubmit} />
		<NumList numberList={numberList} />
		
	</div>
	)
};

export default Home;
