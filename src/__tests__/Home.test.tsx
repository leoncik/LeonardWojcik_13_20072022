import { screen } from '@testing-library/react';
import { render } from './customRender';
import { describe, it, expect } from 'vitest';
import Home from '../pages/Home/Home';

describe('Testing render of home component', () => {
    it('should display a greeting message.', () => {
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
