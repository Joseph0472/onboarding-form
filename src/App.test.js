import { render, screen, fireEvent  } from '@testing-library/react';
import App from './App';
import BankingForm from './components/BankingInfoForm';


describe('Calculation', () => {
  test('When salary is 1000', () => {
    render(<BankingForm />);

    const salaryInput = screen.getByTestId("salary-input");
    fireEvent.change(salaryInput, {
      target: { value: '1000' }
    });

    const taxResult = screen.getByTestId("tax");
    expect(taxResult.value).toBe('0');
    const superResult = screen.getByTestId("super");
    expect(superResult.value).toBe('110.00');
  });

  test('When salary is 18200', () => {
    render(<BankingForm />);

    const salaryInput = screen.getByTestId("salary-input");
    fireEvent.change(salaryInput, {
      target: { value: '18200' }
    });

    const taxResult = screen.getByTestId("tax");
    expect(taxResult.value).toBe('0');
    const superResult = screen.getByTestId("super");
    expect(superResult.value).toBe('2002.00');
  });

  test('When salary is 20000', () => {
    render(<BankingForm />);

    const salaryInput = screen.getByTestId("salary-input");
    fireEvent.change(salaryInput, {
      target: { value: '20000' }
    });

    const taxResult = screen.getByTestId("tax");
    expect(taxResult.value).toBe('342.00');
    const superResult = screen.getByTestId("super");
    expect(superResult.value).toBe('2200.00');
  });

  test('When salary is 90000', () => {
    render(<BankingForm />);

    const salaryInput = screen.getByTestId("salary-input");
    fireEvent.change(salaryInput, {
      target: { value: '90000' }
    });

    const taxResult = screen.getByTestId("tax");
    expect(taxResult.value).toBe('20797.00');
    const superResult = screen.getByTestId("super");
    expect(superResult.value).toBe('9900.00');
  });

  test('When salary is -100', () => {
    render(<BankingForm />);

    const salaryInput = screen.getByTestId("salary-input");
    fireEvent.change(salaryInput, {
      target: { value: '-100' }
    });

    const taxResult = screen.getByTestId("tax");
    expect(taxResult.value).toBe('Invalid Input');
    const superResult = screen.getByTestId("super");
    expect(superResult.value).toBe('Invalid Input');
  });
});