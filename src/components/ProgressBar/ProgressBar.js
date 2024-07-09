/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {
	large: {
		'--height': `${24 / 16}rem`,
		padding: '4px',
	},
	medium: {
		'--height': `${12 / 16}rem`,
	},
	small: {
		'--height': `${8 / 16}rem`,
	},
};

const ProgressBar = ({ value, size }) => {
	const styles = SIZES[size];

	return (
		<>
			<ProgressWrapper htmlFor='progress-bar'>
				<Progress id={'progress-bar'} style={styles} value={value} max={100} />
			</ProgressWrapper>
		</>
	);
};

export default ProgressBar;

const ProgressWrapper = styled.label``;

const Progress = styled.progress`
	background-color: ${COLORS.transparentGray15};
	border-radius: 4px;
	height: var(--height);
	width: 370px;

	&::-webkit-progress-bar {
		background-color: transparent;
	}

	&::-moz-progress-bar {
		background-color: ${COLORS.primary};
		border-top-left-radius: inherit;
		border-bottom-left-radius: inherit;
	}

	&::-webkit-progress-value {
		background-color: ${COLORS.primary};
		border-top-left-radius: 4px;
		border-bottom-left-radius: 4px;
	}
`;

// border-top-right-radius: ${(p) => p.value === 100 && '4px'};
