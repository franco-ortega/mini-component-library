/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {
	large: {
		height: `${24 / 16}rem`,
	},
	medium: {
		height: `${12 / 16}rem`,
	},
	small: {
		height: `${8 / 16}rem`,
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
	width: 370px;

	&::-moz-progress-bar {
		background-color: ${COLORS.primary};
	}

	&::-webkit-progress-value {
		background-color: ${COLORS.primary};
	}

	&::-webkit-progress-bar {
		background-color: ${COLORS.transparentGray15};
	}
`;
