import './style.css';

const Navbar = () => (
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
              <li className="nav-item">
                <p className="CATEGORIES default-font mb-0">Categories</p>
              </li>
            </ul>
            <span className="navbar-text Oval">
              <i className="fas fa-user Mask" />
            </span>
          </div>
        </div>
      </nav>
    </header>
  </div>
);

export default Navbar;
