import { Provider } from 'react-redux';
import BooksList from '../containers/BooksList';
import BooksForm from '../containers/BooksForm';
import Navbar from './Navbar';
import store from '../reducers/store';

const wrappedApp = (
  <Provider store={store}>
    <Navbar />
    <BooksList />
    <BooksForm />
  </Provider>
);

const App = () => (
  <div>
    { wrappedApp }
  </div>
);
export default App;
