import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import Navbar from './Navbar';
import MockLogo, { mockNavItems } from './Navbar.mock';

describe('Navbar', () => {
  it('should render properly with nav item and no search field', async () => {
    render(<Navbar navItems={mockNavItems} />);

    expect(screen.getByText(/Google/i)).toBeVisible();
    expect(screen.getByText(/Reddit/i)).toBeVisible();
    expect(screen.queryByTestId('search')).not.toBeInTheDocument();
  });

  it('should render with a search field', async () => {
    render(<Navbar navItems={mockNavItems} includeSearch />);
    expect(screen.queryByTestId('search')).toBeInTheDocument();
  });

  it('should render with a logo component', async () => {
    render(<Navbar navItems={mockNavItems} logoComponent={<MockLogo />} />);
    expect(screen.queryByTestId('testlogo')).toBeInTheDocument();
  });

  it('should show mobile nav on small screens', () => {
    render(<Navbar navItems={mockNavItems} includeSearch />);
    window.innerWidth = 500;
    fireEvent(window, new Event('resize'));

    expect(screen.getByRole('button')).toBeInTheDocument();
    waitFor(() => expect(screen.getAllByTestId('openicon')).toBeInTheDocument());
    const mobileMenuButton = screen.getByRole('button');
    fireEvent.click(mobileMenuButton);
    waitFor(() => expect(screen.getAllByTestId('closeicon')).toBeInTheDocument());
  });
});
