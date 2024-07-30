
import Image from "next/image";
import Link from "next/link";

const MainLogo = ({ otherClasses }: { otherClasses?: string }) => {
  return (
    <Link href="/">
      <Image
        priority
        className={`${otherClasses} h-auto w-12`}
        src="/assets/images/logos/logo-light.png"
        width={120}
        height={50}
        alt="logo"
      />
    </Link>
  );
};

export default MainLogo;
