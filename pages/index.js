import Slider from "react-slick";

import Layout from '../components/Layout';
import Slide from '../components/sliderComponents/MainPage';

import { mainCarouselItems } from '../constants/mainCarouselItems';

const IndexPage = () => {
	const sliderSettings = {
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
      	    <Slider {...sliderSettings}>
				{mainCarouselItems.map(item => <Slide key={item.id} {...item} />)}
			</Slider>
    	</Layout>
    );
};

export default IndexPage
