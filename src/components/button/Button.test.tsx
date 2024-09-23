import {describe, it, expect, vi} from 'vitest';
import '@testing-library/jest-dom/vitest';
import {fireEvent, render, screen} from "@testing-library/react";
import {Button} from "./Button";

const getButton = async (name?: string) => screen.findByRole('button', name ? { name } : undefined)

describe('Button component', () => {
    it('renders', () => {
        const {container} = render(<Button />);
        expect(container).toBeInTheDocument()
    })

    it('should pass button children through to the underlying button', async () => {
        render(<Button>text</Button>);
        const button = await getButton('text')
        expect(button).toBeInTheDocument()
    });

    it('should pass native button props through to the button', async () => {
        render(<Button disabled>text</Button>);
        const button = await getButton('text')
        expect(button).toBeDisabled()
    });

    it('should onClick events through to the native button', async () => {
        const onClick = vi.fn();
        render(<Button onClick={onClick}>text</Button>);
        fireEvent.click(await getButton('text'));

        expect(onClick).toHaveBeenCalled()
    });
});