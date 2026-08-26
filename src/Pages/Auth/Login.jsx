import React from "react";
import { Button, Form, FormFieldSet, PageTitle } from "oks-ui";
import { MoveRight } from "lucide-react";

const Login = () => {
  return (
    <div className="w-full">
      <PageTitle
        as="h1"
        title="Welcome Back!"
        subtitle="Please enter your credentials to log in."
        classNames={{
          base: "flex-col items-start",
          title: "text-5xl font-bold",
          subtitle: "text-black/60",
        }}
      />
      <div>
        <Form className="mt-6 flex flex-col gap-4">
          <FormFieldSet
            type="email"
            name="email"
            label="Email"
            placeholder="Enter your email"
            size="sm"
            validation={{
              rules: {
                required: true,
                email: true,
              },
              message: {
                required: "Email is required",
                email: "Please enter a valid email address",
              },
            }}
          />

          <FormFieldSet
            type="password"
            name="password"
            label="Password"
            placeholder="Enter your password"
            size="sm"
            validation={{
              rules: {
                required: true,
              },
              message: {
                required: "Password is required",
              },
            }}
          />
          <Button
            fullWidth
            type="submit"
            colorDepth={900}
            className="p-2.5"
            endContent={<MoveRight />}
          >
            Login
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Login;
