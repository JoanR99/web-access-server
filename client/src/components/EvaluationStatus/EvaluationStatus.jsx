import React from 'react';
import { useEvaluationResults } from '../../context/evaluation/EvaluationContext';
import { ErrorCard, Spinner } from '../';

const EvaluationStatus = () => {
	const { isSuccess, isError, errorMessage, isLoading } =
		useEvaluationResults();
	return (
		<>
			{isLoading && <Spinner />}
			{isError && <ErrorCard>{errorMessage}</ErrorCard>}
			{isSuccess && <div>Success!</div>}
		</>
	);
};

export default EvaluationStatus;
