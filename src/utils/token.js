// export function getToken() {
//     return localStorage.getItem("Token");
//   }

export function getToken() {
    return localStorage.getItem("userToken");
  }
  
  // export function removeToken() {
  //   return localStorage.removeItem("Token");
  // }
  export function removeToken() {
    return localStorage.removeItem("userToken");
  }