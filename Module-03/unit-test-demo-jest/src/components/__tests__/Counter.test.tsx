import { fireEvent, render, screen } from '@testing-library/react';
import Counter from '../Counter';

describe('Counter Component', () => {
  it('displays the initial count', () => {
    render(<Counter />);    
    expect(screen.getByTestId('count-value')).toHaveTextContent('Count: 0')
  });

  it('increments count when button is clicked', () => {
    render(<Counter />); 
    const button = screen.getByText('Increment') 
    fireEvent.click(button) 
    expect(screen.getByTestId('count-value')).toHaveTextContent('Count: 1')
    fireEvent.click(button) 
    expect(screen.getByTestId('count-value')).toHaveTextContent('Count: 2')
  });
});