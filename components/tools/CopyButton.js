import React from "react";
import { RiFileCopyLine } from "react-icons/ri";

const CopyButton = ({ textToCopy, info, className }) => {
  const handleCopyClick = () => {
    navigator.clipboard.writeText(textToCopy);
  };

  return (
    <button onClick={handleCopyClick} className={`text-red-600 ${className}`}>
      <RiFileCopyLine />
      <span>{info}</span>
    </button>
  );
};

export default CopyButton;
