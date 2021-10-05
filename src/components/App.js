import { Provider } from 'react-redux';
import BooksList from '../containers/BooksList';
import BooksForm from '../containers/BooksForm';
import store from '../reducers/store';

const App = () => (
  <div>
    <Provider store={store}>

      <BooksList />
      <BooksForm />
    </Provider>
  </div>
);
export default App;
