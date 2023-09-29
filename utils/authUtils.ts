
type RegisterUserArgs = {
  username: string;
  email: string;
  password: string;
};

type LoginUserArgs = {
  email: string;
  password: string;
};

type RegisterUserResult = boolean;
type LoginUserResult = any;

export const registerUser = async ({
  username,
  email,
  password,
}: RegisterUserArgs): Promise<RegisterUserResult> => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/users/register`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, email, password }),
    }
  );

  if (response.ok) {
    return true;
  } else {
    return false;
  }
};

export const loginUser = async ({
  email,
  password,
}: LoginUserArgs): Promise<LoginUserResult> => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/users/login`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    }
  );

  if (response.ok) {
    return await response.json();
      } else {
    return "An error occurred";
  }
};