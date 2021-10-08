import './style.css';

const Navbar = () => (
  <header className="panel-bg">
    <nav className="navbar navbar-expand-sm bg-white border-bottom fixed-top">
      <ul className="left-navbar navbar-nav flex-row align-items-center">
        <li className="nav-item ms-3">
          <h1 className="Bookstore-CMS">Bookstore CMS</h1>
        </li>
        <li className="nav-item ms-3">
          <p className="BOOKS default-font mb-0">Books</p>
        </li>
        <li className="nav-item ms-3">
          <p className="CATEGORIES default-font mb-0">Categories</p>
        </li>
      </ul>
      <ul className="navbar-nav ms-auto align-items-center">
        <li className="Oval me-2">
          <i className="fas fa-user Mask" />
        </li>
      </ul>
    </nav>
  </header>
);

export default Navbar;
