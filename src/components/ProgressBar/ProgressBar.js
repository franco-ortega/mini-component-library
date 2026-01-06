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
		<ProgressWrapper htmlFor='progress-bar'>
			<Progress
				id={'progress-bar'}
				aria-valuenow={value}
				style={styles}
				value={value}
				max={100}
			/>
			<VisuallyHidden>{value} percent complete</VisuallyHidden>
		</ProgressWrapper>
	);
};

export default ProgressBar;

const ProgressWrapper = styled.label`
	// background-color: red;
`;

const Progress = styled.progress`
	background-color: ${COLORS.transparentGray15};
	border-radius: var(--borderRadius);
	height: var(--height);
	width: 370px;
	padding: var(--padding);
	box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};

	&::-webkit-progress-bar {
		background-color: transparent;
	}

	&::-moz-progress-bar {
		background-color: ${COLORS.primary};
		border-top-left-radius: 4px;
		border-bottom-left-radius: 4px;
		border-radius: ${(p) => p.value > 99 && '4px'};
	}

	&::-webkit-progress-value {
		background-color: ${COLORS.primary};
		border-top-left-radius: 4px;
		border-bottom-left-radius: 4px;
		border-radius: ${(p) => p.value > 99 && '4px'};
	}
`;
