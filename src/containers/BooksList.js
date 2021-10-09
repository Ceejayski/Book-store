import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';
import { removeBook, changeFilter } from '../actions/index';
import CategoryFilter from '../components/CategoryFilter';

const BooksList = ({
  books, removeBook, filter, changeFilter,
}) => {
  const handleRemoveBook = (book) => {
    removeBook(book);
  };

  const handleFilterChange = (filter) => {
    changeFilter(filter);
  };

  const renderBooks = (array) => (array.map((val) => (
    <Book handleRemoveBook={handleRemoveBook} key={val.id} book={val} />
  )));

  const renderFilter = () => {
    if (filter === 'All') {
      return (
        renderBooks(books)
      );
    }

    return (
      renderBooks(books.filter((book) => book.category === filter))
    );
  };

  return (
    <>
      <div className="border-bottom fixed-top bg-white">
        <header className="container">
          <nav className="navbar navbar-expand-lg  bg-white">
            <div className="container-fluid">
              <div className="navbar-brand">
                <h1 className="Bookstore-CMS">Bookstore CMS</h1>
              </div>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
              </button>
              <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <p className="BOOKS default-font mb-0">Books</p>
                  </li>
                  {/* <li className="nav-item">
                    <p className="CATEGORIES default-font mb-0">Categories</p>
                  </li> */}
                  <CategoryFilter handleFilterChange={handleFilterChange} />
                </ul>
                <span className="navbar-text Oval">
                  <i className="fas fa-user Mask" />
                </span>
              </div>
            </div>
          </nav>
        </header>
      </div>
      <main className="container mt-5 mb-5">
        <CategoryFilter handleFilterChange={handleFilterChange} />
        {
              books && books.length
                ? renderFilter()
                : (
                  <p>No Books</p>
                )

          }
      </main>
    </>
  );
};

const mapStateToProps = (state) => {
  const { books, filter } = state;
  return { books, filter };
};

const mapDispatchToProps = (dispatch) => ({
  removeBook: (book) => {
    dispatch(removeBook(book));
  },
  changeFilter: (filter) => {
    dispatch(changeFilter(filter));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
BooksList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  })).isRequired,
  removeBook: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
  changeFilter: PropTypes.func.isRequired,
};
