import styled from 'styled-components';
import Image from 'next/image'
import Slider from "react-slick";

import Layout from '../components/Layout';

import { mainCarouselItems } from '../constants/mainCarouselItems';

const Wrapper = styled.div`
	width: 100%;
	height: 70vh;
	display: flex !important;
	justify-content: center !important;
	align-items: center !important;
	flex-direction: ${({ imageLeft }) => imageLeft ? 'row' : 'row-reverse'};

	@media (max-width: 1000px) {
		flex-direction: column-reverse;
		margin-bottom: 50px;
  	}
`;

const Header = styled.h2`
	font-size: 50px;
	text-align: center;
	letter-spacing: 2px;

	@media (max-width: 1000px) {
		font-size: 30px;
  	}
`;

const Button = styled.button`
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

	@media (max-width: 1000px) {
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

	@media (max-width: 1000px) {
		flex-direction: column;
		margin-top: 0;
		height: auto;
		justify-content: center;
		align-items: center;
  	}
`;

const IndexPage = () => {
	const settings = {
		dots: false,
		arrows: false,
		infinite: true,
		autoplay: true,
		speed: 1000,
		autoplaySpeed: 6000,
		draggable: false,
		pauseOnHover: false,
	};

    return (
    	<Layout title='Strona główna'>
      	    <Slider {...settings}>
				{mainCarouselItems.map(item => <Slide key={item.id} {...item} />)}
			</Slider>
    	</Layout>
    );
};

const Slide = ({ img, alt, header, button, imageLeft = true }) => {
	return (
		<Wrapper imageLeft={imageLeft}>
			<Content>
				<Header imageLeft={imageLeft}>{header}</Header>
				<Button onClick={() => console.log(button)}>{button}</Button>
			</Content>
			<Image
				src={img || "/1.png"}
				alt={alt}
				width={960}
				height={540}
			/>
		</Wrapper>
	);
}

export default IndexPage
