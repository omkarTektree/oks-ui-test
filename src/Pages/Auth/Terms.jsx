import { useNavigate } from "react-router-dom";
import { Button, PageTitle } from "oks-ui";
import { MoveLeft } from "lucide-react";
import Logo from "../../assets/images/logo.png";
import { RevealOnView } from "../../Components/Commom/Reveal";

const sections = [
  {
    title: "1. Acceptance of Terms",
    body: "By creating an account or otherwise using this application, you agree to be bound by these Terms & Conditions. If you do not agree to these terms, please do not use the service.",
  },
  {
    title: "2. Use of the Service",
    body: "You agree to use the service only for lawful purposes and in a way that does not infringe the rights of, restrict, or inhibit anyone else's use of the service. You are responsible for all activity that occurs under your account.",
  },
  {
    title: "3. Account Responsibilities",
    body: "You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. Notify us immediately of any unauthorized use of your account.",
  },
  {
    title: "4. Privacy",
    body: "We collect and use account information to operate and improve the service. We do not sell your personal information to third parties. For details on how your data is handled, please refer to our Privacy Policy.",
  },
  {
    title: "5. Limitation of Liability",
    body: "The service is provided \"as is\" without warranties of any kind. To the fullest extent permitted by law, we are not liable for any indirect, incidental, or consequential damages arising from your use of the service.",
  },
  {
    title: "6. Changes to These Terms",
    body: "We may update these Terms & Conditions from time to time. Continued use of the service after changes are posted constitutes acceptance of the revised terms.",
  },
  {
    title: "7. Contact Us",
    body: "If you have any questions about these Terms & Conditions, please reach out to our support team.",
  },
];

const Terms = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-3xl mx-auto px-6 py-10">
        <div className="flex items-center justify-between">
          <img src={Logo} alt="Logo" className="h-8" />
          <Button
            variant="link"
            color="default"
            startContent={<MoveLeft size={18} />}
            onClick={() => navigate(-1)}
          >
            Back
          </Button>
        </div>

        <PageTitle
          as="h1"
          title="Terms & Conditions"
          subtitle="Last updated: August 26, 2026"
          classNames={{
            base: "flex-col items-start mt-10",
            title: "text-2xl sm:text-3xl lg:text-4xl font-bold",
            subtitle: "text-black/50",
          }}
        />

        <div className="mt-8 flex flex-col gap-8">
          {sections.map((section) => (
            <RevealOnView key={section.title}>
              <h2 className="text-lg font-semibold">{section.title}</h2>
              <p className="mt-2 text-black/70 leading-relaxed">
                {section.body}
              </p>
            </RevealOnView>
          ))}
        </div>

        <div className="mt-12">
          <Button
            fullWidth
            size="sm"
            colorDepth={900}
            radius="full"
            onClick={() => navigate(-1)}
          >
            Back to Sign Up
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Terms;
