import { h } from 'preact';
import { useState } from 'preact/hooks';
import style from './style.css';

const Home = () => {
	// this should eventually generate a certain amount of random numbers between 2 given numbers, list them out and then maybe somehow export them to be easily applied to a csv file 
	const [numberList, setNumberList] = useState([])

	return (
	<div class={style.home}>
		<h1>hi</h1>
		<p>{ numberList }</p>
	</div>
	)
};

export default Home;
