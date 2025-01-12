
import { Button } from "./ui/button";

function Content() {
  return (
    <div>
      <div id="poster" className="h-[800px] w-screen">
        <div className="flex flex-col justify-center items-center h-full">
          <div className="text-center text-6xl pt-[50px] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
          "Welcome to Dtox – Your sanctuary for detoxifying the mind and igniting motivation. Take a deep breath, explore, and rediscover your best self!"
          </div>
          <div className="mt-4 pt-[450px]">
            <Button size="lg">Explore more</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;