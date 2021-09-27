/* eslint-disable max-len */
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import listData from '../fixtures/listData.json';
import Container from './Container';

const server = setupServer(
  rest.get('https://ac-vill.herokuapp.com/villagers/', (req, res, ctx) => {
    return res(ctx.json(listData));
  })
);

describe('Container test', () => {
  beforeAll(() => server.listen());
  afterAll(() => server.close());

  it('should enter a URL and request method, click submit, and return a response from an API', async () => {
    const container = render(<Container />);

    const controls = screen.getByRole('form', { name: 'REST controls' });
    const display = screen.getByRole('article', { name: 'response' });

    expect(controls).toMatchSnapshot();

    screen.getByText('REST Clone');

    const input = await screen.findByPlaceholderText('URL');
    userEvent.type(input, 'https://ac-vill.herokuapp.com/villagers/');

    const radioButton = await screen.findByLabelText('GET');
    userEvent.click(radioButton);

    const submitButton = await screen.findByRole('button', { name: 'submit' });

    userEvent.click(submitButton);

    return waitFor(() => {
      const response = screen.getByText('"Admiral"', { exact: false });

      expect(response).toBeInTheDocument();
      expect(container).toMatchSnapshot();
      expect(display).toMatchSnapshot();
    });
  });
});
