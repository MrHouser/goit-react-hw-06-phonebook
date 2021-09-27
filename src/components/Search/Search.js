import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import * as actions from '../../redux/actions';
import s from './Search.module.css';

function Search({ value }) {
  const dispatch = useDispatch();
  return (
    <label className={s.label}>
      Find contacts by name:
      <input
        type="text"
        value={value}
        onChange={event => dispatch(actions.filterContacts(event.target.value))}
        className={s.input}
      ></input>
    </label>
  );
}

export default Search;

Search.propTypes = {
  value: PropTypes.string,
  onSearch: PropTypes.func,
};
