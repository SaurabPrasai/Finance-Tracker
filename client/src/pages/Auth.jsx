import { SignInButton, SignUpButton, SignedOut,SignedIn,UserButton } from "@clerk/clerk-react"

export default function Auth() {
  return (
    <div className=" flex flex-col  items-center justify-center h-96">

      <h1 className=" mt-60 text-4xl font-serif">Welcome to the Expense-Tracker</h1>

        <div className=" mt-5">
        <SignedOut>
            <SignUpButton  mode={"modal"}className=" border-2 border-gray-600 p-3 rounded shadow-sm w-80 text-2xl m-4  hover:bg-gray-600 hover:text-white"/>
            <SignInButton mode={"modal"} className=" border-2 border-gray-600 w-80 text-2xl  p-3 rounded shadow-sm  hover:bg-gray-600 hover:text-white  m-4"/>
        </SignedOut>
        <SignedIn>
            <UserButton/>
        </SignedIn>

        </div>
       
    </div>
  )
}
