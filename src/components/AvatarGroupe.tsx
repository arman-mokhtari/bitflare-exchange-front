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
        className="flex items-center justify-center -space-x-2 overflow-hidden w-full"
      >
        {avatarData.map((item, idx) => {
          return (
            <Avatar
              key={idx}
              className="bg-white border-2 border-white size-10 md:size-14 flex items-center justify-center overflow-hidden rounded-full hover:translate-y-1 my-2 z-50"
            >
              <AvatarImage
                src={item.imgURL}
                className="h-full w-full object-contain"
              />
              <AvatarFallback delayMs={600}>{item.name}</AvatarFallback>
            </Avatar>
          );
        })}
        <div className="flex items-center justify-center size-10 md:size-14 rounded-full border-2 border-white  bg-blue-700 text-white text-xs font-medium hover:translate-y-1">
          +10000
        </div>
        <div className="hidden md:block">
          <p className="text-sm text-gray-800 dark:text-gray-100 font-medium translate-x-5">
            بیش از 10000 ارز دیجیتال
          </p>
        </div>
      </div>
    </div>
  );
}
