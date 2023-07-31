import PropTypes from 'prop-types'
import Title from './components/Title';
import UserDetail from './components/UserDetail';
import Book from './components/Book';

export default function App({ title, user, message, book }) {
  return (
    <>
      <Title title={title} />
      <div style={{ display: 'flex'}}>
        <UserDetail user={user} /> {message} 😈
      </div>
      <Book book={book} />
    </>
  )
}

App.propTypes = {
  message: PropTypes.any.isRequired
};
