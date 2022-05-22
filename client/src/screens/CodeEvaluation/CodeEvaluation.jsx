import React from 'react';
import {
	CodeEvaluationIllustration,
	CodeForm,
	RequestStatus,
} from '../../components';
import useEvaluationFlow from '../../hooks/useEvaluationFlow';
import { useEvaluationResults } from '../../context/evaluation/EvaluationContext';

const CodeEvaluation = () => {
	const { isSuccess, isError, errorMessage, isLoading } =
		useEvaluationResults();
	const evaluationFlow = useEvaluationFlow;

	evaluationFlow(isSuccess, isError);

	return (
		<div className="section">
			<div className="section__illustration">
				<CodeEvaluationIllustration />
			</div>
			<div className="section__content form-layout">
				<CodeForm />
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

export default CodeEvaluation;
