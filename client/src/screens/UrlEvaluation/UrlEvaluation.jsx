import React from 'react';
import {
	UrlEvaluationIllustration,
	UrlForm,
	RequestStatus,
} from '../../components';
import useEvaluationFlow from '../../hooks/useEvaluationFlow';
import { useEvaluationResults } from '../../context/evaluation/EvaluationContext';

const UrlEvaluation = () => {
	const { isSuccess, isError, errorMessage, isLoading } =
		useEvaluationResults();
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
				<RequestStatus
					isSuccess={isSuccess}
					isError={isError}
					errorMessage={errorMessage}
					isLoading={isLoading}
				/>
			</div>
		</div>
	);
};

export default UrlEvaluation;
