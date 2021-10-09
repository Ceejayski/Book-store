import PropTypes from 'prop-types';

const CategoryFilter = ({ handleFilterChange }) => {
  const categories = ['All', 'Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

  const handleClick = (e) => {
    handleFilterChange(e.target.textContent);
  };

  return (
    <li className="nav-item dropdown">
      <a className="CATEGORIES dropdown-toggle" href="/#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        Category
      </a>
      <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
        {categories.map((val) => (
          <li key={val}><a className="dropdown-item" href="/#" onClick={handleClick}>{val}</a></li>
        ))}
      </ul>
    </li>
  );
};

export default CategoryFilter;

CategoryFilter.propTypes = {
  handleFilterChange: PropTypes.func.isRequired,
};
