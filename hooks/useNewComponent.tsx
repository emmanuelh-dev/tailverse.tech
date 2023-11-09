import UserStore from "@/store/user";
import React, { useEffect } from "react";
import toast from "react-hot-toast";

const useNewComponent = () => {
  const newComponent = UserStore((state) => state.newComponent);
  const token = UserStore((state) => state.token);

  function createComponent() {
    const { name, author, source, type } = newComponent;
    if (!name || !author || !source || !type) {
      return;
    }
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/components`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(newComponent),
    })
      .then((response) => {
        toast.success(
          "Congratulations! The component has been added to the system!"
        );
      })
      .catch((error) => {
        console.error(error);
        toast("Oh no. Something went wrong.");
        return false;
      });
  }

  useEffect(() => {
  }, [newComponent]);

  return [createComponent];
};

export default useNewComponent;
