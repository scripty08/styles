import React, {forwardRef} from 'react';
import '@atlaskit/css-reset';
import './Styles.scss';
import styled from 'styled-components';

export const ContainerFlex = styled.div`
    padding: ${props => (props.layout === 'sized' ? '5px 200px' : '5px')};
    display: flex;
    flex: 1 0 auto;

/* Extra small devices (phones, 600px and down) */
    @media only screen and (max-width: 600px) {
        display: block;
        padding: ${props => (props.layout === 'sized' ? '5px 5px' : '5px')};
        /* For mobile phones: */
        [class*="col-"] {
            width: 100%;
        }
    }

/* Small devices (portrait tablets and large phones, 600px and up) */
    @media only screen and (max-width: 600px) {
        display: block;
        padding: ${props => (props.layout === 'sized' ? '5px 5px' : '5px')};
        /* For mobile phones: */
        [class*="col-"] {
            width: 100%;
        }
    }

/* Medium devices (landscape tablets, 768px and up) */
    @media only screen and (max-width: 768px) {
        display: block;
        padding: ${props => (props.layout === 'sized' ? '5px 5px' : '5px')};
        /* For mobile phones: */
        [class*="col-"] {
            width: 100%;
        }
    }

    /* Medium devices (landscape tablets, 768px and up) */
    @media only screen and (min-width: 768px) {
        padding: ${props => (props.layout === 'sized' ? '5px 20px' : '5px')};
    }

/* Large devices (laptops/desktops, 992px and up) */
    @media only screen and (min-width: 992px) {
        padding: ${props => (props.layout === 'sized' ? '5px 50px' : '5px')};
    }

/* Extra large devices (large laptops and desktops, 1200px and up) */
    @media only screen and (min-width: 1200px) {
        padding: ${props => (props.layout === 'sized' ? '5px 170px' : '5px')};
        /* For mobile phones: */
    }
`;

export const FooterFlex = styled.div`
    padding: ${props => (props.layout === 'sized' ? '5px 200px' : '5px')};
    background-color: ${'#e5e5e5'};
    display: flex;
/* Extra small devices (phones, 600px and down) */
    @media only screen and (max-width: 600px) {
        display: block;
        padding: ${props => (props.layout === 'sized' ? '5px 5px' : '5px')};
        /* For mobile phones: */
        [class*="col-"] {
            width: 100%;
        }
    }

/* Small devices (portrait tablets and large phones, 600px and up) */
    @media only screen and (max-width: 600px) {
        display: block;
        padding: ${props => (props.layout === 'sized' ? '5px 5px' : '5px')};
        /* For mobile phones: */
        [class*="col-"] {
            width: 100%;
        }
    }

/* Medium devices (landscape tablets, 768px and up) */
    @media only screen and (max-width: 768px) {
        display: block;
        padding: ${props => (props.layout === 'sized' ? '5px 5px' : '5px')};
        /* For mobile phones: */
        [class*="col-"] {
            width: 100%;
        }
    }

    /* Medium devices (landscape tablets, 768px and up) */
    @media only screen and (min-width: 768px) {
        padding: ${props => (props.layout === 'sized' ? '5px 20px' : '5px')};
    }

/* Large devices (laptops/desktops, 992px and up) */
    @media only screen and (min-width: 992px) {
        padding: ${props => (props.layout === 'sized' ? '5px 50px' : '5px')};
    }

/* Extra large devices (large laptops and desktops, 1200px and up) */
    @media only screen and (min-width: 1200px) {
        padding: ${props => (props.layout === 'sized' ? '5px 170px' : '5px')};
        /* For mobile phones: */
    }
`;
