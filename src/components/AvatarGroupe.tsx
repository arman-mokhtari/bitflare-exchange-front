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
    <div className="flex flex-row w-full">
      <div
        dir="ltr"
        className="flex items-center justify-center -space-x-2 overflow-hidden w-full"
      >
        {avatarData.map((item, idx) => {
          return (
            <Avatar
              key={idx}
              className="bg-white border-2 border-white h-14 w-14 flex items-center justify-center overflow-hidden rounded-full"
            >
              <AvatarImage
                src={item.imgURL}
                className="h-full w-full object-contain"
              />
              <AvatarFallback delayMs={600}>{item.name}</AvatarFallback>
            </Avatar>
          );
        })}
        <div className="flex items-center justify-center w-14 h-14 rounded-full border-2 border-white  bg-blue-700 text-white text-xs font-medium">
          +10000
        </div>
        <div>
          <p className="text-sm text-gray-800 dark:text-gray-100 font-medium translate-x-5">
            بیش از 10000 ارز دیجیتال
          </p>
        </div>
      </div>
    </div>
  );
}
