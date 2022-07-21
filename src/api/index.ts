import { UserInterface } from "../context/user";
interface SignUpBody {
  username: string;
  phone: string;
  email: string;
  password: string;
}

export async function signUp(body: SignUpBody): Promise<UserInterface> {
  const response = await fetch("https://dummyjson.com/users/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  return await response.json();
}
