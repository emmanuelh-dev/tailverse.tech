"use client";
import { SelectType } from "@/app/new/components/select";
import Editor from "@/components/PlayGround/Editor";
import PlayGround from "@/components/PlayGround/Playground";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

const View = ({ component }: any) => {
  const { id, name, author, source, type } = component[0];
  return (
    <div className="px-8">
    <Card className="">
      <div className="flex w-full justify-between p-8 border-b border-neutral-200 dark:border-neutral-800">
        <h3 className="text-lg font-semibold">{name}</h3>
        <div className="flex gap-2 items-center">
          <Input
            value={author}
            type="text"
            disabled
            className="max-w-xs text-white"
          />
          <Input value={name} type="text" disabled />
          <SelectType />
          <Button variant={"secondary"}>Save</Button>
          <Button variant={"secondary"}>...</Button>
        </div>
      </div>
      <div className="flex">

      <Card className="lg:w-1/2 m-8">
        <Editor source={source} />
      </Card>
      <Card className="lg:w-1/2 m-8 flex items-center justify-center h-[80vh]">
        <div dangerouslySetInnerHTML={{ __html: source }} />
      </Card>
      </div>
    </Card>
    </div>
  );
};

export default View;
