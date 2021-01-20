import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

const Container = styled.div`
	margin-top: 50px;
	width: 30%;
	display: flex;
	flex-direction: column;
	padding: 20px;
    text-align: center;
    position: relative;

	@media (max-width: 1000px) {
		width: 30%;
  	}

	@media (max-width: 700px) {
		width: 45%;
  	}

	  @media (max-width: 500px) {
		width: 90%;
  	}


`;

const StyledImage = styled.div`
	width: 100%;
    height: 200px;
	background-image: ${({ src }) => `url('${src}')`};
	background-position: center;
	background-size: cover;
	background-repeat: no-repeat;
    transition: .3s;
    border-radius: 3px;
    opacity: 0.5;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
        cursor: pointer;
        background-blend-mode: soft-light;
        background-color: ${({ theme, color }) => {
            switch(color){
                case 'grey': return theme.colors.grey;
                case 'primary': return theme.colors.primary;
                case 'blue': return theme.colors.facebookColor;
                default: return theme.colors.primary;
            }
        }};
    }
`;

const Title = styled.p`
	margin-top: 20px;
	font-size: 16px;
	font-weight: 500;
    font-style: italic;

`;

const Subtitle = styled.p`
	font-weight: 900;
	text-transform: uppercase;
	font-size: 20px;
	color: ${({ theme }) => theme.colors.primary};
	background-color: ${({ theme }) => theme.colors.dark};
	padding: 5px 10px;
	border-radius: 10px;
    transition: .3s;
`;

const Header = styled.p`
	position: absolute;
	top: -40px;
	left: 0;
	right: 0;
	text-transform: uppercase;
	font-size: 12px;
	margin-top: 10px;
	letter-spacing: 3px;
	background-color: ${({ theme, color }) => {
        switch(color){
            case 'grey': return theme.colors.grey;
            case 'primary': return theme.colors.primary;
            case 'blue': return theme.colors.facebookColor;
            default: return theme.colors.primary;
        }
    }};
	padding: 5px;
	border-radius: 3px;
    text-align: center;
`;

const Logo = styled.img`
    position: absolute;
    z-index: 1;
    max-width: 150px;
    top: 35%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

const Subsubtitle = styled.a`
	text-transform: uppercase;
	font-size: 14px;
	background-color: ${({ theme }) => theme.colors.dark};
    color: ${({ theme }) => theme.colors.textLight};
    text-decoration: none;
	border-radius: 10px;
    transition: .3s;

    &:hover {
        opacity: 0.6;
        cursor: pointer;
    }
`;

const CalendarItem = ({ header, color, background, title, subtitle, logo, subsubtitle, link , onImageClick = null}) => {
    return (
        <Container color={color}>
            <Header color={color}>{header}</Header>
                {logo && <Logo src={logo} />}
            <StyledImage onClick={onImageClick} src={background} color={color} >
            </StyledImage>
            {title && <Title>{title}</Title>}
            {subtitle && <Subtitle>{subtitle}</Subtitle>}
            {subsubtitle && link  && <Subsubtitle href={link} target='_blank' rel='noopener noreferrer'>{subsubtitle}</Subsubtitle>}
        </Container>
    );
};

CalendarItem.propTypes = {
    header: PropTypes.string,
    color: PropTypes.string,
    background: PropTypes.string,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    logo: PropTypes.string,
    subsubtitle: PropTypes.string,
    link: PropTypes.string,
    onImageClick: PropTypes.func,
};

export default CalendarItem;