"use client"

import { NextPage } from "next";
import { signIn } from "next-auth/react";
import { FormEventHandler, useState } from "react";
import { useRouter } from 'next/navigation';

const LoginComponent: NextPage = (props): JSX.Element => {
  const [userInfo, setUserInfo] = useState({ email: "", password: "" });
  const router = useRouter()
  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    // validate your userinfo
    e.preventDefault();

    const res = await signIn("credentials", {
      email: userInfo.email,
      password: userInfo.password,
      redirect: false,
    });
    if(!res?.error){
    //   console.log(res)
      router.push("/")
    }
    
  };
  return (
    <div className="sign-in-form">
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        <input
          value={userInfo.email}
          onChange={({ target }) =>
            setUserInfo({ ...userInfo, email: target.value })
          }
          type="email"
          placeholder="john@email.com"
        />
        <input
          value={userInfo.password}
          onChange={({ target }) =>
            setUserInfo({ ...userInfo, password: target.value })
          }
          type="password"
          placeholder="********"
        />
        <input type="submit" value="Login" />
      </form>
    </div>
  );
};

export default LoginComponent;