
// src/App.test.jsx
import { render, screen } from '@testing-library/react';
import App from './App';
import '@testing-library/jest-dom'; // 👈 Add this line

test('renders the heading', () => {
  render(<App />);
  expect(screen.getByText(/Hello/i)).toBeInTheDocument();
});
