import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('INPUT EVENT', () => {
  render(<App />);
  const input = screen.getByPlaceholderText(/Search file or folder/i);
  fireEvent.input(input, {
    target: {value: 'React'}
  });
  expect(input).toBeInTheDocument();
});
