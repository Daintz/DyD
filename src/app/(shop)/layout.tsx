// Components
import { Footer, Sidebar, TopMenu } from "@/components";
import { Notification } from "@/components/ui/notification/Notification";

export default function ShopLayout({ children }: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen flex flex-col">
      <TopMenu />
      <Sidebar />

      <div className="px-0 sm:px-10">
        {children}
      </div>

      <Footer />
    </main>
  );
};
