import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

const Container = styled.div`
	margin-top: 30px;
	width: 24%;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	flex-direction: column;
	padding: 20px;

	@media (max-width: 1000px) {
		width: 30%;
  	}

	@media (max-width: 700px) {
		width: 45%;
  	}

	  @media (max-width: 500px) {
		width: 90%;
  	}

    &:hover {
        cursor: pointer;
    }

    &:hover > div {
        background-color: ${({ theme, role }) => {
        switch(role){
            case 'Social media': return theme.colors.facebookColor;
            case 'Sim Racing': return theme.colors.simracing;
            default: return theme.colors.primary;
        }
    }};
        background-blend-mode: soft-light;
    }

    &:hover > p:nth-of-type(2) {
        letter-spacing: 2px;
    }
`;

const StyledImage = styled.div`
	position: relative;
	width: 200px;
	height: 300px;
	background-image: ${({ src }) => `url('${src}')`};
	background-position: center;
	background-size: cover;
	background-repeat: no-repeat;
    transition: .3s;
    border-radius: 3px;
`;

const Name = styled.p`
	margin-top: 20px;
	font-size: 20px;
	font-weight: 500;
    font-style: italic;
`;

const Surname = styled.p`
	font-weight: 500;
	margin-left: 3px;
	font-size: 20px;
    font-style: italic;
`;

const Nick = styled.p`
	font-weight: 900;
	text-transform: uppercase;
	font-size: 30px;
	color: ${({ theme }) => theme.colors.primary};
	background-color: ${({ theme }) => theme.colors.dark};
	padding: 5px 10px;
	border-radius: 10px;
    transition: .3s;
`;

const Role = styled.p`
	position: absolute;
	top: -40px;
	left: 0;
	right: 0;
	text-transform: uppercase;
	font-size: 14px;
	margin-top: 10px;
	letter-spacing: 3px;
	background-color: ${({ theme, role }) => {
        switch(role){
            case 'Social media': return theme.colors.facebookColor;
            case 'Sim Racing': return theme.colors.simracing;
            default: return theme.colors.primary;
        }
    }};
	padding: 5px;
	border-radius: 3px;
    text-align: center;
`;

const PersonCard = ({ person }) => {
    const { role, img, name, nick, surname } = person;
    return (
        <Container role={role}>
            <StyledImage src={img} role={role}>
                <Role role={role}>{role}</Role>
            </StyledImage>
            <Name>{name}</Name>
            {nick && <Nick>{nick}</Nick>}
            <Surname>{surname}</Surname>
        </Container>
    );
};

PersonCard.propTypes = {
    person: PropTypes.shape({
        id: PropTypes.number,
        img: PropTypes.string,
        role: PropTypes.string,
        name: PropTypes.string,
        surname: PropTypes.string,
        nick: PropTypes.string,
    }),
};

export default PersonCard;