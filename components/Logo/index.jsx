import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

import styled from 'styled-components';

const Container = styled.a`
    &:hover span {
        cursor: pointer;
        letter-spacing: 1.2px;
    }
`;

const StyledLogo = styled.span`
    transition: .3s;
    font-weight: 900;
    color: ${({ green, theme }) => green ? theme.colors.primary : theme.colors.textLight};
`;

const propTypes = {
    props: PropTypes.object,
};

const Logo = () => {
    return (
        <Link href='/'>
            <Container>
                <StyledLogo>ESPORT </StyledLogo>
                <StyledLogo green>FIRST</StyledLogo>
            </Container>
        </Link>
    );
};

Logo.propTypes = propTypes;

export default Logo;