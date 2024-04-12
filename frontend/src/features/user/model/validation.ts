export function PasswordCheck(password: string): boolean | string {
    return password.length >= 8 ? password : false;
}
