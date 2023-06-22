import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import Card from './Card';

describe('Card', () => {
  it('should render Card with a child element', async () => {
    render(
      <Card>
        <div>Child Component</div>
      </Card>
    );

    expect(screen.getByText('Child Component')).toBeInTheDocument();
  });

  it('should render CardBody with a child element', async () => {
    render(
      <Card.Body>
        <div>Child Component</div>
      </Card.Body>
    );

    expect(screen.getByText('Child Component')).toBeInTheDocument();
  });

  it('should render CardHeader with header text', async () => {
    render(<Card.Header>Labore nostrud</Card.Header>);

    expect(screen.getByText('Labore nostrud')).toBeInTheDocument();
  });

  it('should render CardText with text', async () => {
    render(<Card.Text>Labore nostrud nostrud deserunt nisi.</Card.Text>);

    expect(screen.getByText('Labore nostrud nostrud deserunt nisi.')).toBeInTheDocument();
  });

  it('should render CardImage with alt text and srouce', async () => {
    render(<Card.Image imageSrc="image.jpg" altText="Alt Text" />);

    const imageElement = screen.getByAltText('Alt Text');
    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute('src', 'image.jpg');
  });

  it('should render CardActions with action links', () => {
    const actions = [
      { href: 'link1', label: 'Action 1' },
      { href: 'link2', label: 'Action 2' },
    ];

    render(<Card.Actions actions={actions} />);

    actions.forEach((action) => {
      const linkElement = screen.getByText(action.label);
      expect(linkElement).toBeInTheDocument();
      expect(linkElement).toHaveAttribute('href', action.href);
    });
  });
});
