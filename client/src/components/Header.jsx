import { Link } from "react-router-dom";
import { useUser, SignedIn, UserButton } from "@clerk/clerk-react";

export default function Header() {
  const { user } = useUser();
  return (
    <div className=" border-b-2">
      <div className=" flex flex-row items-center justify-between p-3">
        <h1 className=" text-2xl border-2 p-2 font-semibold text-white rounded bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ml-6">
          Tracker
        </h1>
        <div className=" flex flex-row gap-x-12 sm:mr-12 items-center ">
          <Link to={"/"} className=" text-xl">
            Dashboard
          </Link>
          {user ? (
            <SignedIn>
              <UserButton />
            </SignedIn>
          ) : (
            <Link
              to={"/auth"}
              className=" border-2 border-gray-300 p-2 rounded"
            >
              Signup
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
