import { createFileRoute, Link } from "@tanstack/react-router";

const HomePage = () => {
  return (
    <div className="w-32 flex flex-col justify-center gap-1">
      <Link
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-center"
        to="/play"
        search={{ difficulty: "easy" }}
      >
        Easy
      </Link>
      <Link
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded text-center"
        to="/play"
        search={{ difficulty: "medium" }}
      >
        Medium
      </Link>
      <Link
        className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded text-center"
        to="/play"
        search={{ difficulty: "hard" }}
      >
        Hard
      </Link>
      <Link
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded text-center"
        to="/play"
        search={{ difficulty: "expert" }}
      >
        Expert
      </Link>
      {/* 
        Master gen is slow asf by the library ????
      <Link
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-center"
        to="/play"
        search={{ difficulty: "master" }}
      >
        Master
      </Link> */}
    </div>
  );
};

export const Route = createFileRoute("/")({
  component: HomePage,
});
