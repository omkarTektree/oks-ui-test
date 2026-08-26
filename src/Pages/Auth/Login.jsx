import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Checkbox,
  Divider,
  Form,
  FormFieldSet,
  PageTitle,
  toast,
} from "oks-ui";
import { Target } from "lucide-react";
import { useAuth } from "../../context/useAuth";

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (formData) => {
    const isValid = login(formData.email, formData.password);
    if (isValid) {
      navigate("/dashboard");
    } else {
      toast.error("Invalid email or password");
    }
  };

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
        <Form className="mt-6 flex flex-col gap-4" onSubmit={handleSubmit}>
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
          <div className="flex items-center justify-between -mt-3">
            <div>
              <Checkbox name="rememberMe" label="Remember Me" size="sm" />
            </div>
            <div>
              <Button
                variant="link"
                size="sm"
                onClick={() => navigate("/forgot-password")}
              >
                Forgot Password
              </Button>
            </div>
          </div>
          <Button
            fullWidth
            type="submit"
            colorDepth={900}
            className="p-4"
            radius="full"
          >
            Login
          </Button>
        </Form>
        <Divider className="my-10">or Continue with</Divider>

        <Button
          variant="bordered"
          fullWidth
          radius="full"
          startContent={<Target size={18} />}
        >
          Continue with Google
        </Button>
        <div className="mt-6 text-center">
          <p className="text-black/60 text-sm">
            Don't have an account?{" "}
            <Button
              variant="link"
              size="sm"
              color="danger"
              onClick={() => navigate("/register")}
            >
              Sign Up
            </Button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
