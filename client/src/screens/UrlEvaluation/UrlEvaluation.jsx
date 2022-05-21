import React from 'react';
import { UrlEvaluationIllustration, UrlForm } from '../../components';

const UrlEvaluation = () => (
	<div className="layout-section">
		<div className="layout-section__img">
			<UrlEvaluationIllustration />
		</div>
		<div className="layout-section__info form-layout">
			<UrlForm />
		</div>
	</div>
);

export default UrlEvaluation;
