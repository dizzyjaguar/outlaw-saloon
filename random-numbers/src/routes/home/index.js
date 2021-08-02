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
    
    setValues({ ...values, [name]: value });
  };

  const onSubmit = (e) => {
    console.log(numberList)
		
		e.preventDefault();
  }

	//need to work on the function so that it only returns the number and a few numbers past the decemil
	useEffect(() => {
		setNumberList(generateNumbers(3, 1, 9))
	}, [])
	
	
	// for some reason this is not working on the return 
	const numberNodes = numberList.map(num => 
		{ <li>{num}</li>
	});
	
	
	return (
	<div class={style.home}>
		
		<NumInput values={values} setValues={setValues} onChange={onChange} onSubmit={onSubmit} />
		<NumList />
		<ul>
			{
			numberList.map(num => {
				return <li>{num}</li>
			})
		}
		</ul>
	</div>
	)
};

export default Home;
