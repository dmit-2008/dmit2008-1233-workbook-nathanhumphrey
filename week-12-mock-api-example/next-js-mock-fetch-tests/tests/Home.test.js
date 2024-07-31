import { render, screen, act } from '@testing-library/react';
import '@testing-library/jest-dom';
import { QuoteManager } from '../utils/quote-manager.js';

import Home from '../pages/index.js';

// Data for response and testing
const AUTHOR = 'Jane Doe';
const QUOTE = 'A famous quote';

// Setup a mock/spy for QuoteManager methods
const originalGetRandomQuote = QuoteManager.getRandomQuote;
const originalQuoteExists = QuoteManager.quoteExists;

beforeAll(() => {
  // Mock the necessary functions we need
  QuoteManager.getRandomQuote = jest
    .fn()
    .mockResolvedValue({ author: AUTHOR, quote: QUOTE })
    .mockName('mockGetRandomQuote');

  QuoteManager.quoteExists = jest
    .fn()
    .mockResolvedValue(false)
    .mockName('mockQuoteExists');
});

beforeEach(() => {
  jest.clearAllMocks();
});

// Restore original implementations when done
afterAll(() => {
  QuoteManager.getRandomQuote = originalGetRandomQuote;
  QuoteManager.quoteExists = originalQuoteExists;
});

describe('Home page component', () => {
  test('Loads a random quote on mount', async () => {
    // wait for the home piece to render.
    await act(() => {
      render(<Home />);
    });
    // get the author and quote element
    let quoteElement = screen.getByTestId('quote');
    let authorElement = screen.getByTestId('author');

    // check to see that they are equal to the new values.
    expect(quoteElement).toHaveTextContent(QUOTE);
    expect(authorElement).toHaveTextContent(AUTHOR);

    // check the calls to the mocks
    expect(QuoteManager.getRandomQuote.mock.calls.length).toEqual(1);
    expect(QuoteManager.quoteExists.mock.calls.length).toEqual(1);
    expect(QuoteManager.quoteExists.mock.calls).toContainEqual([
      { author: AUTHOR, quote: QUOTE },
    ]);
  });

  test('Loads a new random quote when "Get a Quote" button is clicked', async () => {
    // wait for the home page to render
    await act(() => {
      render(<Home />);
    });

    // define new values
    const NEW_AUTHOR = 'Clark Kent';
    const NEW_QUOTE = 'Up, up, and away!';

    // require an intermediate mock for get random quote
    const origMock = QuoteManager.getRandomQuote;

    QuoteManager.getRandomQuote = jest
      .fn()
      .mockResolvedValue({ author: NEW_AUTHOR, quote: NEW_QUOTE })
      .mockName('newMockGetRandomQuote');

    // get the button element
    let buttonElement = screen.getByTestId('new-quote-button');

    // click the new button and wait for the state to change
    await act(() => {
      buttonElement.click();
    });

    // get the author and quote elements
    let quoteElement = screen.getByTestId('quote');
    let authorElement = screen.getByTestId('author');

    // check to see that they are equal to the expected values
    expect(quoteElement).toHaveTextContent(NEW_QUOTE);
    expect(authorElement).toHaveTextContent(NEW_AUTHOR);

    // reset the original mock function
    QuoteManager.getRandomQuote = origMock;
  });
});
