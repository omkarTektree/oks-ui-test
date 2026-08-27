import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form, FormFieldSet, PageTitle, toast } from "oks-ui";
import { MailCheck } from "lucide-react";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [submittedEmail, setSubmittedEmail] = useState(null);

  const handleSubmit = (formData) => {
    toast.success("Reset link sent. Please check your inbox.");
    setSubmittedEmail(formData.email);
  };

  if (submittedEmail) {
    return (
      <div className="w-full">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-black/5">
          <MailCheck size={26} />
        </div>
        <PageTitle
          as="h1"
          title="Check Your Email"
          subtitle={`We've sent a password reset link to ${submittedEmail}.`}
          classNames={{
            base: "flex-col items-start mt-6",
            title: "text-2xl sm:text-3xl lg:text-4xl font-bold",
            subtitle: "text-black/60",
          }}
        />
        <Button
          fullWidth
          size="sm"
          colorDepth={900}
          radius="full"
          className="mt-8"
          onClick={() => navigate("/")}
        >
          Back to Login
        </Button>
      </div>
    );
  }

  return (
    <div className="w-full">
      <PageTitle
        as="h1"
        title="Forgot Password?"
        subtitle="No worries, enter your email and we'll send you a reset link."
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

          <Button
            fullWidth
            type="submit"
            size="sm"
            colorDepth={900}
            radius="full"
          >
            Send Reset Link
          </Button>
        </Form>
        <div className="mt-6 text-center">
          <p className="text-black/60 text-sm">
            Remember your password?{" "}
            <Button variant="link" size="sm" onClick={() => navigate("/")}>
              Login
            </Button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
