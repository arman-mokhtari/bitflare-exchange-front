type CookieItem = {
    name: string;
    value: string;
  };
  
  type Cookies = {
    getAll: () => CookieItem[];
  };
  
  export function toStringCookies(cookies: Cookies): string {
    let strCookie = "";
    cookies.getAll().forEach((item) => {
      strCookie += `${item.name}=${item.value}; `;
    });
    return strCookie;
  }
  