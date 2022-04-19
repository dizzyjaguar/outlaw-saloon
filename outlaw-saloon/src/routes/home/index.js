import { h } from 'preact';
import { useEffect, useState } from 'preact/hooks';
import { generateNumbers } from '../../utils/numberGenerator';
import NumInput from '../../components/NumInput';
import style from './style.css';
import NumList from '../../components/NumList';

const Home = () => {
	const [numberList, setNumberList] = useState([])
	const [showList, setShowList] = useState(false)
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

  const onSubmit = (e) => {
		let list = generateNumbers(values.howMany, values.lowNum, values.highNum)
    setNumberList(list)
		e.preventDefault();
  };

	const toggleList = (e) => {
		showList === false ? setShowList(true) : setShowList(false)
		e.preventDefault();
	};
	
	return (
		<div class={style.home}>	
			<NumInput numberList={numberList} values={values} setValues={setValues} onChange=	{onChange} onSubmit={onSubmit} toggleList={toggleList} />

			{
				showList === true ? <NumList numberList={numberList} /> : <> </>
			}

		</div>
	)
};

export default Home;
