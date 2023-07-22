import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import Image from './Image';
import ImageMock from './Image.mock';

describe('Image', () => {
  /* eslint-disable react/jsx-props-no-spreading */

  it('should render the Image component', () => {
    render(<Image {...ImageMock} />);
    expect(screen.getByAltText('Image Test')).toBeInTheDocument();
  });

  it('should show a loading animation while image loads', async () => {
    const rendered = render(<Image {...ImageMock} src="https://placehold.co/4000" />);
    const imgEl = await rendered.container.querySelector('img');

    expect(screen.getByText('Loading')).toBeInTheDocument();
    expect(imgEl).toHaveClass('hidden');
  });

  it('should include a rounded class when isRounded is true', async () => {
    const rendered = render(<Image {...ImageMock} isRounded />);
    const imgEl = await rendered.container.querySelector('img');

    expect(imgEl).toHaveClass('rounded-full');
  });

  it('should include passed classNames', async () => {
    const rendered = render(<Image {...ImageMock} classNames="foo bar" isRounded />);
    const imgEl = await rendered.container.querySelector('img');

    expect(imgEl).toHaveClass('foo bar');
  });
});
