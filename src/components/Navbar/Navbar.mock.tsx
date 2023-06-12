export const mockNavItems = [
  {
    href: 'https://google.com',
    name: 'Google',
    current: false,
  },
  {
    href: 'https://reddit.com',
    name: 'Reddit',
    current: true,
  },
];

function MockLogo() {
  return (
    <a href="/" data-testid="testlogo">
      <img src="https://placehold.co/150x50" alt="test logo" />
    </a>
  );
}

export default MockLogo;
