import Layout from '../components/Layout';
import styled from 'styled-components';
import { news } from '../constants/news';
import Link from 'next/link';

const PageTitle = styled.p`
	text-align: center;
	font-size: 30px;
`;

const Content = styled.div`
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
`;

const News = styled.div`
    margin-top: 50px;
    display: flex;
    width: 100%;
`;

const Title = styled.h3`
    text-transform: uppercase;
    margin-top: 5px;

    @media (max-width: 700px) {
		font-size: 14px;
  	}
`;

const Author = styled.span`
    font-size: 14px;
    letter-spacing: 1.2px;
    font-weight: normal;
`;

const Date = styled.span`

`;

const Image = styled.div`
    position: relative;
	width: 200px;
	height: 200px;
	background-image: ${({ src }) => `url('${src}')`};
	background-position: center;
	background-size: cover;
	background-repeat: no-repeat;
    transition: .3s;
    border-radius: 3px;
`;

const Info = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

const Hr = styled.hr`
    width: 100%;
`;

const Item = styled.a`
    margin-top: auto;
    margin-bottom: 20px;
    font-size: 14px;
    transition: .2s;
    color: ${({ theme }) => theme.colors.light};

    &:hover {
        cursor: pointer;
        letter-spacing: 1.1px;
    }
`;


const NewsPage = () => {
    return (
    	<Layout title='Newsy'>
      	    <PageTitle>Nowości</PageTitle>
            <Content>
                {news.map(item =>
                    <News key={item.id}>
                        <Image src={item.img} />
                        <Info>
                            <Author>{item.author}<Date> {item.date.toLocaleDateString()}</Date></Author>
                            <Hr />
                            <Title>{item.title}</Title>
                            <Link href={`/nowosci/${item.id}`}><Item>Czytaj więcej</Item></Link>
                        </Info>
                    </News>
                )}
            </Content>
    	</Layout>
    );
};

export default NewsPage
