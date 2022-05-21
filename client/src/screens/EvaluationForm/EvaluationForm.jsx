import React, { useState } from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import { CodeForm, UrlForm } from '../../components';

const AccessibilityEvaluationForm = () => {
	const [key, setKey] = useState('url');
	console.log('form');

	return (
		<>
			<Tabs
				id="controlled-tab-example"
				activeKey={key}
				onSelect={(k) => setKey(k)}
				className="mb-3"
			>
				<Tab eventKey="url" title="URL">
					<UrlForm />
				</Tab>
				<Tab eventKey="code" title="Code">
					<CodeForm />
				</Tab>
			</Tabs>
		</>
	);
};

export default AccessibilityEvaluationForm;
