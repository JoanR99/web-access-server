import React from 'react';
import {
	UrlEvaluationIllustration,
	UrlForm,
	EvaluationStatus,
} from '../../components';
import useEvaluationFlow from '../../hooks/useEvaluationFlow';
import { useEvaluationResults } from '../../context/evaluation/EvaluationContext';

const UrlEvaluation = () => {
	const { isSuccess, isError } = useEvaluationResults();
	const evaluationFlow = useEvaluationFlow;

	evaluationFlow(isSuccess, isError);

	console.log('url');

	return (
		<div className="section">
			<div className="section__illustration">
				<UrlEvaluationIllustration />
			</div>
			<div className="section__content form-layout">
				<UrlForm />
				<EvaluationStatus />
			</div>
		</div>
	);
};

export default UrlEvaluation;
