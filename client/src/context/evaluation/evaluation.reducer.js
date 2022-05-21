import {
	EVALUATION_START,
	EVALUATION_SUCCESS,
	EVALUATION_FAILURE,
	RESET_SUCCESS,
	RESET_ERROR,
} from './evaluation.types';

export const initialState = {
	isLoading: false,
	isError: false,
	errorMessage: '',
	isSuccess: false,
	results: null,
};

export const evaluationReducer = (state = initialState, action = {}) => {
	switch (action.type) {
		case EVALUATION_START:
			return {
				...state,
				isLoading: true,
				isError: false,
			};

		case EVALUATION_SUCCESS:
			return {
				...state,
				results: action.results,
				isLoading: false,
				isSuccess: true,
			};

		case EVALUATION_FAILURE:
			return {
				...state,
				isLoading: false,
				isError: true,
				errorMessage: action.errorMessage,
			};

		case RESET_SUCCESS:
			return {
				...state,
				isSuccess: false,
			};

		case RESET_ERROR:
			return {
				...state,
				isError: false,
			};

		default:
			return state;
	}
};
