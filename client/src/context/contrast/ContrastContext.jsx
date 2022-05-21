import { useReducer, createContext, useContext, useMemo } from 'react';
import { initialState, reducer } from './contrast.reducer';
import { setTColor, setBColor } from './contrast.actions';

const storeContext = createContext(initialState);
const apiContext = createContext();

export const ContrastProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	const api = useMemo(() => {
		const setTextColor = (textColor) => dispatch(setTColor(textColor));

		const setBackgroundColor = (backgroundColor) =>
			dispatch(setBColor(backgroundColor));

		return { setTextColor, setBackgroundColor };
	}, []);

	return (
		<apiContext.Provider value={api}>
			<storeContext.Provider value={state}>{children}</storeContext.Provider>
		</apiContext.Provider>
	);
};

export const useContrastStore = () => useContext(storeContext);
export const useContrastApi = () => useContext(apiContext);
