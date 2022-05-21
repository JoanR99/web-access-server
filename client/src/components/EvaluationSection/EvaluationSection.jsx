import React from 'react';
import { EvaluationIllustration, Button } from '../';

const EvaluationSection = () => (
	<section className="layout-section">
		<div className="layout-section__img">
			<EvaluationIllustration />
		</div>
		<div className="layout-section__info">
			<h1 className="heading-1 heading-1--secondary">
				We want to help you make the web more accessible
			</h1>
			<p className="layout-section__text">
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos
				sequi officia obcaecati dolore, harum tempora a numquam expedita optio?
				Possimus.
			</p>
			<Button to="/evaluation/code">Evaluate</Button>
		</div>
	</section>
);

export default EvaluationSection;
