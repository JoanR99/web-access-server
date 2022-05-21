import { SET_TEXT_COLOR, SET_BACKGROUND_COLOR } from './contrast.types';

export const initialState = {
	textColor: '#ffffff',
	backgroundColor: '#1a8fe3',
};

export const reducer = (state = initialState, action = {}) => {
	switch (action.type) {
		case SET_TEXT_COLOR:
			return { ...state, textColor: action.textColor };

		case SET_BACKGROUND_COLOR:
			return { ...state, backgroundColor: action.backgroundColor };

		default:
			return state;
	}
};
