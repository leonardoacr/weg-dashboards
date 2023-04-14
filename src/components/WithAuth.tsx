import React, { ComponentType, useEffect, useState } from "react";
import Cookies from "js-cookie";
import Warning from "@/components/Warning";

export const withAuth = (Component: ComponentType<any>) => {
  const AuthComponent = (props: JSX.IntrinsicAttributes) => {
    const token = Cookies.get("token");
    const [showWarning, setShowWarning] = useState(!token);

    console.log("token stored: " + token);

    useEffect(() => {
      if (!token) {
        setShowWarning(true);
      }
    }, [token]);

    const handleCloseWarning = () => {
      setShowWarning(false);
      window.location.href = "/";
    };

    return (
      <>
        <Warning
          message="Usuário ou senha inválida. Tente novamente ou entre em contato com nossa central de atendimento pelo e-mail."
          showWarning={showWarning}
          onCloseWarning={handleCloseWarning}
        />
        {token ? <Component {...props} /> : null}
      </>
    );
  };

  return AuthComponent;
};
