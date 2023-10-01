import { render, screen } from '@testing-library/react';

import Home from '@/pages/index';

describe('Home component', () => {
  it('renders the title', () => {
    render(<Home />);
    const titleElement = screen.getByText(/Create Next App/i);
    expect(titleElement).toBeInTheDocument();
  });

  it('renders the description', () => {
    render(<Home />);
    const descriptionElement = screen.getByText(/Get started by editing/i);
    expect(descriptionElement).toBeInTheDocument();
  });

  // Add more test cases for other functionality
});
