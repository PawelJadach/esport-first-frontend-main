import React, { useState } from 'react';
import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';


const Container = styled.div`
    position: fixed;
    bottom: 40px;
    left: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    svg {
        margin: 7px;
        transition: .2s;

        &:hover {
            cursor: pointer;
            color: ${({ theme }) => theme.colors.dark};
        }
    }

    @media (max-width: 1000px) {
		bottom: 10px;
        left: 10px;
  	}
`;

const Link = styled.a`
    color: ${({ theme }) => theme.colors.textLight};
`;

const Socials = () => {
    return (
        <Container>
            <Link href='https://www.facebook.com/EsportF1rst' target='_blank' rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebook} size='2x' /></Link>
            <Link href='https://www.instagram.com/esportfirst/' target='_blank' rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} size='2x' /></Link>
        </Container>
    );
};

export default Socials;