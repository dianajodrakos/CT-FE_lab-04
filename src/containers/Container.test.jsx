import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Container from './Container';


describe('Container test', () => {
  it('should return a call to an API', async () => {
    const component = render(<Container />);

    screen.getByText('REST Clone');

    const input = await screen.findByPlaceholderText('URL');
    userEvent.type(input, 'https://ac-vill.herokuapp.com/villagers/');

    const submitButton = await screen.findByRole(
      'button',
      { name: 'submit' }
    );

    userEvent.click(submitButton);
    expect(component).toMatchSnapshot();

  });
});
