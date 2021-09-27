import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import * as actions from '../../redux/actions';
import s from './Contacts.module.css';

function Contact({ id, name, number }) {
  const dispatch = useDispatch();

  return (
    <li className={s.item}>
      <p className={s.text}>
        {name}: {number}
      </p>
      <button
        type="button"
        onClick={() => dispatch(actions.deleteContact(id))}
        className={s.button}
      >
        X
      </button>
    </li>
  );
}

export default Contact;

Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.func,
};
