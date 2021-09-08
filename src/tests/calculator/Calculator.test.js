import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Calculator from '../../components/Calculator';

describe('Calculator App', () => {
  test('It should render all buttons', () => {
    render(<Calculator />);
    const buttons = [
      '1', '2', '3', '4', '5', '6', '7', '8', '9', '0',
      '+', '-', 'X', '÷', '=', 'AC', '+/-', '.', '%',
    ];
    buttons.forEach((btn) => {
      expect(screen.getByText(btn)).toBeInTheDocument();
    });
  });
  test('It should perform calculation', () => {
    render(<Calculator />);
    fireEvent.click(screen.getByText('5'));
    fireEvent.click(screen.getByText('X'));
    fireEvent.click(screen.getByText('9'));
    fireEvent.click(screen.getByText('='));
    expect(screen.getByText('45')).toBeInTheDocument();
  });
});
