import React from 'react';
import './ColorInputs.scss';
import { ColorPicker } from '..';
import {
	useContrastStore,
	useContrastApi,
} from '../../context/contrast/ContrastContext';

const ColorInputs = () => {
	const { textColor, backgroundColor } = useContrastStore();
	const { setTextColor, setBackgroundColor } = useContrastApi();

	return (
		<section className="color-inputs">
			{console.log('color')}
			<ColorPicker
				color={textColor}
				setColor={setTextColor}
				title="Text Color"
				id="text-color"
			/>

			<ColorPicker
				color={backgroundColor}
				setColor={setBackgroundColor}
				title="Background Color"
				id="background-color"
			/>
		</section>
	);
};

export default ColorInputs;
