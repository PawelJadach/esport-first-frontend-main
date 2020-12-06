import Layout from '../components/Layout';
import styled from 'styled-components';

import PersonCard from '../components/PersonCard';

import { team } from '../constants/team';

const Wrapper = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	flex-wrap: wrap;
`;

const Title = styled.p`
	text-align: center;
	font-size: 30px;
`;

const Subtitle = styled.small`
	display: block;
	margin: 20px auto;
	text-align: center;
	font-style: italic;
	background-color: ${({ theme }) => theme.colors.primary};
	padding: 10px;
	max-width: 500px;
	letter-spacing: 1.1px;
	border-radius: 10px;
`;

const Header = styled.h2`
	margin-top: 50px;
`;

const TeamPage = () => {
    return (
    	<Layout title='Ekipa Esport First'>
			<Title>Poznaj naszą ekipę</Title>
			{/* <Subtitle>Aby zobaczyć więcej danych o zawodniku kliknij na jego miniaturkę</Subtitle> */}
			<Header>Zarząd</Header>
			<Wrapper>
				{team && team.filter(person => person.type === 'stuff').map(person => <PersonCard person={person} />)}
			</Wrapper>
				<Header>Sim Racing</Header>
			<Wrapper>
				{team && team.filter(person => person.type === 'simRacing').map(person => <PersonCard person={person} />)}
			</Wrapper>
    	</Layout>
    );
};

export default TeamPage
