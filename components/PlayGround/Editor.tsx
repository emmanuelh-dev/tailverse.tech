"use client";
import React from "react";
import dynamic from "next/dynamic";
interface EditorProps {
  source: any;
  setSource?: any;
}

const App = dynamic(
  () => import("@monaco-editor/react").then((mod) => mod.Editor),
  { ssr: false }
);

const Editor = ({ source, setSource }: EditorProps) => {
  return (
    <App
      defaultLanguage="html"
      defaultValue={source}
      onChange={setSource}
      theme="vs-dark"
      options={{
        tabSize: 2,
        insertSpaces: true,
      }}
    />
  );
};

export default Editor;
