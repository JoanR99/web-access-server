import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
	useEvaluationResults,
	useEvaluationApi,
} from '../../context/evaluation/EvaluationContext';
import { ErrorCard, Spinner } from '../';

const UrlForm = () => {
	const navigate = useNavigate();
	const [url, setUrl] = useState('');
	const { useEvaluation, resetError } = useEvaluationApi();
	const { isSuccess, isError, errorMessage, isLoading } =
		useEvaluationResults();

	useEffect(() => {
		if (isSuccess) {
			navigate('/evaluation/results');
		}
	}, [isSuccess]);

	useEffect(() => {
		return () => {
			if (isError) {
				resetError();
			}
		};
	}, [isError]);

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
			{isLoading && <Spinner />}
			{isError && <ErrorCard>{errorMessage}</ErrorCard>}
		</>
	);
};

export default UrlForm;
