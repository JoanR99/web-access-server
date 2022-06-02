import axios from 'axios';

const evaluationRequest = async (endPoint, urlOrCode) => {
	const { data } = await axios.post(`/api/evaluate/${endPoint}`, {
		[endPoint]: urlOrCode,
	});

	return data;
};

export default evaluationRequest;
