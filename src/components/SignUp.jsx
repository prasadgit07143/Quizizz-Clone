import React from "react";
import Login from "./Login";

const SignUp = React.memo(() => (
  <Login
    heading="Welcome to Quizizz"
    para="Create a free account in 2 steps"
    bottomText="Already have an account?"
    actionText={["Log in", "/login"]}
    bottomPara={true}
  />
));

SignUp.displayName = "SignUp";

export default SignUp;
