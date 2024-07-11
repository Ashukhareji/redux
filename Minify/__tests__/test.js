import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import Index from '../index'; 


  describe('Index Component', () => {
    it('renders without crashing', () => {
      render(<Index />);
    });
  
    it('renders Add Catchphrase button', () => {
      const { getByText } = render(<Index />);
      const addButton = getByText('Add Catchphrase');
      expect(addButton).toBeInTheDocument();
    });
  
    test('button clicked', () => {
      const { getByText } = render(<Index />);
      const addbutton = getByText('Add Catchphrase');
      fireEvent.click(addbutton);
      
    });
  });
  