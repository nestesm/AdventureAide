import '../input.css'
import {useSelector} from "react-redux";
import {PasswordCheck} from "@features/user/model/validation";
import {authLogin} from "@features/user/api/user-auth-thunks";
import {useAppDispatch} from "@features";
import {useNavigate} from "react-router";
import {setIsError} from "@features/user/model/user-auth-slice";
export const AuthBlock = (props: any) => {

    const password = useSelector((state: any) => state.user.userPassword)
    const userName = useSelector((state: any) => state.user.userName)
    // const userAccessToken = useSelector((state: any) => state.user.userAccessToken)

    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const onSubmit = (userName: string, userPassword: string, event: any) => {
        event.preventDefault()
        if(userPassword && PasswordCheck(userPassword)){
            dispatch(authLogin({username: userName, password: userPassword}))
                .unwrap()
                .then((res) => navigate(`/route/${res.access_token}`))
                .catch(() => dispatch(setIsError()))
        }
        else {
            console.log('error')
        }
    }

    return (
        <form className={'auth-block'} onSubmit={(event) => onSubmit(userName, password, event)}>
            {props.children}
        </form>
    )
}
