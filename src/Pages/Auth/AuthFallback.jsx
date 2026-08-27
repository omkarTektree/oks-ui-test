import { Loader } from "oks-ui";

const AuthFallback = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <Loader />
    </div>
  );
};

export default AuthFallback;
