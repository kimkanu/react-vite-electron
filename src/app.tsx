///<reference path="../global.d.ts"/>

import { useState } from "react";
import { MoonIcon } from "@heroicons/react/24/outline";
import reactLogo from "./assets/react.svg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex items-center justify-center w-full h-full bg-white text-slate-800 dark:bg-slate-900 dark:text-white transition-[background-color] duration-[250ms]">
      <div className="fixed z-10 top-8 right-8">
        <button
          onClick={async () => {
            console.log(await window.darkMode.toggle());
          }}
          className="transition-[filter] duration-300 hover:drop-shadow-[0_0_1em_theme(colors.slate.600)] dark:hover:[filter:drop-shadow(0_0_1em_theme(colors.amber.100))_drop-shadow(0_0_1em_theme(colors.amber.100))]"
        >
          <MoonIcon
            strokeWidth={2}
            className="w-8 h-8 stroke-slate-600 dark:stroke-amber-200 transition-[stroke] duration-[250ms]"
          />
        </button>
      </div>
      <div className="flex flex-col w-full max-h-full py-10 overflow-y-auto h-fit">
        <div className="flex flex-wrap items-center justify-center">
          <a href="https://reactjs.org" target="_blank">
            <img
              src={reactLogo}
              className="w-32 p-4 will-change-[filter] transition-[filter] duration-300 hover:drop-shadow-[0_0_2em_#61dafbff] animate-spin [animation:spin_20s_linear_infinite]"
              alt="React logo"
            />
          </a>
          <a href="https://vitejs.dev" target="_blank">
            <img
              src="./vite.svg"
              className="w-32 p-4 will-change-[filter] transition-[filter] duration-300 hover:drop-shadow-[0_0_2em_#646cffaa]"
              alt="Vite logo"
            />
          </a>
          <a href="https://electronjs.org/" target="_blank">
            <img
              src="./icon.png"
              className="w-32 p-4 will-change-[filter] transition-[filter] duration-300 hover:drop-shadow-[0_0_2em_rgba(64,69,89,0.7)] dark:hover:drop-shadow-[0_0_2em_rgba(177,233,247,0.5)]"
              alt="React logo"
            />
          </a>
        </div>
        <h1 className="py-8 text-5xl font-bold text-center">
          React + Vite + Electron
        </h1>
        <div className="flex flex-col items-center p-8">
          <button
            className="text-base bg-slate-100 dark:bg-slate-700 rounded-lg px-5 py-2.5 border border-transparent transition-[border-color] duration-[250ms] hover:border-[#646cff]"
            onClick={() => setCount((count) => count + 1)}
          >
            count is {count}
          </button>
          <p className="p-4">
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
        </div>
        <p className="p-4 text-center opacity-50">
          Click on the React, Vite, and Electron logos to learn more
        </p>
      </div>
    </div>
  );
}

export default App;
