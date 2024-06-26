import { ReactNode } from "react";

interface Props {
  title: string;
  icon?: ReactNode;
  position?: string;
  handleClick?: () => void;
  otherClasses?: string;
}

const ShimmerButton = ({
  title,
  icon,
  position,
  handleClick,
  otherClasses,
}: Props) => {
  return (
    <button 
    className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#1d4ed8,45%,#3b82f6,55%,#1d4ed8)] bg-[length:200%_100%] px-6 font-medium text-slate-100 bg-blue-700 transition-colors focus:outline-none">
      {title}
    </button>
  );
};

export default ShimmerButton;
