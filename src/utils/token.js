export function getToken() {
    return localStorage.getItem("Token");
  }
  
  export function removeToken() {
    return localStorage.removeItem("Token");
  }