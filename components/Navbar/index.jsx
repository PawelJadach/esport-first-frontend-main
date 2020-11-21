import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 40px;
`;

const propTypes = {
    props: PropTypes.object,
};

const Navbar = () => {
    return (
        <Container>
            <div>ESPORT FIRST</div>
            <div>hamburger</div>
        </Container>
    );
};

Navbar.propTypes = propTypes;

export default Navbar;