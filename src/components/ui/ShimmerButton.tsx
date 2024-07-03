import { ReactNode } from "react";

interface Props {
  title: string;
  icon?: ReactNode;
  position?: string;
}

const ShimmerButton = ({ title, icon, position }: Props) => {
  return (
    <button className="inline-flex h-12 animate-shimmer items-center justify-center gap-2 rounded-md bg-blue-700 bg-[linear-gradient(110deg,#1d4ed8,45%,#3b82f6,55%,#1d4ed8)] bg-[length:200%_100%] px-8 font-medium text-slate-100 transition-colors focus:outline-none">
      {position === "left" && icon}
      {title}
      {position === "right" && icon}
    </button>
  );
};

export default ShimmerButton;
