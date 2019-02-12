import {UserAccount} from "../Model/UserAccount";

export class LoginService {
    user: UserAccount;

    login = (login: string, password: string): boolean => {
        this.user = {login, password};

        return login == "123" && password == "123";
    }
}