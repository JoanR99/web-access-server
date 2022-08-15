import React, { useState } from 'react';
import './ContrastEvaluation.scss';
import { ColorInputs, ExamplePanel, StatusPanel } from '../../components';

const ContrastEvaluation = () => {
	const [textColor, setTextColor] = useState('#ffffff');
	const [backgroundColor, setBackgroundColor] = useState('#000000');
	return (
		<div className="contrast-page">
			{console.log('contrast')}
			<ExamplePanel textColor={textColor} backgroundColor={backgroundColor} />
			<StatusPanel textColor={textColor} backgroundColor={backgroundColor} />
			<ColorInputs
				textColor={textColor}
				backgroundColor={backgroundColor}
				setTextColor={setTextColor}
				setBackgroundColor={setBackgroundColor}
			/>
		</div>
	);
};

export default ContrastEvaluation;
