import { toStringCookies } from "./toStringCookies";

type CookieItem = {
  name: string;
  value: string;
};

type Cookies = {
  getAll: () => CookieItem[];
};

type Request = {
  cookies: Cookies;
};

export default async function middlewareAuth(req: Request): Promise<any> {
  const { data } = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/user/profile`,
    {
      method: "GET",
      credentials: "include",
      headers: {
        Cookie: toStringCookies(req.cookies),
      },
    }
  ).then((res) => res.json());
  const { user } = data || {};
  return user;
}
