import React, { useEffect, useState } from 'react';

export default function ViewBooksByManager() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const username = sessionStorage.getItem('managerUsername');
    const all = JSON.parse(localStorage.getItem('managerBooks')) || [];
    setBooks(all.filter(b => b.managerUsername === username));
  }, []);

  return (
    <div>
      <h3>My Books</h3>
      <table border="1">
        <thead>
          <tr>
            <th>ID</th><th>Name</th><th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {books.map(b => (
            <tr key={b.bookId}>
              <td>{b.bookId}</td>
              <td>{b.bookName}</td>
              <td>{b.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}