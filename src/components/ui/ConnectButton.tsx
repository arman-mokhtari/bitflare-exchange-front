import { ReactNode } from "react";

interface Props {
  title: string;
  icon: ReactNode;
  position: string;
  handleClick?: () => void;
  otherClasses?: string;
}

const ConnectButton = ({
  title,
  icon,
  position,
  handleClick,
  otherClasses,
}: Props) => {
  return (
    <button
      onClick={handleClick}
      // removed dark:bg-slate-800 bg-slate-200
      className=" bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-lg p-px text-xs font-semibold leading-6  text-white inline-block"
    >
      <span className="absolute inset-0 overflow-hidden rounded-full">
        <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      </span>
      <div
        className={` inline-flex space-x-2 items-center z-10   py-2.5 ring-1 ring-white/10 h-full w-full cursor-pointer justify-center rounded-lg
            dark:bg-slate-950 bg-slate-100 text-slate-900 px-7 text-sm font-medium dark:text-white backdrop-blur-3xl gap-2   ${otherClasses}`}
      >
        {position === "left" && icon}
        {title}
        {position === "right" && icon}
      </div>
      <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
    </button>
  );
};

export default ConnectButton;
