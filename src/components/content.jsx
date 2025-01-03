
import { Button } from "./ui/button";

function Content() {
  return (
    <div>
      <div id="poster" className="h-[800px] w-screen">
        <div className="flex flex-col justify-center items-center h-full">
          <div className="text-center text-6xl pt-[50px] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
            Explore more...
          </div>
          <div className="mt-4 pt-[500px]">
            <Button size="lg">Explore more</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;