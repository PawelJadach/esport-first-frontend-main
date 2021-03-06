import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import styled from 'styled-components';

import Navbar from '../Navbar';

import { childrenPropTypes } from '../../propTypes';

const Container = styled.div`
    background-image: url('background.jpg');
    background-size: cover;
    background-position: bottom;
    background-repeat: no-repeat;
    height: 100vh;
    width: 100vw;
    overflow: auto;
`;

const BodyWrapper = styled.div`
    width: 100%;
    margin: 0 auto;
    overflow: auto;
    padding: 100px;

    @media (max-width: 1300px) {
		padding: 100px 20px;
  	}
`;

const propTypes = {
    children: childrenPropTypes,
    title: PropTypes.string,
};

const Layout = ({ children, title }) => {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <Container>
                <Navbar />
                <BodyWrapper>
                    {children}
                </BodyWrapper>
            </Container>
        </>
    );
};

Layout.propTypes = propTypes;

export default Layout;