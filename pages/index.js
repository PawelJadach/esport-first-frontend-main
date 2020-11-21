import styled from 'styled-components';
import Image from 'next/image'
import Slider from "react-slick";

import Layout from '../components/Layout';

const Wrapper = styled.div`
	width: 100%;
	height: 70vh;
	display: flex !important;
	justify-content: center !important;
	align-items: center !important;
`;

const IndexPage = () => {
	const settings = {
		dots: false,
		arrows: true,
		infinite: true,
		autoplay: true,
		speed: 2000,
		autoplaySpeed: 4000,
		draggable: false,
		pauseOnHover: true,
		fade: true,
	};

    return (
    	<Layout title='Strona główna'>
      	    <Slider {...settings}>
				<Wrapper>
					<Image
						src="/1.png"
						alt="Picture of the author"
						width={640}
						height={360}
					/>
					<h2>PRAWDZIWE EMOCJE</h2>
				</Wrapper>
				<Wrapper>
					<h2>PRAWDZIWE EMOCJE</h2>
					<Image
						src="/1.png"
						alt="Picture of the author"
						width={640}
						height={360}
					/>
				</Wrapper>
				<Wrapper>
					<Image
						src="/1.png"
						alt="Picture of the author"
						width={640}
						height={360}
					/>
					<h2>PRAWDZIWE EMOCJE</h2>
				</Wrapper>
				<Wrapper>
					<h2>PRAWDZIWE EMOCJE</h2>
					<Image
						src="/1.png"
						alt="Picture of the author"
						width={640}
						height={360}
					/>
				</Wrapper>
			</Slider>
    	</Layout>
    );
};

export default IndexPage
