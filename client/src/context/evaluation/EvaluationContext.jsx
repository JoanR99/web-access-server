import { useContext, createContext, useReducer, useMemo } from 'react';
import { initialState, evaluationReducer } from './evaluation.reducer';
import {
	evaluationStart,
	evaluationSuccess,
	evaluationFailure,
	successReset,
	errorReset,
} from './evaluation.actions';
import evaluationRequest from '../../services/evaluationRequest';

const storeContext = createContext(initialState);
const apiContext = createContext();

export const EvaluationProvider = ({ children }) => {
	const [state, dispatch] = useReducer(evaluationReducer, initialState);

	const api = useMemo(() => {
		const useEvaluation = async (endPoint, urlOrCode) => {
			try {
				dispatch(evaluationStart());

				const results = await evaluationRequest(endPoint, urlOrCode);

				dispatch(evaluationSuccess(results));
			} catch (e) {
				dispatch(evaluationFailure(e.response.data.message));
			}
		};

		const resetSuccess = () => dispatch(successReset());

		const resetError = () => dispatch(errorReset());

		return { useEvaluation, resetSuccess, resetError };
	}, []);

	return (
		<apiContext.Provider value={api}>
			<storeContext.Provider value={state}>{children}</storeContext.Provider>
		</apiContext.Provider>
	);
};

export const useEvaluationResults = () => useContext(storeContext);
export const useEvaluationApi = () => useContext(apiContext);
