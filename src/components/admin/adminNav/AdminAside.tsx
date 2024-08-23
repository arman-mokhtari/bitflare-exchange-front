import AdminNavigationLinks from "@/components/admin/adminNav/NavigationLinks";
import MainLogo from "@/components/common/MainLogo";
import { Separator } from "@/components/ui/separator";

const AdminAside = () => {
  return (
    <aside className="hidden w-[280px] shrink-0 border-2 bg-muted md:flex">
      <nav className="flex w-full flex-col">
        <MainLogo otherClasses="m-auto mt-2" />
        <Separator className="my-2 h-0.5" />
        <div className="mt-2 flex flex-col gap-2">
          <AdminNavigationLinks />
        </div>
      </nav>
    </aside>
  );
};

export default AdminAside;
