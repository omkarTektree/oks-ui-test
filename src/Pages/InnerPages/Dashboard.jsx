import { useNavigate } from "react-router-dom";
import { Button, PageTitle } from "oks-ui";
import { useAuth } from "../../context/useAuth";

const Dashboard = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div className="p-6 flex items-center justify-between">
      <PageTitle
        as="h1"
        title="Dashboard"
        subtitle="You are logged in."
        classNames={{ base: "flex-col items-start" }}
      />
      <Button colorDepth={900} onClick={handleLogout}>
        Logout
      </Button>
    </div>
  );
};

export default Dashboard;
