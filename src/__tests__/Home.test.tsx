import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Home from '../pages/Home/Home';

describe('Testing user name display', () => {
    it('should display a greeting message.', () => {
        render(<Home />);
        const greeting = screen.getByText("Bienvenue sur la page d'accueil !");
        expect(greeting).toBeDefined;
    });
});
