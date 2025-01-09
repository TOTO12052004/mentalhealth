import { jwtDecode } from "jwt-decode"

const jwtDecoded = (token) => {
    try {
        const decoded = jwtDecode(token);
        return decoded;
    } catch (err) {
        return false;
    } 
}
export default jwtDecoded;
