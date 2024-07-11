import * as React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import FormDialog from '../components/FormDialog';


describe('FormDialog component', () => {
    const handleClose = jest.fn();
    const onChange = jest.fn();
    const handleFormSubmit = jest.fn();
  
    const testData = {
      id: 1,
      name: 'Test Name',
      scope: 'Test Scope',
      question: 'Test Question',
    };
    test('renders without crashing', () => {
        render(
          <FormDialog
            open={true}
            handleClose={handleClose}
            data={testData}
            onChange={onChange}
            handleFormSubmit={handleFormSubmit}
          />
        );
      });
      test('dialog opens when "open" is true', () => {
        const { getByText } = render(
          <FormDialog
            open={true}
            handleClose={handleClose}
            data={testData}
            onChange={onChange}
            handleFormSubmit={handleFormSubmit}
          />
        );
    
        expect(getByText('Create Catchphrase')).toBeInTheDocument();
      });
    
      test('dialog closes when "open" is false', () => {
        const { queryByText } = render(
          <FormDialog
            open={false}
            handleClose={handleClose}
            data={testData}
            onChange={onChange}
            handleFormSubmit={handleFormSubmit}
          />
        );
    
        expect(queryByText('Create Catchphrase')).toBeNull();
      });
    
      test('form fields are populated correctly', () => {
        const { getByDisplayValue } = render(
          <FormDialog
            open={true}
            handleClose={handleClose}
            data={testData}
            onChange={onChange}
            handleFormSubmit={handleFormSubmit}
          />
        );
    
        expect(getByDisplayValue('Test Name')).toBeInTheDocument();
        expect(getByDisplayValue('Test Scope')).toBeInTheDocument();
        expect(getByDisplayValue('Test Question')).toBeInTheDocument();
      });
    
      test('typing into form fields calls onChange', () => {
        const { getByLabelText } = render(
          <FormDialog
            open={true}
            handleClose={handleClose}
            data={testData}
            onChange={onChange}
            handleFormSubmit={handleFormSubmit}
          />
        );
    
        fireEvent.change(getByLabelText('Name'), { target: { value: 'New Name' } });
        fireEvent.change(getByLabelText('Scope'), { target: { value: 'New Scope' } });
        fireEvent.change(getByLabelText('Question'), { target: { value: 'New Question' } });
    
        expect(onChange).toHaveBeenCalledTimes(3);
      });
    
      test('clicking Submit button calls handleFormSubmit', () => {
        const { getByText } = render(
          <FormDialog
            open={true}
            handleClose={handleClose}
            data={testData}
            onChange={onChange}
            handleFormSubmit={handleFormSubmit}
          />
        );
    
        fireEvent.click(getByText('Submit'));
    
        expect(handleFormSubmit).toHaveBeenCalledTimes(1);
      });
    
      test('clicking Cancel button calls handleClose', () => {
        const { getByText } = render(
          <FormDialog
            open={true}
            handleClose={handleClose}
            data={testData}
            onChange={onChange}
            handleFormSubmit={handleFormSubmit}
          />
        );
    
        fireEvent.click(getByText('Cancel'));
    
        expect(handleClose).toHaveBeenCalledTimes(1);
      });

});