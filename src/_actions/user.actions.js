import { userConstants } from "../_constants";
import  {history} from '../_helpers/history';
import { userService } from '../_services/user.service';
import { alertActions } from './';

// function login(username, password, from) {
//     return dispatch => {
//         userService.login(username, password)
//             .then(
//                 user => { 
//                     dispatch(success(user));
//                     history.push(from);
//                 },
//                 error => {
//                     dispatch(failure(error.toString()));
//                     // dispatch(alertActions.error(error.toString()));
//                 }
//             ); dispatch(request({ username }));

       
//     };

//     function request(user) { return { type: userConstants.LOGIN_REQUEST, user } }
//     function success(user) { return { type: userConstants.LOGIN_SUCCESS, user } }
//     function failure(error) { return { type: userConstants.LOGIN_FAILURE, error } }
// }
// export const userActions={
//     login
// }

 function register(user) {
    
     return dispatch => {
      dispatch(request(user));

        userService.register(user)
            .then(
                user => { 
                    dispatch(success(user));
                    history.push('/login');
                    dispatch(alertActions.success('Registration successful'));
                },
                error => {    
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };

    function request(user) { return { type: userConstants.REGISTER_REQUEST, user } }
    function success(user) { return { type: userConstants.REGISTER_SUCCESS, user } }
    function failure(error) { return { type: userConstants.REGISTER_FAILURE, error } }
 }

export const userActions={
        register
}