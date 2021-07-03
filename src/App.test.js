import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const text = screen.getByText(/Atividade 01/i);
  expect(text).toBeInTheDocument();
});
