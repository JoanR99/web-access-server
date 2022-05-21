import React from 'react';
import './ContrastEvaluation.scss';
import { ColorInputs, ExamplePanel, StatusPanel } from '../../components';
import { ContrastProvider } from '../../context/contrast/ContrastContext';

const ContrastEvaluation = () => {
	return (
		<ContrastProvider>
			{console.log('contrast')}
			<div className="contrast-page">
				<ExamplePanel />
				<StatusPanel />
				<ColorInputs />
			</div>
		</ContrastProvider>
	);
};

export default ContrastEvaluation;
