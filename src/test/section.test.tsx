import { render, screen, waitFor } from '@testing-library/react';
import axios from 'axios';
import Section1 from '../components/Section1';

 jest.mock('axios');

const mockUserWallet = {
    balance: '1000',
    ledger_balance: '800',
    total_payout: '1200',
    total_revenue: '1500',
    pending_payout: '300',
};

describe('Section1', () => {
    beforeEach(() => {
         axios.get.mockResolvedValue({ data: mockUserWallet });
    });

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
