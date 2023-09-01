import { afterEach } from 'vitest'
import { MemoryRouter } from 'react-router-dom'
import { render, cleanup, configure } from '@testing-library/react'
import '@testing-library/jest-dom'

afterEach(cleanup)

configure({
  getElementError: (message, container) => {
    const error = new Error(message);
    error.name = 'TestingLibraryElementError';
    error.stack = null;
    return error;
  },
});

export function renderAtURL(
  Component,
  location = "/",
) {
  return render(
    <MemoryRouter initialEntries={[location]}>
      {Component}
    </MemoryRouter>
  )
}
