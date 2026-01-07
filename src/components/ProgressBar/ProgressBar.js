/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const STYLES = {
	large: {
		height: '24px',
		padding: '4px',
		borderRadius: '8px',
		leftRadius: '4px',
	},
	medium: {
		height: '12px',
		borderRadius: '4px',
		leftRadius: '2px',
	},
	small: {
		height: '8px',
		borderRadius: '4px',
		leftRadius: '2px',
	},
};

const ProgressBar = ({ value, size }) => {
	const styles = STYLES[size];

	if (!styles)
		throw new Error(`Oops! Unknown size passed to progress bar: ${size}`);

	return (
		<label htmlFor='progress-bar'>
			<Progress
				id={'progress-bar'}
				role='progressbar'
				aria-valuenow={value}
				aria-valuemin='0'
				aria-valuemax='100'
				style={{
					'--height': styles.height,
					'--padding': styles.padding,
					'--borderRadius': styles.borderRadius,
					'--leftRadius': styles.leftRadius,
				}}
				value={value}
				max={100}
			/>
			<VisuallyHidden>{value} percent complete</VisuallyHidden>
		</label>
	);
};

export default ProgressBar;

const Progress = styled.progress`
	background-color: ${COLORS.transparentGray15};
	border-radius: var(--borderRadius);
	height: var(--height);
	width: 370px;
	padding: var(--padding);
	box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
	-webkit-appearance: none;

	&::-webkit-progress-bar,
	&::-moz-progress-bar,
	&::-webkit-progress-value {
		background-color: ${COLORS.primary};
		border-top-left-radius: var(--leftRadius);
		border-bottom-left-radius: var(--leftRadius);

		/* round the radius when progress bar is full */
		border-top-right-radius: ${(p) => p.value > 99 && 'var(--leftRadius)'};
		border-bottom-right-radius: ${(p) => p.value > 99 && 'var(--leftRadius)'};
	}
`;
