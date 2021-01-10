import React from "react";

import { useAuth0 } from "@auth0/auth0-react";

const User: React.FC = () => {
  const { user, isAuthenticated } = useAuth0();
  if (isAuthenticated) {
    return <div>{JSON.stringify(user, null, 2)}</div>;
  } else {
    return null;
  }
};

export default User;
