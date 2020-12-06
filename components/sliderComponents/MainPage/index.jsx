import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';

const Wrapper = styled.div`
	margin-top: 50px;
	width: 100%;
	height: 70vh;
	display: flex !important;
	justify-content: center !important;
	align-items: center !important;
    flex-direction: ${({ imageLeft }) => imageLeft ? 'row' : 'row-reverse'};

	@media (max-width: 1300px) {
		flex-direction: column-reverse;
		margin-bottom: 50px;
		margin-top: 20px;
  	}
`;

const Header = styled.h2`
	font-size: 50px;
	text-align: center;
	letter-spacing: 2px;

	@media (max-width: 1300px) {
		font-size: 30px;
  	}
`;

const Button = styled.a`
    display: block;
    text-decoration: none;
    text-align: center;
    width: 100%;
	border: 5px solid white;
	background-color: transparent;
	padding: 20px 70px;
	border-radius: 67px;
	color: white;
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
`;

const Content = styled.div`
	height: 100%;
	margin: 200px 100px 0;
	display: flex;
	flex-direction: column;
	align-items: flex-start;

	@media (max-width: 1300px) {
		flex-direction: column;
		margin-top: 0;
		height: auto;
		justify-content: center;
		align-items: center;
  	}
`;

const propTypes = {
    img: PropTypes.string,
    alt: PropTypes.string,
    header: PropTypes.string,
    button: PropTypes.string,
    imageLeft: PropTypes.bool,
    href: PropTypes.string,
};

const MainPage = ({ img, alt = 'Alternative text', header, button, href = '/', imageLeft = true }) => {
	return (
		<Wrapper imageLeft={imageLeft}>
			<Content>
				<Header imageLeft={imageLeft}>{header}</Header>
				{button && href && <Link href={href} passHref><Button>{button}</Button></Link>}
			</Content>
			<Image
				src={img}
				alt={alt}
				width={960}
				height={540}
			/>
		</Wrapper>
	);
}

MainPage.propTypes = propTypes;

export default MainPage;