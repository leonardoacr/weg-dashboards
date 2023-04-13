import React from "react";
import { GiExitDoor } from "react-icons/gi";
import { AiFillCaretDown } from "react-icons/ai";

const Login = () => {
  return (
    <form className="mx-2 mb-4 w-full border border-l-0 border-t-0 border-slate-400 bg-white pb-8 shadow-md sm:w-1/2 md:w-1/4">
      <div className="relative h-full w-full bg-weg-blue">
        <h2 className="p-4 font-bold">Acesso ao Dashboards WEG</h2>
        <AiFillCaretDown
          className="absolute top-12 left-[40px] mb-4 -translate-x-1/2 transform text-weg-blue"
          size={24}
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
           border-gray-300 py-1.5 px-3 leading-tight text-gray-700 focus:outline-none"
            id="username"
            type="text"
            placeholder=""
          />
        </div>
        <div className="mb-6">
          <label
            className="mb-2 block text-sm font-bold text-gray-700"
            htmlFor="password"
          >
            Senha *
          </label>
          <input
            className="focus:shadow-outline w-full appearance-none rounded-[2px] border border-gray-300 
          py-1.5 px-3 leading-tight text-gray-700  focus:outline-none"
            id="password"
            type="password"
            placeholder=""
          />
        </div>
        <div className="flex items-center">
          <div className="flex-1">
            <p className="text-sm text-weg-blue">Esqueceu sua senha?</p>
          </div>
          <div className="flex items-center">
            <div className="flex h-8 w-7 items-center justify-center bg-sky-700">
              <GiExitDoor className="" />
            </div>

            <div className="flex flex-col justify-center">
              <button
                className="focus:shadow-outline rounded-r-[4px] bg-weg-blue py-1.5 px-4
                text-sm font-normal text-white hover:bg-sky-700 focus:outline-none"
                type="button"
              >
                ENTRAR
              </button>
            </div>
          </div>
        </div>
        <div className="py-6">
          <hr className="border-t border-gray-300" />
        </div>
        <div className="flex w-full items-center">
          <h2 className="w-full text-center text-sm font-light text-gray-500">
            Novo Cliente?
          </h2>
        </div>
        <div className="flex w-full items-center pt-4">
          <h2 className="text-md w-full text-center  text-weg-blue">
            CRIAR CONTA
          </h2>
        </div>
      </div>
    </form>
  );
};

export default Login;
