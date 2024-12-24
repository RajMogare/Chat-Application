"use client";
import {
  EmailOutlined,
  LockOutlined,
  PersonOutlined,
} from "@mui/icons-material";
import Link from "next/link";
import { redirect, useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import {signIn} from "next-auth/react";

const Form = ({ type }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const router = useRouter();

  const onSubmit = async (data) => {
    if (type === "register") {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        router.push("/");
        toast.success("User registerd successfully...");
      }

      if (res.error) {
        toast.error("Something went wrong");
      }
    }

    if (type === "login") {
      const res = await signIn("credentials", {
        ...data,
        redirect: false,
      });

      if (res.ok) {
        router.push("/chats");
        toast.success("User login successfully...");
      }

      if (res.error) {
        toast.error("Invalid email or password");
      }

    }
  };
  return (
    <div className="auth">
      <div className="content">
        <img src="/assets/logo.png" alt="logo" className="logo" />
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
          {type === "register" && (
            <div>
              <div className="input">
                <input
                  defaultValue=""
                  {...register("username", {
                    required: "Username is required",
                    validate: (value) => {
                      if (value.length < 3)
                        return "username must be at least 3 characters";
                    },
                  })}
                  type="text"
                  placeholder="Username"
                  className="input-field"
                />
                <PersonOutlined sx={{ color: "#737373" }} />
              </div>
              {errors.username && (
                <p className="text-red-500">{errors.username.message}</p>
              )}
            </div>
          )}

          <div>
            <div className="input">
              <input
                defaultValue=""
                {...register("email", {
                  required: "Email is required",
                  validate: (value) => {
                    if (
                      value.length < 3 ||
                      !value.match(/[!@#$%^&()_|[\]:;<>,.?~\\/-]/)
                    )
                      return "email must be at least 3 characters and contain at least one spectial character...";
                  },
                })}
                type="email"
                placeholder="Email"
                className="input-field"
              />
              <EmailOutlined sx={{ color: "#737373" }} />
            </div>
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}
          </div>

          <div>
            <div className="input">
              <input
                defaultValue=""
                {...register("password", {
                  required: "Password is required",
                  validate: (value) => {
                    if (
                      value.length < 4 ||
                      !value.match(/[!@#$%^&()_|[\]:;<>,.?~\\/-]/)
                    )
                      return "Password must be at least 4 characters and contain at least one spectial character...";
                  },
                })}
                type="password"
                placeholder="Password"
                className="input-field"
              />
              <LockOutlined sx={{ color: "#737373" }} />
            </div>
            {errors.password && (
              <p className="text-red-500">{errors.password.message}</p>
            )}
          </div>
          <button className="button" type="submit">
            {" "}
            {type === "register" ? "Join Free" : "Let's Chat"}
          </button>
        </form>

        {type === "register" ? (
          <Link href="/" className="link">
            <p className="text-center hover:underline">
              Already have an account ? Sign in Here
            </p>
          </Link>
        ) : (
          <Link href="/register" className="link">
            <p className="text-center hover:underline">
              Don't have an account ? Register Here
            </p>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Form;
