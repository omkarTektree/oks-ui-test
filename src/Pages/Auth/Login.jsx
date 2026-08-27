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
import { useAuth } from "../../context/useAuth";
import GoogleIcon from "../../Components/Commom/GoogleIcon";

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
          title: "text-3xl sm:text-4xl lg:text-5xl font-bold",
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
            description="email: admin@example.com"
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
            description="password: admin123"
            validation={{
              rules: {
                required: true,
              },
              message: {
                required: "Password is required",
              },
            }}
          />
          <div className="flex items-center justify-between">
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
            size="sm"
            colorDepth={900}
            radius="full"
          >
            Login
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
            Don't have an account?{" "}
            <Button
              variant="link"
              size="sm"
              onClick={() => navigate("/register")}
            >
              Sign Up Here
            </Button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
