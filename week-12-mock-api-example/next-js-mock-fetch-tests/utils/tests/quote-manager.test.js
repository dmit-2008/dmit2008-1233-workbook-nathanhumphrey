import { http, HttpResponse } from 'msw';
import { setupServer } from 'msw/node';
import { QuoteManager, BASE_URL, RANDOM_QUOTE_URL } from '../quote-manager.js';

// Data for response and testing
const AUTHOR = 'Jane Doe';
const QUOTE = 'A famous quote';

const SAVED_QUOTES = [
  {
    id: 1,
    author: 'Sally Anne',
    quote: 'A quote by Sally',
  },
  {
    id: 2,
    author: 'Clark Kent',
    quote: 'A quote by Clark',
  },
  {
    id: 3,
    author: 'Mary Jane',
    quote: 'A quote by Mary',
  },
  {
    id: 4,
    author: 'Sally Anne',
    quote: 'Another quote by Sally',
  },
];

const handlers = [
  http.get(RANDOM_QUOTE_URL, () => {
    return HttpResponse.json({
      _id: 'some-random-id',
      author: AUTHOR,
      content: QUOTE,
    });
  }),
  http.get(BASE_URL, ({ request }) => {
    const url = new URL(request.url);
    const author = url.searchParams.get('author');
    const quote = url.searchParams.get('quote');

    if (author && quote) {
      //  Check exists
      return HttpResponse.json(
        SAVED_QUOTES.filter((q) => q.author === author && q.quote === quote)
      );
    } else if (author) {
      // Get all by author
      return HttpResponse.json(SAVED_QUOTES.filter((q) => q.author === author));
    } else {
      // Get all saved quotes
      return HttpResponse.json(SAVED_QUOTES);
    }
  }),
  http.post(BASE_URL, async ({ request }) => {
    const data = await request.json();
    if (data.author === undefined || data.quote === undefined) {
      throw Error('Incompatible data - author and quote are required');
    }

    data.id = SAVED_QUOTES.length + 1;
    return HttpResponse.json(data);
  }),
];

const server = setupServer(...handlers);

beforeAll(() => {
  server.listen();
});

afterAll(() => {
  server.close();
});

// QuoteManager tests

describe('QuoteManager', () => {
  test('getRandomQuote returns a random quote object', async () => {
    // Arrange
    let randomQuote;

    // Act
    randomQuote = await QuoteManager.getRandomQuote();

    // Assert
    expect(randomQuote).toEqual({ author: AUTHOR, quote: QUOTE });
  });

  test('quoteExists correctly determines if a quote is in the backend', async () => {
    // Arrange
    let exists;
    let doesNotExist;

    // Act
    exists = await QuoteManager.quoteExists(SAVED_QUOTES[0]);
    doesNotExist = await QuoteManager.quoteExists({
      author: 'foo',
      quote: 'bar',
    });

    // Assert
    expect(exists).toBe(true);
    expect(doesNotExist).toBe(false);
  });

  test('getQuotesByAuthor correctly returns saved quotes by an author', async () => {
    // Arrange
    let savedQuotes;
    let noSavedQuotes;

    // Act
    savedQuotes = await QuoteManager.getQuotesByAuthor(SAVED_QUOTES[0].author);
    noSavedQuotes = await QuoteManager.getQuotesByAuthor('zed');

    // Assert
    expect(savedQuotes).toHaveLength(2);
    expect(savedQuotes).toEqual([SAVED_QUOTES[0], SAVED_QUOTES[3]]);

    expect(noSavedQuotes).toHaveLength(0);
  });

  // TODO: create a test for the saved quotes function

  test('saveQuote correctly saves a quote to the backend', async () => {
    // Arrange
    let quoteToSave = { author: AUTHOR, quote: QUOTE };
    let expectedId = SAVED_QUOTES.length + 1;
    let savedQuote;

    // Act
    savedQuote = await QuoteManager.saveQuote(quoteToSave);

    // Assert
    expect(savedQuote).toHaveProperty('id', expectedId);
    expect(savedQuote).toMatchObject(quoteToSave);
  });
});
