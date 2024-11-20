import { render, screen, fireEvent } from '@testing-library/react';
import AuthFormElement from '@/app/(auth)/_component/authFormElement'; // Ensure this path is correct

describe('AuthFormElement', () => {
  it('should render the input field with the correct label and default type', () => {
    const mockSetValue = jest.fn();
    render(<AuthFormElement title="Username" value="" setValue={mockSetValue} />);

    // Check if the input element is rendered with the correct label
    const input = screen.getByLabelText(/Username/i); // Use getByLabelText instead of getByRole
    expect(input).toBeInTheDocument();

    expect(input).toHaveAttribute('type', 'text');
  });

  it('should render with the correct input type based on prop', () => {
    const mockSetValue = jest.fn();
    render(<AuthFormElement title="Email" value="" setValue={mockSetValue} type="email" />);

    const input = screen.getByRole('textbox');
    expect(input).toHaveAttribute('type', 'email');
  });

  it('should call setValue when the input value changes', () => {
    const mockSetValue = jest.fn();
    render(<AuthFormElement title="Password" value="" setValue={mockSetValue} type="password" />);

    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: 'newpassword123' } });

    expect(mockSetValue).toHaveBeenCalledWith('newpassword123');
  });

  it('should render the input with the correct value', () => {
    const mockSetValue = jest.fn();
    render(<AuthFormElement title="Tel" value="1234567890" setValue={mockSetValue} type="tel" />);

    const input = screen.getByRole('textbox');
    expect(input).toHaveValue('1234567890');
  });
});
