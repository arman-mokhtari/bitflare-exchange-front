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

type UserProfile = {
    user: {
      id: string;
      name: string;
      email: string;
      isActive: boolean; // Add other necessary fields as needed
      role: string;      // Add other necessary fields as needed
    };
  };

export default async function middlewareAuth(req: Request): Promise<UserProfile['user'] | null> {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/user/profile`,
      {
        method: "GET",
        credentials: "include",
        headers: {
          Cookie: toStringCookies(req.cookies),
        },
      }
    );

    if (!response.ok) {
      throw new Error('Failed to fetch user profile');
    }

    const data: UserProfile = await response.json();
    const { user } = data || {};

    return user || null;
  } catch (error) {
    console.error("Error in middlewareAuth:", error);
    return null;
  }
}
