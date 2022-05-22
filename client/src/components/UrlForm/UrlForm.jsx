import React, { useState } from 'react';
import { useEvaluationApi } from '../../context/evaluation/EvaluationContext';

const UrlForm = () => {
	const [url, setUrl] = useState('');
	const { useEvaluation } = useEvaluationApi();

	const submitHandler = (e) => {
		e.preventDefault();
		useEvaluation('url', url);
	};

	return (
		<>
			<form onSubmit={submitHandler} className="form">
				<h2 className="heading-2 heading-2--primary">Evaluate By URL</h2>
				<div className="form-group">
					<label htmlFor="url">URL</label>
					<input
						type="url"
						name="url"
						id="url"
						value={url}
						onChange={(e) => setUrl(e.target.value)}
						placeholder="www.example.com"
					/>
				</div>
				<button type="submit" className="btn">
					Evaluate
				</button>
			</form>
		</>
	);
};

export default UrlForm;
