import React, { ComponentType, useEffect, useState } from "react";
import Cookies from "js-cookie";
import Warning from "@/components/Warning";

export const withAuth = (Component: ComponentType<any>) => {
  const AuthComponent = (props: JSX.IntrinsicAttributes) => {
    const [token, setToken] = useState("");
    const [showWarning, setShowWarning] = useState(false);

    useEffect(() => {
      const token = Cookies.get("token");
      if (token) {
        setToken(token);
      } else {
        setShowWarning(true);
      }
    }, []);

    const handleCloseWarning = () => {
      setShowWarning(false);
      window.location.href = "/";
    };

    return (
      <>
        {showWarning && (
          <Warning
            message="Usuário ou senha inválida. Tente novamente ou entre em contato com nossa central de atendimento pelo e-mail."
            showWarning={showWarning}
            onCloseWarning={handleCloseWarning}
          />
        )}
        {token && <Component {...props} />}
      </>
    );
  };

  return AuthComponent;
};
