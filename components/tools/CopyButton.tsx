import React, { useState } from "react";
import { RiFileCopyLine, RiFileCopyFill } from "react-icons/ri";
import toast from "react-hot-toast";
interface Props { textToCopy: string, info?: string, className: string }
const CopyButton = ({ textToCopy, info, className }: Props) => {
  const [copied, setCopied] = useState(false)
  const handleCopyClick = () => {
    navigator.clipboard.writeText(textToCopy);
    setCopied(true)
    setTimeout(() => {
      setCopied(false)
    }, 1000);
    toast.success("Copied to clipboard")
  };

  return (
    <button onClick={handleCopyClick} className={`text-red-600 ${className}`}>
      {copied  ? <RiFileCopyFill/> : <RiFileCopyLine />  }
      
      <span>{info}</span>
    </button>
  );
};

export default CopyButton;
