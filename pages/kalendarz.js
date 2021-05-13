import Layout from '../components/Layout';
import styled from 'styled-components';

import { events } from '../constants/calendar';
import CalendarItem from '../components/CalendarItem';

const Wrapper = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	flex-wrap: wrap;
`;

const Title = styled.p`
	text-align: center;
	font-size: 30px;
	margin-bottom: 40px;
`;

const CalendarPage = () => {
	const sortedByDateEvents = events.sort((a, b) => a.date.getTime() - b.date.getTime());

	const nextRaceIndex = sortedByDateEvents.findIndex(event => event.date.getTime() > new Date().getTime());

	const openInNewTab = link => () => {
		window.open(link, '_blank');
	};

	return (
    	<Layout title='Kalendarz wyścigów'>
			<Title>Najbliższe występy</Title>
      	    <Wrapper>
				<CalendarItem
					header='Ostatni wyścig'
					color='grey'
					background={events[nextRaceIndex - 1]?.track.image}
					title={events[nextRaceIndex - 1]?.track.name}
					subtitle={events[nextRaceIndex - 1]?.date.toLocaleDateString()}
					logo={events[nextRaceIndex - 1]?.league.logo}
					subsubtitle={events[nextRaceIndex - 1]?.league.name}
					link={events[nextRaceIndex - 1]?.link}
					onImageClick={openInNewTab(events[nextRaceIndex - 1]?.link)}
				/>
				<CalendarItem
					header='Najbliższy wyścig'
					color='primary'
					background={events[nextRaceIndex]?.track.image}
					title={events[nextRaceIndex]?.track.name}
					subtitle={events[nextRaceIndex]?.date.toLocaleDateString()}
					logo={events[nextRaceIndex]?.league.logo}
					subsubtitle={events[nextRaceIndex]?.league.name}
					link={events[nextRaceIndex]?.link}
					onImageClick={openInNewTab(events[nextRaceIndex]?.link)}
				/>
				{events[nextRaceIndex + 1] &&
					<CalendarItem
						header='Kolejny wyścig'
						color='blue'
						background={events[nextRaceIndex + 1]?.track.image}
						title={events[nextRaceIndex + 1]?.track.name}
						subtitle={events[nextRaceIndex + 1]?.date.toLocaleDateString()}
						logo={events[nextRaceIndex + 1]?.league.logo}
						subsubtitle={events[nextRaceIndex + 1]?.league.name}
						link={events[nextRaceIndex + 1]?.link}
						onImageClick={openInNewTab(events[nextRaceIndex + 1]?.link)}
					/>
				}
			</Wrapper>
    	</Layout>
    );
};

export default CalendarPage
