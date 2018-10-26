import React from 'react';

import { history } from '../../store';
import './index.css';

const handleClick = () => {
	history.push('/testing');
};

const TrainingPage = () => {
	return (
		<section className="trainining-page">
			Training page
			<button onClick={handleClick}>Click</button>
		</section>
	);
};

export default TrainingPage;
