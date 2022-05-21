import React from 'react';
import './StatusPanel.scss';
import { useContrastStore } from '../../context/contrast/ContrastContext';
import useContrast from '../../hooks/useContrast';

const StatusPanel = () => {
	const { textColor, backgroundColor } = useContrastStore();
	const { ratioStatus, pass, levelStatus } = useContrast(
		textColor,
		backgroundColor
	);

	return (
		<section className="status-panel">
			{console.log('status')}
			<p>
				Cotrast ratio:{' '}
				<span style={{ color: `${pass ? 'green' : 'red'}` }}>
					{ratioStatus} {levelStatus}
				</span>
			</p>
		</section>
	);
};

export default StatusPanel;
