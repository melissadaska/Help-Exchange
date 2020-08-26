// decode a token and get user info
import decode from 'jwt-decode';

// create new class instantiate for user
class AuthService {
    getProfile() {
        return decode(this.getToken());
    }

    // check if user is logged in
    loggedIn() {
        // check for saved token and validity
        const token = this.getToken();
        return  !!token && !this.isTokenExpired(token); 
    }

    // check if token expired
    isTokenExpired(token) {
        try {
            const decoded = decode(token);
            if(decoded.exp < Date.now() / 1000) {
                return true;
            } else return false;
        } catch (err) {
            return false;
        }
    }

    getToken() {
        // retrieve user token from localStorage
        return localStorage.getItem('id_token');
    }

    login(idToken) {
        // save user token to localStorage
        localStorage.setItem('id_token', idToken);
        window.location.assign('/');
    }

    logout() {
        // clear user token and profile data from localStorage
        localStorage.removeItem('id_token');
        // reload page and reset state of app
        window.location.assign('/');
    }
}

export default new AuthService();
