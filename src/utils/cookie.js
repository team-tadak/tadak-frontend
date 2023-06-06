// export function getCookie(name) {
//   return document.cookie.split(";").some((c) => {
//     return c.trim().startsWith(name + "=");
//   });
// }

// export function deleteCookie(name, path, domain) {
//   if (getCookie(name)) {
//     document.cookie =
//       name +
//       "=" +
//       (path ? ";path=" + path : "") +
//       (domain ? ";domain=" + domain : "") +
//       ";expires=Thu, 01 Jan 1970 00:00:01 GMT";
//   }
// }

export function setCookie(name, value) {
  document.cookie = name + '=' + value + '; Path=/;';
}
export function deleteCookie(name) {
  document.cookie = name + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}
