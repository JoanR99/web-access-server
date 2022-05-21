import {
	EVALUATION_START,
	EVALUATION_SUCCESS,
	EVALUATION_FAILURE,
	RESET_SUCCESS,
	RESET_ERROR,
} from './evaluation.types';

export const evaluationStart = () => ({
	type: EVALUATION_START,
});

export const evaluationSuccess = (results) => ({
	type: EVALUATION_SUCCESS,
	results,
});

export const evaluationFailure = (errorMessage) => ({
	type: EVALUATION_FAILURE,
	errorMessage,
});

export const successReset = () => ({
	type: RESET_SUCCESS,
});

export const errorReset = () => ({
	type: RESET_ERROR,
});
