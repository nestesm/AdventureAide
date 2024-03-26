import '../input.css'
export const AuthBlock = (props: any) => {

    return (
        <form className={'auth-block'}>
            {props.children}
        </form>
    )
}
