import { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createBook } from '../actions/index';

const BooksForm = (props) => {
  const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
  const initialState = {
    title: '',
    category: '',
    id: null,
  };
  const [book, setBook] = useState(initialState);

  const handleChange = (e) => {
    e.preventDefault();
    setBook({
      ...book,
      [e.target.name]: e.target.value,
      id: Math.floor(Math.random() * 100),
    });
  };

  const clearState = () => {
    setBook({
      ...initialState,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.createBook(book);
    clearState();
  };

  return (
    <form onSubmit={handleSubmit} className="container mb-5">
      <h4 className="add-new-book">ADD NEW BOOK</h4>
      <div className="row">
        <div className="col-7">
          <input type="text" className="form-control" id="title" name="title" placeholder="Title" value={book.title} onChange={handleChange} />
        </div>
        <div className="col-3">
          <select name="category" className="form-control" id="category" onChange={handleChange}>
            <option value="" disabled selected>Category</option>
            {categories.map((val) => <option key={val} value={val}>{val}</option>)}

          </select>
        </div>
        <div className="col-2">
          <button type="submit" className="btn btn btn-primary">Add Book</button>
        </div>
      </div>
    </form>
  );
};

const mapDispatchToProps = (dispatch) => ({
  createBook: (book) => {
    dispatch(createBook(book));
  },
});

export default connect(null, mapDispatchToProps)(BooksForm);

BooksForm.propTypes = {
  createBook: PropTypes.func.isRequired,
};
