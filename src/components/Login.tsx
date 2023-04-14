import React, { FormEvent, useState } from "react";
import { GiExitDoor } from "react-icons/gi";
import { AiFillCaretDown, AiOutlineClose } from "react-icons/ai";
import Cookies from "js-cookie";
import { useRouter } from "next/router";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showWarning, setShowWarning] = useState(false);

  const router = useRouter();

  const handleCloseWarning = () => {
    setShowWarning(false);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log("sending data: " + username + " " + password);

    const formData = new URLSearchParams();
    formData.append("username", username);
    formData.append("password", password);

    const response = await fetch("http://localhost:8000/login/", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: formData.toString(),
    });

    if (response.ok) {
      const { token } = await response.json();
      Cookies.set("token", token); // Set the token as a cookie
      router.push("/dashboards");
    } else {
      setShowWarning(true);
      console.error("Login failed.");
    }
  };

  return (
    <>
      {showWarning && (
        <div className="flex w-full items-center justify-center">
          <div className="flex justify-center" />
          <div className="relative mx-auto w-9/12 bg-red-100 p-4 text-black">
            <button
              className="absolute top-3 right-0 p-2  text-gray-500 text-opacity-50 hover:text-gray-800 focus:outline-none"
              onClick={handleCloseWarning}
            >
              <AiOutlineClose size={16} />
            </button>
            <h2 className="text-pink-800">
              Usuário ou senha inválida.Tente novamente ou entre em contato com
              nossa central de atendimento pelo e-mail
            </h2>
          </div>
        </div>
      )}
      <p className=" text-gray-700">
        username: admin <br></br> password: admin
      </p>
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
                className="focus:shadow-outline w-full appearance-none rounded-[2px] border border-gray-300 py-2
             px-3 leading-tight text-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
                id="username"
                type="text"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
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
                className="focus:shadow-outline w-full appearance-none rounded-[2px] border border-gray-300 py-2 
          px-3 leading-tight text-gray-700 focus:border-blue-500 focus:outline-none focus:ring-1"
                id="password"
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
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
