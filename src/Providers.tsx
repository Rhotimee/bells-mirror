import React from "react";
import { AuthProvider } from "./Auth/AuthProvider";
import Routes from "./Routes";
import { Root } from "native-base";

interface ProvidersProps {}

const Providers: React.FC<ProvidersProps> = ({}) => {
  return (
    <AuthProvider>
      <Root>
        <Routes />
      </Root>
    </AuthProvider>
  );
};

export default Providers;
