import React from 'react';
import { Outlet } from 'react-router-dom';
import { EvaluationProvider } from '../../context/evaluation/EvaluationContext';

const AccessibilityEvaluation = () => (
	<EvaluationProvider>
		<Outlet />
	</EvaluationProvider>
);

export default AccessibilityEvaluation;
