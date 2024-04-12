import '../input.css'
import {useSelector} from "react-redux";
import {PasswordCheck} from "@features/user/model/validation";
export const AuthBlock = (props: any) => {

    const password = useSelector((state: any) => state.user.userPassword)
    const userName = useSelector((state: any) => state.user.userName)
    const onSubmit = (userName: string, userPassword: string) => {
        if(PasswordCheck(userPassword)){
            //dispatch(authLogin(data))
        }
    }

    return (
        <form className={'auth-block'} onSubmit={() => onSubmit(userName, password)}>
            {props.children}
        </form>
    )
}
