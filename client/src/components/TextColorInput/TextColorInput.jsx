import React from 'react';
import {
	useContrastStore,
	useContrastApi,
} from '../../context/contrast/ContrastContext';
import Form from 'react-bootstrap/Form';

const TextColorInput = () => {
	const { setTextColor } = useContrastApi();
	const { textColor } = useContrastStore();

	return (
		<Form.Group className="d-flex flex-column justify-content-center align-items-center">
			<Form.Label htmlFor="input-text">Text Color Picker</Form.Label>
			<Form.Control
				type="color"
				id="input-text"
				value={textColor}
				title="Choose text color"
				onChange={(e) => setTextColor(e.target.value)}
			/>
		</Form.Group>
	);
};

export default TextColorInput;
