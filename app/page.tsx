"use client";

import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { MdOutlineDarkMode } from "react-icons/md";

export default function Home() {
  const darkMode = () => {
    const darkModeTag = document.querySelector(".light");

    darkModeTag ? darkModeTag.classList.toggle("dark") : null;
  };

  const verification = () => {
    const darkModeTag = document.querySelector(".dark");
    if (!false) {
      toast.success("Seu computador está Ligado", {
        position: "top-right",
        theme: darkModeTag ? "dark" : "light",
      });
      return;
    }
    toast.error("Seu computador está desligado!", {
      position: "top-right",
      theme: darkModeTag ? "dark" : "light",
    });
  };

  return (
    <>
      <main className="bg-white dark:bg-darkMode transition-all duration-500 w-screen h-screen justify-center items-center overflow-hidden">
        <header className="flex w-full justify-end">
          <button
            onClick={darkMode}
            className="mr-6 mt-6 border-[1.5px] border-gray-600 dark:border-gray-300 rounded transition-all duration-500 dark:hover:bg-white hover:bg-slate-600 "
          >
            <MdOutlineDarkMode
              className="transition-all duration-500 dark:text-white dark:hover:text-slate-950 hover:text-white"
              size={24}
            />
          </button>
        </header>
        <section className="flex flex-col justify-center items-center w-full h-full">
          <h1 className="text-2xl transition-all duration-500 text-center dark:text-white">
            Verifique se seu computador/celular está ligado:
          </h1>
          <button
            onClick={verification}
            className="bg-brand-1 rounded p-1 cursor-pointer transition-all duration-500 hover:bg-brand-2 m-8"
          >
            Verificar
          </button>
        </section>
      </main>
      <ToastContainer />
    </>
  );
}
