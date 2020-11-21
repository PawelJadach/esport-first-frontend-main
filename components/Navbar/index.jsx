import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Logo from '../Logo';
import Menu from '../Menu';


const Container = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 40px;
`;

const StyledBurger = styled.button`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 2rem;
    height: 2rem;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
    z-index: 10;

    &:focus {
        outline: none;
    }

    div {
        width: 2rem;
        height: 0.25rem;
        background-color: ${({ theme }) => theme.colors.textLight};
        border-radius: 10px;
        transition: all 0.3s linear;
        position: relative;
        transform-origin: 1px;

        :first-child {
            transform: ${({ isOpen }) => isOpen ? 'rotate(45deg)' : 'rotate(0)'};
        }

        :nth-child(2) {
            opacity: ${({ isOpen }) => isOpen ? '0' : '1'};
            transform: ${({ isOpen }) => isOpen ? 'translateX(20px)' : 'translateX(0)'};
        }

        :nth-child(3) {
            transform: ${({ isOpen }) => isOpen ? 'rotate(-45deg)' : 'rotate(0)'};
        }
    }
`;

const propTypes = {
    props: PropTypes.object,
};

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(prevState => !prevState);
    };

    return (
        <Container>
            <Logo />
            <Menu isOpen={isOpen} />
            <StyledBurger onClick={toggleMenu} isOpen={isOpen}>
                <div />
                <div />
                <div />
            </StyledBurger>
        </Container>
    );
};

Navbar.propTypes = propTypes;

export default Navbar;