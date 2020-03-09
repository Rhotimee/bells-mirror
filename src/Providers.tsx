import React from "react";
import { AuthProvider } from "./Auth/AuthProvider";
import Routes from "./Routes";

interface ProvidersProps {}

const Providers: React.FC<ProvidersProps> = ({}) => {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
};

export default Providers;
