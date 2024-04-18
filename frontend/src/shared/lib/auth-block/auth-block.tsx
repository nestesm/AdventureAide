import '../input.css'
import {useSelector} from "react-redux";
import {PasswordCheck} from "@features/user/model/validation";
import {authLogin} from "@features/user/api/user-auth-thunks";
import {useAppDispatch} from "@features";
import {useNavigate} from "react-router";
import {setIsError} from "@features/user/model/user-auth-slice";
import {setRegisterError, UserRegisterSlice} from "@features/user/model/user-register-slice";
import {userRegisterThunks} from "@features/user/api/user-register-thunks";
export const AuthBlock = (props: any) => {

    const auth = {
        password: useSelector((state: any) => state.userLogin.userPassword),
        username: useSelector((state: any) => state.userLogin.userMail)
    }

    const register: UserRegisterSlice = {
        password: useSelector((state: any) => state.userRegister.user.password),
        email: useSelector((state: any) => state.userRegister.user.email),
        gender: useSelector((state: any) => state.userRegister.user.gender),
        fullname: useSelector((state: any) => state.userRegister.user.fullname),
    }

    // const userAccessToken = useSelector((state: any) => state.user.userAccessToken)

    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const onSubmit = (data: typeof auth | UserRegisterSlice, event: any, type: string) => {
        event.preventDefault()
        alert(type)
        switch (type) {
            case "SIGN IN":
                if('username' in data && PasswordCheck(data.password)){
                    dispatch(authLogin(data))
                        .unwrap()
                        .then((res) => navigate(`/route/${res.access_token}`))
                        .catch(() => dispatch(setIsError()))
                } else {
                    dispatch(setIsError())
                }
                break;
            case "SIGN UP":
                console.log(register)
                if('fullname' in data && PasswordCheck(data.password)){
                    dispatch((userRegisterThunks(data)))
                        .unwrap()
                        .then((res) => navigate(`/route/${res.access_token}`))
                        .catch(() => dispatch(setRegisterError()))
                } else {
                    dispatch(setRegisterError())
                }
        }
    }

    return (
        <form className={'auth-block'}
              onSubmit={(event) =>
                  props.formType === "SIGN IN" ?
                  onSubmit(auth, event, props.formType) : onSubmit(register, event, props.formType) }
        >
            {props.children}
        </form>
    )
}
