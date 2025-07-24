import { render, screen } from '@testing-library/react';
import App from '../../App';

describe('App Component', () => {
  it('renders the welcome message', () => {
    render(<App />);
    const welcomeMessage = screen.getByText("Welcome to Unit Testing using Jest");
    expect(welcomeMessage).toBeInTheDocument();
  });
});
