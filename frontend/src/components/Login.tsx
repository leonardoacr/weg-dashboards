import React, { FormEvent, useState } from "react";
import { GiExitDoor } from "react-icons/gi";
import { AiFillCaretDown } from "react-icons/ai";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import Warning from "./Warning";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showWarning, setShowWarning] = useState(false);

  const router = useRouter();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new URLSearchParams();
    formData.append("username", username);
    formData.append("password", password);
    // const urlBase = "http://localhost:8000/login/";
    const urlBase = "https://pythonprojects.pythonanywhere.com/login/";

    const response = await fetch(urlBase, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: formData.toString(),
    });

    if (response.ok) {
      const { token } = await response.json();
      Cookies.set("token", token); // Set the token as a cookie
      Cookies.set("username", username);
      router.push("/dashboards");
    } else {
      setShowWarning(true);
      console.error("Login failed.");
    }
  };

  const handleCloseWarning = () => {
    setShowWarning(false);
  };

  return (
    <>
      {showWarning && (
        <Warning
          message={`Usuário ou senha inválida.Tente novamente ou entre em contato com 
          nossa central de atendimento pelo e-mail`}
          showWarning={showWarning}
          onCloseWarning={handleCloseWarning}
        />
      )}
      <div className="flex h-screen items-center justify-center">
        <form
          className="mb-32 border border-l-0 border-t-0 border-slate-400 bg-white pb-8 
      shadow-md sm:w-1/2 lg:w-1/4"
          onSubmit={handleSubmit}
        >
          <div className="relative h-full w-full bg-weg-blue">
            <h2 className="p-4 text-lg font-bold">Acesso ao Dashboards WEG</h2>
            <AiFillCaretDown
              className="absolute top-12 left-[40px] mb-4 -translate-x-1/2 transform text-weg-blue"
              size={30}
            />
          </div>
          <div className="px-8 ">
            <div className="mb-4 pt-6">
              <label
                className="mb-2 block text-sm font-bold text-gray-700"
                htmlFor="username"
              >
                Nome de Usuário *
              </label>
              <input
                className="focus:shadow-outline w-full appearance-none rounded-[2px] border
                 border-gray-300 py-2 px-3 leading-tight text-gray-700 focus:outline-none
                  focus:ring-1 focus:ring-blue-500"
                id="username"
                type="text"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
                placeholder="admin"
              />
            </div>

            <div className="mb-4">
              <label
                className="mb-2 block text-sm font-bold text-gray-700"
                htmlFor="password"
              >
                Senha *
              </label>
              <input
                className="focus:shadow-outline w-full appearance-none rounded-[2px] border
                 border-gray-300 py-2 px-3 leading-tight text-gray-700 focus:border-blue-500 
                 focus:outline-none focus:ring-1"
                id="password"
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                placeholder="admin"
              />
            </div>
            <div className="flex items-center">
              <div className="mb-3 flex-1">
                <a
                  href="#"
                  className="text-md cursor-pointer pr-4 text-weg-blue hover:text-sky-900 hover:underline"
                >
                  Esqueceu sua senha?
                </a>
              </div>
              <button type="submit" className="flex items-center">
                <div className="flex h-9 w-8 items-center justify-center rounded-l-[4px] bg-sky-700">
                  <GiExitDoor />
                </div>
                <div className="flex flex-col justify-center">
                  <div
                    className="focus:shadow-outline rounded-r-[4px] bg-weg-blue py-2 px-4
      text-sm font-normal text-white hover:bg-sky-700 focus:outline-none"
                  >
                    ENTRAR
                  </div>
                </div>
              </button>
            </div>
            <div className="py-6">
              <hr className="border-t border-gray-300" />
            </div>
            <div className="flex w-full items-center">
              <h2 className="w-full text-center text-sm font-light text-gray-500">
                Novo Cliente?
              </h2>
            </div>
            <div className="flex w-full items-center justify-center pt-4 ">
              <a
                href="#"
                className="text-md cursor-pointer text-center text-weg-blue hover:text-sky-900 hover:underline"
              >
                CRIAR CONTA
              </a>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
