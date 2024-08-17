import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import UserInfoSettings from "./UserInfoSettings";
import UserPasswordSettings from "./UserPasswordSettings";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const UserSettingsContent = ({ user }: any) => {
  return (
    <Tabs dir="rtl" defaultValue="account" className="m-auto w-full lg:w-1/2">
      <TabsList className="!flex items-center justify-around">
        <TabsTrigger className="!my-2" value="account">
          اطلاعات کاربری
        </TabsTrigger>
        <TabsTrigger className="!my-2" value="password">
          تغییر کلمه عبور
        </TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <Card className="grid xl:col-span-2">
          <CardHeader>
            <CardTitle className="text-xl">اطلاعات کاربری</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-2">
            <UserInfoSettings user={user} />
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="password">
        <Card className="grid xl:col-span-2">
          <CardHeader>
            <CardTitle className="text-xl">تغییر کلمه عبور</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-2">
            <UserPasswordSettings userId={user._id} />
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
};

export default UserSettingsContent;
