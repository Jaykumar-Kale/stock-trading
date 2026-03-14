import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Hero from '../landing_page/home/Hero';

import '@testing-library/jest-dom';

//test Suite

//Test Cases for the multiple Features of Hero Component
describe('Hero Component', () => {
    //Test Case to check if Hero Component Renders without crashing
    test('renders Hero Image', () => {
        render(
            <BrowserRouter>
                <Hero />
            </BrowserRouter>
        );
        const heroImage = screen.getByAltText('HeroImage');
        expect(heroImage).toBeInTheDocument();
        expect(heroImage).toHaveAttribute('src', 'media/images/homeHero.png');
    });

    test('renders heading text', () => {
        render(
            <BrowserRouter>
                <Hero />
            </BrowserRouter>
        );
        expect(screen.getByText('Invest in everything')).toBeInTheDocument();
    });

    test('renders description text', () => {
        render(
            <BrowserRouter>
                <Hero />
            </BrowserRouter>
        );
        expect(screen.getByText(/Online platform to invest/i)).toBeInTheDocument();
    });
})