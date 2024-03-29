import UserStore from "@/store/user";
import { loginUser } from "@/utils/authUtils";

function useLogin() {
  const setInitialData = UserStore((state) => state.setInitialData);
  const updateAuthor = UserStore(state => state.updateAuthor)
  const logIn = async (values: { email: string; password: string }) => {
    try {
      const data = await loginUser(values);
      const { token, user } = data;
      setInitialData(user.username, token);
      updateAuthor(user.username)
      return true;
    } catch {
      return false;
    }
  };

  return {
    logIn,
  };
}

export default useLogin;
