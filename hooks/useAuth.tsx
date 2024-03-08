'use client';
import useSWR from 'swr';
import UserStore from '@/store/user';
import { loginUser } from '@/utils/authUtils';

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
function useAuth() {
  const token = localStorage.getItem('AUTH_TOKEN');

  const setInitialData = UserStore((state) => state.setInitialData);
  const updateAuthor = UserStore((state) => state.updateAuthor);

  const login = async (values: { email: string; password: string }) => {
    try {
      const data = await loginUser(values);
      const { token, user } = data;
      setInitialData(user.username, token);
      updateAuthor(user.username);
    } catch {}
  };

  const { data: user, error, mutate, } = useSWR('/user', () =>
    axiosInstance('/user', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.data)
      .catch((err) => {
        throw Error(error?.response?.data?.errors);
      })
  );

  
const loginUser = async ({
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
    return "Email or password is incorrect";
  }
};

  const register = async (datos, setErrores) => {
    try {
      const { data } = await axiosInstance.post('/register', datos);
      localStorage.setItem('AUTH_TOKEN', data.token);
      setErrores([]);
      await mutate();
    } catch (error) {
      setErrores(Object.values(error.response.data.errors));
    }
  };
  const logout = async () => {
    try {
      await axiosInstance.post('/logout', null, {
        headers: { Authorization: `Bearer ${token}` },
      });
      localStorage.removeItem('AUTH_TOKEN');
      await mutate(null);
    } catch (error) {
      console.error(error);
    }
  };

  return {
    loginUser
    ,
    register,
    logout,
    user,
    error,
  };
}
export default useAuth;
