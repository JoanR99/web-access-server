import React from 'react';
import './ExamplePanel.scss';
import { useContrastStore } from '../../context/contrast/ContrastContext';

const ExamplePanel = () => {
	const { textColor, backgroundColor } = useContrastStore();

	return (
		<section
			className="example-panel"
			style={{ backgroundColor, color: textColor }}
		>
			{console.log('example')}
			<h1>Contrast Evaluator</h1>
			<p>
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto,
				expedita quos deserunt modi illum dolores veritatis odio pariatur maxime
				sint labore debitis ipsum placeat possimus similique eligendi voluptas
				amet vero?
			</p>
		</section>
	);
};

export default ExamplePanel;
