import { useHistory } from 'react-router-dom';
import { addUser, loginUser } from '../store/actions/userActions';
import { useDispatch } from 'react-redux';
import UserDataForm from '../components/UserDataForm';
import '../styles/RegistrationPage.scss';

function RegistrationPage() {
  const history = useHistory();

  const dispatch = useDispatch();

  const registrationSuccessful = (login, password) => {
    const res = dispatch(addUser(login, password));

    res.then(res => {
      if (res.data !== 'User Already Exsists') {
        alert(
          `Congratulations! An account has been created, your login is: ${login}, remember your password and never give it to anyone!`
        );

        dispatch(loginUser(login, password));
        history.push('/');
      } else {
        alert('User Already Exsists');
      }
    });
  };

  return (
    <>
      <div className="registrationPage__user-info">
        <span>Register and start learning!</span>
      </div>
      <UserDataForm
        handler={(login, password) => {
          registrationSuccessful(login, password);
        }}
        buttonName={'Register'}
      />
    </>
  );
}

export default RegistrationPage;
