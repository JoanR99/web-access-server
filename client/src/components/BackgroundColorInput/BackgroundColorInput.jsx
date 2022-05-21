import React from 'react';
import {
	useContrastStore,
	useContrastApi,
} from '../../context/contrast/ContrastContext';
import Form from 'react-bootstrap/Form';

const TextColorInput = () => {
	const { setBackgroundColor } = useContrastApi();
	const { backgroundColor } = useContrastStore();

	return (
		<Form.Group className="d-flex flex-column justify-content-center align-items-center">
			<Form.Label htmlFor="input-background">
				Background Color Picker
			</Form.Label>
			<Form.Control
				type="color"
				id="input-background"
				value={backgroundColor}
				title="Choose background color"
				onChange={(e) => setBackgroundColor(e.target.value)}
			/>
		</Form.Group>
	);
};

export default TextColorInput;
