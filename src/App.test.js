import { render, screen } from '@testing-library/react';
import App from './App';

describe('header area', () => {
  beforeEach(() => {
    render(<App />);
  });
  it('renders page with specific elements', () => {
    const nameOfSiteOwner = screen.getByText(/david raxa/i);
    const siteTitle = screen.getByText(/Design Portfolio/i);
    expect(nameOfSiteOwner).toBeInTheDocument();
    expect(siteTitle).toBeInTheDocument();
  });

  it('renders page links', () => {
    expect(screen.getByTestId('link-to-pages')).toBeInTheDocument();
    
  });
})
