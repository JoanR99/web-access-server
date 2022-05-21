import React from 'react';
import './FailTestDetails.scss';
import { FailDetailCard } from '../';

const FailTestsDetails = ({ failDetails = [] }) => {
	return (
		<div className="grid">
			{failDetails.map((failDetail, i) => {
				return <FailDetailCard key={i} {...failDetail} />;
			})}
		</div>
	);
};

export default FailTestsDetails;
