import React, { useState } from 'react';
import { useEvaluationApi } from '../../context/evaluation/EvaluationContext';

const CodeForm = () => {
	const [code, setCode] = useState('');
	const { useEvaluation } = useEvaluationApi();

	const submitHandler = (e) => {
		e.preventDefault();
		useEvaluation('code', code);
	};

	return (
		<>
			<form onSubmit={submitHandler} className="form">
				<h2 className="heading-2 heading-2--primary">Evaluate By Code</h2>
				<div className="form-group">
					<label htmlFor="code">Code</label>
					<textarea
						rows={5}
						name="code"
						id="code"
						value={code}
						onChange={(e) => setCode(e.target.value)}
						placeholder="<html> </html>"
					></textarea>
				</div>
				<button type="submit" className="btn">
					Evaluate
				</button>
			</form>
		</>
	);
};

export default CodeForm;
