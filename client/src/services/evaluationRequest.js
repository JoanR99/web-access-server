import axios from 'axios';

export const urlEvaluationRequest = async (url) => {
	const { data } = await axios.post('/api/evaluate/url', {
		url,
	});

	return data;
};

export const codeEvaluationRequest = async (code) => {
	const { data } = await axios.post('/api/evaluate/code', {
		code,
	});

	return data;
};
