import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Divider, Form, FormFieldSet, PageTitle, toast } from "oks-ui";
import { useAuth } from "../../context/useAuth";
import GoogleIcon from "../../Components/Commom/GoogleIcon";

const Register = () => {
  const { register } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (formData) => {
    register(formData.email, formData.password);
    toast.success("Account created successfully!");
    navigate("/dashboard");
  };

  return (
    <div className="w-full">
      <PageTitle
        as="h1"
        title="Create an Account"
        subtitle="Sign up to start organizing your work with us."
        classNames={{
          base: "flex-col items-start",
          title: "text-3xl sm:text-4xl lg:text-5xl font-bold",
          subtitle: "text-black/60",
        }}
      />
      <div>
        <Form className="mt-6 flex flex-col gap-4" onSubmit={handleSubmit}>
          <FormFieldSet
            type="text"
            name="fullName"
            label="Full Name"
            placeholder="Enter your full name"
            size="sm"
            validation={{
              rules: {
                required: true,
                minLength: 2,
              },
              message: {
                required: "Full name is required",
                minLength: "Full name must be at least 2 characters",
              },
            }}
          />

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
            placeholder="Create a password"
            size="sm"
            validation={{
              rules: {
                required: true,
                minLength: 6,
              },
              message: {
                required: "Password is required",
                minLength: "Password must be at least 6 characters",
              },
            }}
          />

          <FormFieldSet
            type="password"
            name="confirmPassword"
            label="Confirm Password"
            placeholder="Re-enter your password"
            size="sm"
            validation={{
              rules: {
                required: true,
                matchField: "password",
              },
              message: {
                required: "Please confirm your password",
                matchField: "Passwords do not match",
              },
            }}
          />

          <FormFieldSet
            type="checkbox"
            name="agreeToTerms"
            options={[
              {
                label: (
                  <span>
                    I agree to the{" "}
                    <button
                      type="button"
                      className="text-blue-600 underline hover:text-blue-700"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        navigate("/terms");
                      }}
                    >
                      Terms & Conditions
                    </button>
                  </span>
                ),
                value: "agreed",
              },
            ]}
            size="sm"
            validation={{
              rules: {
                required: true,
              },
              message: {
                required: "You must agree to the terms to continue",
              },
            }}
          />

          <Button
            fullWidth
            type="submit"
            size="sm"
            colorDepth={900}
            radius="full"
          >
            Sign Up
          </Button>
        </Form>
        <Divider className="my-10">or Continue with</Divider>

        <Button
          variant="bordered"
          fullWidth
          size="sm"
          radius="full"
          startContent={<GoogleIcon />}
        >
          Continue with Google
        </Button>
        <div className="mt-6 text-center">
          <p className="text-black/60 text-sm">
            Already have an account?{" "}
            <Button variant="link" size="sm" onClick={() => navigate("/")}>
              Login
            </Button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
