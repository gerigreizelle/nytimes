const API_URL = 'https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=lFll1hxO1A2ykN5zhX5cNiMo4GyqdT13';

const BookReviews = document.getElementById('book-reviews');

const getBookReviews = async () => {
  try {
    const res = await fetch(API_URL);
    if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
    const data = await res.json();
    return data;
  } catch (e) {
    alert('An error occurred: ' + e.message);
    return {}; 
  }
};

const updateContainer = (data) => {
  BookReviews.innerHTML = '';
  const books = data.results?.books || []; 

  books.forEach((book) => {
    const booksContainer = document.createElement('div');
    const imageUrl = book?.book_image;
    booksContainer.setAttribute('class', 'books');

    booksContainer.innerHTML = `
    <a href="${book.url}" target="_blank">
    <img class="book-cover" src="${imageUrl}" alt="${book?.title}">
    <h2>${book?.title}</h2></a>
    `;

    BookReviews.appendChild(booksContainer);
  });
};

(async () => {
  const data = await getBookReviews();
  updateContainer(data);
})();
