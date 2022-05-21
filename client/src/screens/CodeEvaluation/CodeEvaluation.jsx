import React from 'react';
import { CodeEvaluationIllustration, CodeForm } from '../../components';

const CodeEvaluation = () => (
	<div className="layout-section">
		<div className="layout-section__img">
			<CodeEvaluationIllustration />
		</div>
		<div className="layout-section__info form-layout">
			<CodeForm />
		</div>
	</div>
);

export default CodeEvaluation;
