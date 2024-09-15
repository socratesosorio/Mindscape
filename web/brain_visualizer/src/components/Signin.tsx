import React from 'react';
import "./Home.css";
import "./Auth.css";
import { SignInButton } from "@clerk/clerk-react";

export default function SignIn() {
    return (
        <div className="image">
            <div className="container">
                <h1 className="title">MindScape VR</h1>
                <div>
                    <SignInButton>
                        <button className="auth">Sign In</button>
                    </SignInButton>
                </div>
            </div>
        </div>
      );
}