import { useState } from 'react';

const Bookshelf = () => {
    const [books, setBooks] = useState([
        { title: 'I Am Pilgrim', author: 'Terry Hayes' },
        { title: 'Fourth Wing', author: 'Rebecca Yarros' },
    ]);
    const [newBook, setNewBook] = useState({
        title: '', author: ''
    });

    const _handleInputChange = (event) => {
        setNewBook({...newBook, [event.target.name]: event.target.value});
    }

    const _handleSubmit = (event) => {
        event.preventDefault();
        setBooks([...books, {title: newBook.title, author: newBook.author}]);
        setNewBook({title: '', author: ''});
    }

    const formHasMissingData = !Object.values(newBook).every(Boolean);

    return (
        <div className="bookshelfDiv">
            <div className="formDiv">
                <h3>Add a Book</h3>
                <form  onSubmit={_handleSubmit}>
                    <label htmlFor="title">Title: </label>
                    <input 
                    id="title"
                    name="title"
                    value={newBook.title}
                    onChange={_handleInputChange}
                    />

                    <label htmlFor="author">Author: </label>
                    <input 
                    id="author"
                    name="author"
                    value={newBook.author}
                    onChange={_handleInputChange}
                    />

                    <button disabled={formHasMissingData}>Add Book</button>
                </form>
            </div>
            
            <div className="bookCardsDiv">
                {books.map((book, index) => (
                    <div key={index} className='bookCard'>
                        <h3>{book.title}</h3>
                        <p>by {book.author}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Bookshelf;