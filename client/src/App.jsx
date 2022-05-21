import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.scss';
import {
	AccessibilityEvaluation,
	CodeEvaluation,
	ContrastEvaluation,
	EvaluationResults,
	Home,
	Layout,
	SelectEvaluationType,
	UrlEvaluation,
} from './screens';
import { UrlForm } from './components';

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Home />} />
					<Route path="evaluation" element={<AccessibilityEvaluation />}>
						<Route index element={<SelectEvaluationType />} />
						<Route path="url" element={<UrlEvaluation />} />
						<Route path="code" element={<CodeEvaluation />} />
						<Route path="results" element={<EvaluationResults />} />
					</Route>
					<Route path="contrast" element={<ContrastEvaluation />} />
				</Route>
			</Routes>
		</Router>
	);
}

export default App;
