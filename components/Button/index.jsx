import React from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFan } from '@fortawesome/free-solid-svg-icons'

import styled from 'styled-components';

const StyledButton = styled.button`
    display: block;
    text-decoration: none;
    text-align: center;
    width: 100%;
	border: 5px solid ${({ theme }) => theme.colors.textLight};;
	background-color: transparent;
	padding: 20px 70px;
	border-radius: 67px;
	color: ${({ theme }) => theme.colors.textLight};;
	font-size: 20px;
	text-transform: uppercase;
	font-weight: 900;
	transition: .2s;

	&:hover {
		cursor: pointer;
		color: ${({ theme }) => theme.colors.primary};
		border-color: ${({ theme }) => theme.colors.primary};
	}

	@media (max-width: 1300px) {
		font-size: 14px;
		padding: 10px 30px;
  	}

	&:disabled {
		cursor: auto;
		opacity: .6;

		&:hover {
		cursor: auto;
		color: ${({ theme }) => theme.colors.textLight};
		border-color: ${({ theme }) => theme.colors.textLight};
	}
	}
`;

const propTypes = {
    label: PropTypes.string,
    button: PropTypes.string,
    onClick: PropTypes.func,
	isLoading: PropTypes.bool,
};

const Button = ({ label, onClick, type = 'button', isLoading = false, disabled = false }) => {
	return <StyledButton disabled={disabled || isLoading} type={type} onClick={onClick}>{isLoading ? <FontAwesomeIcon icon={faFan} size='1x' className='fa-spin' /> : label}</StyledButton>
};

Button.propTypes = propTypes;

export default Button;