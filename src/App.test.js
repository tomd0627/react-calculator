import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

test('renders calculator app', () => {
  render(<App />);
  const element = screen.getByText('AC');
  expect(element).toBeInTheDocument();
});
