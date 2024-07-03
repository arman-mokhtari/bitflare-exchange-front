import { ReactNode } from "react";

interface Props {
  title: string;
  icon?: ReactNode;
  position?: string;
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
      className=" group relative inline-block w-full cursor-pointer rounded-lg bg-blue-200 p-px text-xs font-semibold leading-6 text-white no-underline  shadow-zinc-900 dark:bg-slate-800 dark:shadow-2xl md:w-2/3 "
    >
      <span className="absolute inset-0 overflow-hidden rounded-full">
        <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      </span>
      <div
        className={` z-10 inline-flex size-full cursor-pointer   items-center justify-center gap-2 space-x-2 rounded-lg px-7 py-2.5 text-sm
            font-medium text-slate-600 ring-1 ring-white/10 backdrop-blur-3xl dark:bg-slate-950 dark:text-white   ${otherClasses}`}
      >
        {position === "left" && icon}
        {title}
        {position === "right" && icon}
      </div>
      <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-600/0 via-emerald-600/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40 dark:bg-gradient-to-r dark:from-emerald-400/0 dark:via-emerald-600/90 dark:to-emerald-600/0" />
    </button>
  );
};

export default ConnectButton;
