import React, { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import { FailTestsDetails } from '../../components';
import {
	useEvaluationResults,
	useEvaluationApi,
} from '../../context/evaluation/EvaluationContext';

const AccessibilityEvaluationResults = () => {
	const { resetSuccess } = useEvaluationApi();
	const { results } = useEvaluationResults();

	useEffect(() => {
		resetSuccess();
	}, []);

	return (
		<Container>
			<h1 className="text-center mb-4">Results</h1>
			<>
				<h3>Elements evaluated: {results?.elementsEvaluatedCount}</h3>
				<h3>Errors found: {results?.errorsFoundCount}</h3>
				<FailTestsDetails failDetails={results?.specificResults} />
			</>

			<Link to="/evaluation">Go Back</Link>
		</Container>
	);
};

export default AccessibilityEvaluationResults;
