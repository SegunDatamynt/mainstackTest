import { render, screen, waitFor } from '@testing-library/react';
 import Section1 from '../components/Section1';

 jest.mock('axios');



describe('Section1', () => {

    afterEach(() => {
         jest.clearAllMocks();
    });

    test('renders Section1 component with user wallet information', async () => {
         render(<Section1 />);

         await waitFor(() => {
            expect(screen.getByText(/Available Balance/i)).toBeInTheDocument();
            expect(screen.getByText(/USD 1000/i)).toBeInTheDocument();
            expect(screen.getByText(/USD 800/i)).toBeInTheDocument();
            expect(screen.getByText(/USD 1200/i)).toBeInTheDocument();
            expect(screen.getByText(/USD 1500/i)).toBeInTheDocument();
            expect(screen.getByText(/USD 300/i)).toBeInTheDocument();
        });

         expect(screen.getByText(/Withdraw/i)).toBeInTheDocument();
    });

 });
