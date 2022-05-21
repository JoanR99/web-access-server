import React from 'react';
import { Link } from 'react-router-dom';
import './SelectEvaluationType.scss';

import { CardIcon, NetIcon, CodeIcon } from '../../components';

const SelectEvaluationType = () => (
	<div className="container select-evaluation-type">
		<h2 className="heading-2 heading-2--primary">Accessibility Evaluation</h2>
		<main className="flex">
			<Link to="url">
				<CardIcon title="URL" Icon={NetIcon} />
			</Link>
			<Link to="code">
				<CardIcon title="Code" Icon={CodeIcon} />
			</Link>
		</main>
	</div>
);

export default SelectEvaluationType;
