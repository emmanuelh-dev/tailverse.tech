import { AiOutlineEnter } from "react-icons/ai";
import Grid from "./Grid";
import Searchbox from "./Searchbox";

export default function Page() {
  return (
    <>
      <div className="px-8 h-96 flex items-center justify-center">
        <div className="text-center">
          <label className="text-lg font-semibold mb-2">
            What do you need?
          </label>
          <div className="flex items-center space-x-2 max-w-md mx-auto">
            <Searchbox />

            <AiOutlineEnter className="text-blue-500 text-xl" />
          </div>
        </div>
      </div>
      <Grid />
    </>
  );
}
