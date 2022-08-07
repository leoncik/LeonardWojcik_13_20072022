import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Home from '../pages/Home/Home';

// Todo : remove skip after implementing Redux tests.

describe('Testing user name display', () => {
    it.skip('should display a greeting message.', () => {
        render(<Home />);
        const heroText = screen.getByText(
            'Open a savings account with Argent Bank today!'
        );
        const featureItemText = screen.getByText(
            'More savings means higher rates'
        );
        expect(heroText).toBeDefined;
        expect(featureItemText).toBeDefined;
    });
});
