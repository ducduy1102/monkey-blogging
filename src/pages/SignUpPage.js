import React from "react";
import styled from "styled-components";
import { Label } from "../components/label";
import { Input } from "components/input";
import { useForm } from "react-hook-form";
import { IconEyeClose } from "components/icon";
import { Field } from "components/field";

const SignUpPageStyle = styled.div`
  /* background-color: ${(props) => props.theme.primary}; */
  min-height: 100vh;
  padding: 40px;
  .logo {
    margin: 0 auto 20px;
  }

  .heading {
    text-align: center;
    color: ${(props) => props.theme.primary};
    font-size: 40px;
    font-style: bold;
  }

  .form {
    max-width: 600px;
    margin: 0 auto;
  }
`;

const SignUpPage = () => {
  const {
    control,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
    watch,
  } = useForm();
  const handleSignUp = (values) => {
    console.log(values);
  };
  return (
    <SignUpPageStyle>
      <div className="container">
        <img srcSet="./logo.png 2x" alt="monkey-blogging" className="logo" />
        <h1 className="heading">Monkey Blogging</h1>
        <form
          className="form"
          onSubmit={handleSubmit(handleSignUp)}
          autoComplete="off"
        >
          <Field>
            <Label htmlFor="fullname">Fullname</Label>
            <Input
              type="text"
              name="fullname"
              placeholder="Enter your fullname"
              control={control}
            />
          </Field>
          <Field>
            <Label htmlFor="email">Email address</Label>
            <Input
              type="email"
              name="email"
              placeholder="Enter your email"
              control={control}
            />
          </Field>
          <Field>
            <Label htmlFor="password">Password</Label>
            <Input
              type="password"
              name="password"
              placeholder="Enter your password"
              control={control}
            >
              <IconEyeClose className="input-icon"></IconEyeClose>
            </Input>
          </Field>
        </form>
      </div>
    </SignUpPageStyle>
  );
};

export default SignUpPage;
