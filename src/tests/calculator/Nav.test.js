import { render, screen } from '@testing-library/react';
import Nav from '../../components/Nav';

describe('Test Navbar', () => {
  beforeEach(() => {
    render(<Nav />);
  });
  test('It should have link to home page', () => {
    expect(screen.getByText(/Home/i));
  });
  test('It should have link to calculator page', () => {
    expect(screen.getByText(/Calculator/i));
  });
  test('It should have link to home page', () => {
    expect(screen.getByText(/Quotes/i));
  });
});
