import Layout from '../components/Layout';
import styled from 'styled-components';
import { useState } from 'react';
import Button from '../components/Button';
import InputText from '../components/InputText';
import axios from 'axios';
import InputTextarea from '../components/Textarea';
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

const ContactPage = () => {
	const [email, setEmail] = useState('');
	const [name, setName] = useState('');
	const [content, setContent] = useState('');
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await axios.post(`${config.BASE_URL_SERVER}/newsletters/add`, { email })

            return res;
        } catch (error) {

        }
    };

    return (
    	<Layout title='Kontakt'>
      	    <Title>Napisz do nas</Title>
            <Content>Jeśli masz jakieś pytania chętnie na nie odpowiemy!</Content>
            <Form onSubmit={handleSubmit}>
                <InputText placeholder='Email' changeValue={setEmail} value={email} type='email' required />
                <InputText placeholder='Imię' changeValue={setName} value={name} type='text' required />
                <InputTextarea placeholder='Treść' changeValue={setContent} value={content} required />
                <Button disabled={true} type='submit' label='KONTAKT CHWILOWO WYŁĄCZONY' />
            </Form>
    	</Layout>
    );
};

export default ContactPage
