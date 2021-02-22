import Layout from '../components/Layout';
import styled from 'styled-components';
import { useState } from 'react';
import Button from '../components/Button';
import InputText from '../components/InputText';
import axios from 'axios';
const config = require('../.config');

const Title = styled.p`
	text-align: center;
	font-size: 30px;
`;

const Content = styled.p`
	text-align: center;
	font-size: 14px;
    margin-top: 10px;
`;

const Form = styled.form`
    max-width: 400px;
    margin: 40px auto;
    text-align: center;
`;

const Error = styled.p`
    margin: 20px 0;
    color: ${({ theme }) => theme.colors.error};
`;

const Success = styled.p`
    margin: 20px 0;
    color: ${({ theme }) => theme.colors.success};
`;

const NewsletterPage = () => {
    const [email, setEmail] = useState('');
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const handleSubmit = async (e) => {
        setIsLoading(true);
        e.preventDefault();

        try {
            const res = await axios.post(`${config.BASE_URL_SERVER}/newsletters/add`, { email })

            if(res?.data?.success) setSuccess('Na podany email zostałą wysłana prośba o potwierdzenie');
            setIsLoading(false);
        } catch (error) {
            setError('Coś poszło nie tak!');
            setIsLoading(false);
        }
    };

    const handleChange = value => {
        setEmail(value);
        if(error) setError(null);
        if(success) setSuccess(null);
    };

    return (
    	<Layout title='Newsletter'>
      	    <Title>Zapisz się do newslettera</Title>
            <Content>Aby dostawać najważniejsze informacje na maila!</Content>
            <Form onSubmit={handleSubmit}>
                <InputText placeholder='Email' changeValue={handleChange} value={email} type='email' required />
                <Button isLoading={isLoading} type='submit' label='ZAPISZ MNIE' />
                {error && <Error>{error}</Error>}
                {success && <Success>{success}</Success>}
            </Form>
    	</Layout>
    );
};

export default NewsletterPage;
