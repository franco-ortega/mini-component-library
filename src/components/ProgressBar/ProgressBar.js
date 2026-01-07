/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const STYLES = {
	large: {
		'--height': `${24 / 16}rem`,
		'--padding': '4px',
		'--borderRadius': '8px',
	},
	medium: {
		'--height': `${12 / 16}rem`,
		'--borderRadius': '4px',
	},
	small: {
		'--height': `${8 / 16}rem`,
		'--borderRadius': '4px',
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
				aria-valuenow={value}
				style={styles}
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

	&::-webkit-progress-bar,
	&::-moz-progress-bar,
	&::-webkit-progress-value {
		background-color: ${COLORS.primary};
		border-top-left-radius: 4px;
		border-bottom-left-radius: 4px;

		/* round the radius when progress bar is full */
		border-top-right-radius: ${(p) => p.value > 99 && '4px'};
		border-bottom-right-radius: ${(p) => p.value > 99 && '4px'};
	}
`;
