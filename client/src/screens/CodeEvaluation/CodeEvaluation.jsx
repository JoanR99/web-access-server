import React from 'react';
import {
	CodeEvaluationIllustration,
	CodeForm,
	EvaluationStatus,
} from '../../components';
import useEvaluationFlow from '../../hooks/useEvaluationFlow';
import { useEvaluationResults } from '../../context/evaluation/EvaluationContext';

const CodeEvaluation = () => {
	const { isSuccess, isError } = useEvaluationResults();
	const evaluationFlow = useEvaluationFlow;

	evaluationFlow(isSuccess, isError);

	return (
		<div className="section">
			<div className="section__illustration">
				<CodeEvaluationIllustration />
			</div>
			<div className="section__content form-layout">
				<CodeForm />
				<EvaluationStatus />
			</div>
		</div>
	);
};

export default CodeEvaluation;
