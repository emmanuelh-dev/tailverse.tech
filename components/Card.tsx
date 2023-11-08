"use client";
import React, { ReactElement } from "react";
import { AiOutlineEdit } from "react-icons/ai";
import Link from "next/link";
import LikeButton from "./Cards/LikeButton";
import DeleteButton from "./Cards/DeleteButton";
import CopyButton from "./tools/CopyButton";
import { ValidationCard } from "@/utils/validations";
import { Components } from "@/types";
interface Props {
  component: Components;
}

const CardActions = ({
  id,
  rate,
  author,
  source,
  type,
  children,
}: Components) => {
  return (
    <div className="flex w-full flex-col min-h-[18rem] justify-center items-center  overflow-y-auto ">
      <div className="w-full justify-between flex py-1">
        <Link
          href={`/profile/${author}`}
          className="dark:text-neutral-200 font-bold"
          rel="noopener noreferrer"
        >
          {author}
        </Link>
        <CopyButton
          textToCopy={source}
          className="dark:text-neutral-200 "
        />
      </div>
      <div className="shadow-md rounded-xl border-neutral-300 border dark:border-neutral-700 w-full h-full flex flex-1 items-center justify-center overflow-x-hidden">
        {children}
      </div>
      <div className="flex items-center justify-between w-full">
        <LikeButton id={id} rate={rate} />
        <Link
href={`/${type.toLowerCase()}`.replace(/\s/g, '')}
className="dark:text-neutral-200 px-4 py-2 mr-2"
          rel="noopener noreferrer"
        >
          {type.toLowerCase()}
        </Link>
        <div className="flex">
          <DeleteButton id={id} author={author} />
          <Link href={`/item/${id}`} className="dark:text-white">
            <AiOutlineEdit />
          </Link>
        </div>
      </div>
    </div>
  );
};

const CardComponent = ({ component }: Props) => {
  const { source, author, type, rate, id } = component;
  const newSource = ValidationCard(source);

  return (
    <CardActions
      source={source}
      author={author}
      type={type}
      rate={rate}
      id={id}
    >
      <div className="source" dangerouslySetInnerHTML={{ __html: newSource }} />
    </CardActions>
  );
};

export default CardComponent;
