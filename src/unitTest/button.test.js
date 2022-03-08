import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import Button from "../components/Button";

describe('<Button />', () => {
    it('should render the button with the text', () => {
        render(<Button label="teste" />);
        expect.assertions(1);

        const button = screen.getByRole('button', {name: /teste/i });
        expect(button).toBeInTheDocument();
    })

    it('should call function on button click', () => {
        const fn = jest.fn();
        render(<Button label="teste" onClick={fn} />);

        const button = screen.getByRole('button', {name: /teste/i });
        
        // fireEvent.click(button);
        // expect(fn).toHaveBeenCalled();

        userEvent.click(button);
        expect(fn).toHaveBeenCalled();
    })
})