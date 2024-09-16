import { describe, it, expect } from 'vitest';
import '@testing-library/jest-dom/vitest';
import { render } from '@testing-library/react'
import UserInfoForm from "./UserInfoForm.tsx";

describe('UserInfoForm', () => {
    it('renders', () => {
        const {container} = render(<UserInfoForm />);
        expect(container).toBeInTheDocument()
    })
});