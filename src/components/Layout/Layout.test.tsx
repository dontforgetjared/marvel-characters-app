import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import Page from './Page';
import Main from './Main';
import Grid from './Grid';

describe('Layout', () => {
  it('should render a Page component', () => {
    render(<Page>Child</Page>);

    expect(screen.getByText(/Child/i)).toBeInTheDocument();
  });

  it('should render a Main component', () => {
    render(<Main>Child</Main>);

    expect(screen.getByText(/Child/i)).toBeInTheDocument();
  });

  it('should render a Grid component', () => {
    render(<Grid>Child</Grid>);

    expect(screen.getByText(/Child/i)).toBeInTheDocument();
  });
});
