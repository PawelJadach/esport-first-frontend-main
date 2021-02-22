import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

const Input = styled.input`
	margin-bottom: 30px;
	margin-top: 10px;
    font-family: inherit;
	width: 100%;
	border: 0;
	border-bottom: 3px solid white;
	padding: 7px 0;
	transition: border-color 0.2s;
	color: white;
	background-color: transparent;

	&::placeholder {
		font-size: 14px;
		font-weight: bold;
	}
`;

const Label = styled.span`
	font-size: 13px;
	margin-bottom: 10px;
`;

const Wrapper = styled.div`
	text-align: left;
`;

const propTypes = {
    label: PropTypes.string,
    button: PropTypes.string,
    onClick: PropTypes.func,
};

const InputText = ({ label, changeValue, value, type = 'text', required, placeholder }) => {
	return (
		<Wrapper>
			{label && <Label>{label}</Label>}
			<Input required={required} placeholder={placeholder} type={type} value={value} onChange={e => changeValue(e.target.value)} />
		</Wrapper>
	)
};

InputText.propTypes = propTypes;

export default InputText;