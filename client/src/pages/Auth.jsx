import { SignInButton, SignUpButton, SignedOut,SignedIn,UserButton } from "@clerk/clerk-react"

export default function Auth() {
  return (
    <div className="">
        <SignedOut>
            <SignUpButton  mode={"modal"}className=" border-2 border-gray-600 p-3 rounded shadow-sm bg-gray-300  hover:bg-opacity-95 m-4"/>
            <SignInButton mode={"modal"} className=" border-2  border-gray-600 p-3 rounded shadow-sm bg-gray-300  hover:bg-opacity-95 m-4"/>
        </SignedOut>
        <SignedIn>
            <UserButton/>
        </SignedIn>
    </div>
  )
}
