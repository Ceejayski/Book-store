import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import PropTypes from 'prop-types';
import './style.css';

const Book = ({ book, handleRemoveBook }) => (
  // <tr id={book.id}>
  //   <td>
  //     { book.id }
  //   </td>
  //   <td>
  //     { book.title }
  //   </td>
  //   <td>
  //     { book.category }
  //   </td>
  //   <td>
  //     <button onClick={() => handleRemoveBook(book)} type="submit">Remove</button>
  //   </td>
  // </tr>
  <div className="card my-4">
    <div className="card-body row">
      <div className="col-5">
        <div className="category">
          { book.category }
        </div>
        <div className="title h5">
          { book.title }
        </div>
        <div className="Author blue">
          Jonan Darc
        </div>
        <div className="buttons">
          <button type="button" className="default-btn blue">Comments</button>
          <button type="button" className="default-btn blue me-2">Edit</button>
          <button className="default-btn blue" onClick={() => handleRemoveBook(book)} type="submit">Remove</button>
        </div>
      </div>
      <div className="col-7 d-flex">
        <div className="progress-div d-flex align-items-center">
          <CircularProgressbar
            value={64}
            text=""
          />
          <div className="ms-3">
            <p className="display-6 mb-0">
              64%
            </p>
            <p className="Complete">Completed</p>
          </div>
        </div>
        <div className="line-2" />
        <div>
          <p className="current-chapter default-current">CURRENT CHAPTER</p>
          <p className="current-lesson default-current">CHAPTER 17</p>
          <button type="button" className="update-progress">UPDATE PROGRESS</button>
        </div>
      </div>
    </div>
  </div>
);
export default Book;

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
  handleRemoveBook: PropTypes.func.isRequired,
};
