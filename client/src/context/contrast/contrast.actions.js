import { SET_TEXT_COLOR, SET_BACKGROUND_COLOR } from './contrast.types';

export const setTColor = (textColor) => ({
	type: SET_TEXT_COLOR,
	textColor,
});

export const setBColor = (backgroundColor) => ({
	type: SET_BACKGROUND_COLOR,
	backgroundColor,
});
