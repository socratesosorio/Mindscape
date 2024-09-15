import Home from "./components/Home";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";
import Signin from './components/Signin';

export default function App() {

  return (
    // <div>
    //   <Home></Home>
    // </div>
    <header>
      <SignedOut>
        <Signin />
      </SignedOut>
      <SignedIn>
        <Home />
      </SignedIn>
    </header>
  );
}
