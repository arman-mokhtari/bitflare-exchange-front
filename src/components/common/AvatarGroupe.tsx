import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
const avatarData = [
  {
    name: "CT",
    imgURL: "/assets/svg/cur/bit.png",
  },
  {
    name: "CT",
    imgURL: "/assets/svg/cur/ether.png",
  },
  {
    name: "CT",
    imgURL: "/assets/svg/cur/teron.png",
  },

  {
    name: "CT",
    imgURL: "/assets/svg/cur/sol.png",
  },
  {
    name: "CT",
    imgURL: "/assets/svg/cur/cardano.png",
  },
  {
    name: "CT",
    imgURL: "/assets/svg/cur/tether.png",
  },
];
export function AvatarGroup() {
  return (
    <div className="w-full">
      <div
        dir="ltr"
        className="flex w-full items-center justify-center -space-x-2 overflow-hidden"
      >
        {avatarData.map((item, idx) => {
          return (
            <Avatar
              key={idx}
              className="z-50 my-2 flex size-10 items-center justify-center overflow-hidden rounded-full border-2 border-white bg-white hover:translate-y-1 md:size-14"
            >
              <AvatarImage
                src={item.imgURL}
                className="size-full object-contain"
              />
              <AvatarFallback delayMs={600}>{item.name}</AvatarFallback>
            </Avatar>
          );
        })}
        <div className="flex size-10 items-center justify-center rounded-full border-2 border-white bg-blue-700  text-xs font-medium text-white hover:translate-y-1 md:size-14">
          +10000
        </div>
        <div className="hidden md:block">
          <p className="translate-x-5 text-sm font-medium text-gray-800 dark:text-gray-100">
            بیش از 10000 ارز دیجیتال
          </p>
        </div>
      </div>
    </div>
  );
}
