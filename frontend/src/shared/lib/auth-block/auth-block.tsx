import '../input.css'
import {useSelector} from "react-redux";
import {PasswordCheck} from "@features/user/model/validation";
import {authLogin} from "@features/user/api/user-auth-thunks";
import {useAppDispatch} from "@features";
export const AuthBlock = (props: any) => {

    const password = useSelector((state: any) => state.user.userPassword)
    const userName = useSelector((state: any) => state.user.userName)

    const dispatch = useAppDispatch()

    const onSubmit = (userName: string, userPassword: string, event: any) => {
        event.preventDefault()
        if(userPassword && PasswordCheck(userPassword)){
            dispatch(authLogin({username: userName, password: userPassword}))
                .unwrap()
                .then((originalPromiseResult) => alert(originalPromiseResult))
                .catch((rejectedValueOrSerializedError) =>
                alert(JSON.stringify(rejectedValueOrSerializedError)))
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
