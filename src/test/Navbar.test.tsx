import { render, screen, waitFor } from '@testing-library/react';
import axios from 'axios';
import Navbar from '../components/Navbar.tsx';

 jest.mock('axios');

const mockUserInfo = {
    first_name: 'John',
    last_name: 'Doe',
    email: 'john.doe@example.com',
};

describe('Navbar', () => {
    beforeEach(() => {
         axios.get.mockResolvedValue({ data: mockUserInfo });
    });

    afterEach(() => {
         jest.clearAllMocks();
    });

    test('renders Navbar component', async () => {
         render(<Navbar />);

         await waitFor(() => {
            expect(screen.getByText(/John Doe/i)).toBeInTheDocument();
            expect(screen.getByText(/john.doe@example.com/i)).toBeInTheDocument();
        });

         expect(screen.getByText(/Home/i)).toBeInTheDocument();
        expect(screen.getByText(/Analytics/i)).toBeInTheDocument();
        expect(screen.getByText(/Revenue/i)).toBeInTheDocument();
        expect(screen.getByText(/CRM/i)).toBeInTheDocument();
        expect(screen.getByText(/APPS/i)).toBeInTheDocument();
    });

    test('displays user information in the menu', async () => {
         render(<Navbar />);

         await waitFor(() => {
            expect(screen.getByText(/John Doe/i)).toBeInTheDocument();
            expect(screen.getByText(/john.doe@example.com/i)).toBeInTheDocument();
        });

         expect(screen.getByText(/John Doe/i)).toBeInTheDocument();
        expect(screen.getByText(/john.doe@example.com/i)).toBeInTheDocument();
        expect(screen.getByAltText('User Avatar')).toBeInTheDocument();
        expect(screen.getByAltText('Settings')).toBeInTheDocument();
        expect(screen.getByAltText('Purchase History')).toBeInTheDocument();
        expect(screen.getByAltText('Refer and Earn')).toBeInTheDocument();
        expect(screen.getByAltText('Integrations')).toBeInTheDocument();
        expect(screen.getByAltText('Switch Accounts')).toBeInTheDocument();
        expect(screen.getByAltText('Sign out')).toBeInTheDocument();
    });

 });
