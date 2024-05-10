import { Link } from "react-router-dom";
import { useUser, SignedIn, UserButton } from "@clerk/clerk-react";

export default function Header() {
  const { user } = useUser();
  return (
    <div className=" border-b-2">
      <div className=" flex flex-row items-center justify-between p-3">
        <h1 className=" text-2xl border-2 p-2 font-serif hover:bg-gray-600 hover:text-white  w-60 text-center  rounded  ml-6">
          Tracker
        </h1>
        <div className=" flex flex-row gap-x-12 sm:mr-12 items-center ">
          {user ? (
            <SignedIn>
              <UserButton />
            </SignedIn>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}
