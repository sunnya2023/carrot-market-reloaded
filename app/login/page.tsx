"use client";

import Button from "@/components/button";
import Input from "@/components/input";
import SocialLogin from "@/components/social-login";
import { useFormState } from "react-dom";
import { login } from "./action";
import { PASSWORD_MIN_LENGTH } from "../lib/constants";

function Login() {
  const [state, action] = useFormState(login, null);

  return (
    <div className="flex flex-col gap-10 py-8 px-6">
      <div className="flex flex-col gap-2 *:font-medium">
        <h1 className="text-2xl">안녕하세요!</h1>
        <h2 className="text-xl">Login with email and password</h2>
      </div>

      <form action={action} className="flex flex-col gap-3">
        <Input
          name="email"
          type="emial"
          placeholder="Eamil"
          required
          errors={state?.fieldErrors.email}
        />
        <Input
          name="password"
          type="password"
          placeholder="Password"
          required
          errors={state?.fieldErrors.password}
          minLength={PASSWORD_MIN_LENGTH}
        />

        <Button text="Login" />
      </form>
      <SocialLogin />
    </div>
  );
}

export default Login;
