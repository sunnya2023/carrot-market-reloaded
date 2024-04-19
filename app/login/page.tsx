"use client";

import FormBtn from "@/components/button";
import FormInput from "@/components/form-input";
import SocialLogin from "@/components/social-login";
import { useFormState } from "react-dom";
import { handleForm } from "./action";

function Login() {
  const [state, action] = useFormState(handleForm, null);

  return (
    <div className="flex flex-col gap-10 py-8 px-6">
      <div className="flex flex-col gap-2 *:font-medium">
        <h1 className="text-2xl">안녕하세요!</h1>
        <h2 className="text-xl">Login with email and password</h2>
      </div>

      <form action={action} className="flex flex-col gap-3">
        <FormInput
          name="email"
          type="emial"
          placeholder="Eamil"
          required
          errors={[]}
        />
        <FormInput
          name="password"
          type="password"
          placeholder="Password"
          required
          errors={state?.errors ?? []}
        />

        <FormBtn text="Login" />
      </form>
      <SocialLogin />
    </div>
  );
}

export default Login;
