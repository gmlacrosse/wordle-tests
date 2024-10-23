import React from 'react';
import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App'; // Replace with your component


describe('App', () => {
  it('App component', () => {
    render(<App />);
    const element = screen.getByText(/wordle/i);
    expect(element).toBeInTheDocument();
  });

  it('win wordle', async () => {
    render(<App testValue='drink'/>);

    const keysToPress = ['d', 'r', 'i', 'n', 'k'];

    for (const key of keysToPress) {
      fireEvent.keyPress(screen.getByRole('heading'), { key });
      jest.advanceTimersByTime(1000); 
    }
    fireEvent.keyPress(screen.getByRole('heading'), { key: 'Enter' });

    jest.advanceTimersByTime(2000); // Adjust the delay as needed

    // eslint-disable-next-line testing-library/await-async-utils
    const modal = waitFor(() => {screen.getByText('You Win!');});
    expect(modal).toBeTruthy();
  });
});


