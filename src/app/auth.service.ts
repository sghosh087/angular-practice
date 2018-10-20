
export class AuthService {
    
    isLoggedIn: boolean = false;

    checkLogin() {
        return new Promise(
            (resolve,reject) => {
                setTimeout(resolve(
                     this.isLoggedIn
                ),800)
            }
        )
    }
}