import React from "react";
import { GiExitDoor } from "react-icons/gi";
import { AiFillCaretDown } from "react-icons/ai";
import { button } from "@material-tailwind/react";

const Login = () => {
  return (
    <form
      className="mx-2 mb-32 w-full border border-l-0
     border-t-0 border-slate-400 bg-white pb-8 shadow-md sm:w-1/2 md:w-1/4"
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
            placeholder=""
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
            placeholder=""
          />
        </div>
        <div className="flex items-center">
          <div className="mb-3 flex-1">
            <a
              href="#"
              className="text-md cursor-pointer text-weg-blue hover:text-sky-900 hover:underline"
            >
              Esqueceu sua senha?
            </a>
          </div>
          <button className="flex items-center" type="button">
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
  );
};

export default Login;
