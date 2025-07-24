import { fireEvent, render, screen } from '@testing-library/react';
import LoginForm from '../LoginForm';

describe('LoginForm Component', () => {
  it('allows the user to input email and password', () => {
    render(<LoginForm onSubmit={()=>{}}/>);    
    const emailInput = screen.getByTestId('email-input')
    const passwordInput = screen.getByTestId('password-input')

    fireEvent.change(emailInput, {target: {value: 'test@email.com'}})
    fireEvent.change(passwordInput, {target: {value: 'password123'}})

    expect(emailInput).toHaveValue('test@email.com')
    expect(passwordInput).toHaveValue('password123')
  });

  it('allows the user to input email and password', () => {
    const handleSubmit = jest.fn()
    render(<LoginForm onSubmit={handleSubmit}/>);    
    const emailInput = screen.getByTestId('email-input')
    const passwordInput = screen.getByTestId('password-input')

    fireEvent.change(emailInput, {target: {value: 'test@email.com'}})
    fireEvent.change(passwordInput, {target: {value: 'password123'}})

    fireEvent.submit(screen.getByRole('button'))

    expect(handleSubmit).toHaveBeenCalledWith('test@email.com', 'password123')
  });

});