export interface ILoginViewModel {
    passwordEnabled: boolean;
    loginEnabled: boolean;
    inProgress: boolean;
    isSuccessAuth?: boolean;

    loginChange(login: string): void;
    passwordChange(password: string): void;
    doLogin(): void;
}