import { Provider } from 'react-redux';
import BooksList from '../containers/BooksList';
import BooksForm from '../containers/BooksForm';
import store from '../reducers/store';

const wrappedApp = (
  <Provider store={store}>
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
