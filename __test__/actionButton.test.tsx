import { render, screen, fireEvent } from '@testing-library/react';
import ActionButton from '@/app/_components/actionButton';

describe('ActionButton', () => {
  it('should render the button with the correct title', () => {
    render(<ActionButton title="Click Me" />);

    expect(screen.getByText('Click Me')).toBeInTheDocument();
  });

  it('should apply default styles', () => {
    render(<ActionButton title="Click Me" />);

    const button = screen.getByText('Click Me').closest('button');
    expect(button).toHaveStyle('background-color: #4190ED');
    expect(button).toHaveStyle('border-color: #4190ED');
    expect(screen.getByText('Click Me')).toHaveStyle('color: #FFFFFF');
  });

  it('should apply custom styles', () => {
    render(
      <ActionButton
        title="Custom Styled Button"
        bgColor="#FF5733"
        borderColor="#FF5733"
        textColor="#000000"
      />,
    );

    const button = screen.getByText('Custom Styled Button').closest('button');
    expect(button).toHaveStyle('background-color: #FF5733');
    expect(button).toHaveStyle('border-color: #FF5733');
    expect(screen.getByText('Custom Styled Button')).toHaveStyle('color: #000000');
  });

  it('should trigger onClick when clicked', () => {
    const mockOnClick = jest.fn();
    render(<ActionButton title="Click Me" onClick={mockOnClick} />);

    const button = screen.getByText('Click Me');
    fireEvent.click(button);

    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });

  it('should not trigger onClick if no onClick is passed', () => {
    const mockOnClick = jest.fn();
    render(<ActionButton title="Click Me" />);

    const button = screen.getByText('Click Me');
    fireEvent.click(button);

    expect(mockOnClick).not.toHaveBeenCalled();
  });
});
