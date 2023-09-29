import UserState from "@/store/user";
import { deleteCompoent } from "@/utils/services";
import React, { useEffect, useState } from "react";
import { FaTrash } from "react-icons/fa";

interface Props {
  id: number;
  author: string;
}
const DeleteButton = ({ id, author }: Props) => {
  const user = UserState(state  => state.user);

  const handleDelete = async () => {
    deleteCompoent(id);
  };

  return user === author ? (
    <button
      onClick={handleDelete}
      className="text-red-600 mr-2 flex items-center"
      title="Delete Component"
    >
      <FaTrash />
    </button>
  ) : null;
};

export default DeleteButton;
