import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

import { menuItems } from '../../constants/menuItems';

import styled from 'styled-components';

const Container = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    transform: ${({ isOpen }) => isOpen ? 'translateX(0)' : 'translateX(-100%)'};
    z-index: 1;
    background-image: url('background.jpg');
    background-size: cover;
    background-position: bottom;
    background-repeat: no-repeat;
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    transition: transform 0.3s ease-in-out;
`;

const Item = styled.a`
    margin-top: 20px;
    font-size: 25px;
    transition: .2s;

    &:hover {
        cursor: pointer;
        letter-spacing: 1.2px;
    }
`;

const propTypes = {
    isOpen: PropTypes.bool,
};

const Menu = ({ isOpen }) => {
    return (
        <Container isOpen={isOpen}>
            {menuItems.map(item => <MenuItem key={item.id} href={item.href} label={item.label} />)}
        </Container>
    );
};

const MenuItem = ({ href, label }) => <Link href={href}><Item>{label}</Item></Link>;

Menu.propTypes = propTypes;

export default Menu;