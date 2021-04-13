import Layout from '../components/Layout';
import styled from 'styled-components';
import { achivements } from '../constants/achivements';

const PageTitle = styled.p`
	text-align: center;
	font-size: 30px;
`;

const Content = styled.div`
    margin-top: 30px;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
`;

const Achivement = styled.div`
    margin: 30px;
    width: 400px;
    max-width: 90vw;
    text-align: center;

    @media (max-width: 600px) {
		margin: 30px 10px;
  	}
`;

const Title = styled.h3`
    text-transform: uppercase;
`;

const Subtitle = styled.p`
    text-transform: uppercase;
    font-size: 15px;
    color: ${({ theme }) => theme.colors.primary};
    margin-top: 20px;
    font-weight: bold;
`;

const List = styled.ul`
    list-style: none;
    padding: 0;
`;

const ListItem = styled.li`
    margin-top: 5px;
    font-weight: normal;
    letter-spacing: 1.2px;
`;

const AchivementsPage = () => {
    return (
    	<Layout title='Osiągnięcia'>
      	    <PageTitle>Nasze osiągnięcia</PageTitle>
            <Content>
                {achivements.map(achivement =>
                    <Achivement key={achivement.id}>
                        <hr />
                            <Title>{achivement.title}</Title>
                        <hr />
                        {achivement?.team?.length > 0 && (
                            <>
                                <Subtitle>Osiągnięcia drużynowe</Subtitle>
                                <List>
                                    {achivement?.team?.map((item, index) => <ListItem key={`achivement-${achivement.id}-team-${index}`}>{item}</ListItem>)}
                                </List>
                            </>
                        )}
                        {achivement?.solo?.length > 0 && (
                            <>
                                <Subtitle>Osiągnięcia indywidulane</Subtitle>
                                <List>
                                    {achivement?.solo?.map((item, index) => <ListItem key={`achivement-${achivement.id}-solo-${index}`}>{item}</ListItem>)}
                                </List>
                            </>
                        )}
                    </Achivement>
                )}
            </Content>
    	</Layout>
    );
};

export default AchivementsPage
