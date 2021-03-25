import { connect } from 'react-redux';
import Signup from 'src/components/Signup';
import { setSignupInputValue, signup } from 'src/actions';


const mapStateToProps = (state) => ({
  ...state.signup.fields,
  message: state.signup.message,
  success: state.signup.success,

});

const mapDispatchToProps = (dispatch) => ({
  changeField: (value, name) => {
    dispatch(setSignupInputValue(value, name));
  },
  onSubmit: () => {
    dispatch(signup());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
