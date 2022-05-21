import React from 'react';
import { useContrastStore } from '../../context/contrast/ContrastContext';

const EvaluationStatus = () => {
	const { isLoading, error } = useContrastStore();
	return (
		<>
			{isLoading && <div>loading...</div>}
			{error && <div>{error}</div>}
		</>
	);
};

export default EvaluationStatus;
