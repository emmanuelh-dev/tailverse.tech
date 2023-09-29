import UserStore from "@/store/user";
import { loginUser } from "@/utils/authUtils";

function useLogin() {
  const setInitialData = UserStore((state) => state.setInitialData);

  const logIn = async (values: { email: string; password: string }) => {
    try {
      const data = await loginUser(values);
      const { token, user } = data;
      setInitialData(user.username, token);
    } catch {
    }
  };

  return {
    logIn,
  };
}

export default useLogin;
