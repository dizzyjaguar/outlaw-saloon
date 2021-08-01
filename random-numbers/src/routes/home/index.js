import { h } from 'preact';
import { useEffect, useState } from 'preact/hooks';
import { generateNumbers } from '../../utils/numberGenerator';
import NumInput from '../../components/NumInput';
import style from './style.css';

const Home = () => {
	// this should eventually generate a certain amount of random numbers between 2 given numbers, list them out and then maybe somehow export them to be easily applied to a csv file 
	const [numberList, setNumberList] = useState([])

	//need to work on the function so that it only returns the number and a few numbers past the decemil
	useEffect(() => {
		setNumberList(generateNumbers(3, 1, 9))
	}, [])
	
	console.log(numberList)
	// for some reason this is not working on the return 
	const numberNodes = numberList.map(num => 
		{ <li>{num}</li>
	});
	
	
	return (
	<div class={style.home}>
		
		<h1>hi</h1>
		<NumInput />
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
