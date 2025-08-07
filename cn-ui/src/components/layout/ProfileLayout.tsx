import { ReactNode } from "react";
import Navbar from "./Navbar";
import ProfileNavbar from "./ProfileNavbar";

interface ProfileLayoutProps {
  children: ReactNode;
  rightSidebar?: ReactNode;
}

export default function ProfileLayout({ children, rightSidebar }: ProfileLayoutProps) {
  return (
    <div className="min-h-screen bg-logo-dark text-gray-100">
      {/* Navbar */}
      <ProfileNavbar />

      {/* Main Container */}
      <div className="max-w-[1600px] mx-auto px-4 md:px-6 lg:px-8 pt-6 flex gap-6">
        {/* Left / Main Content */}
        <div className="flex-1 space-y-6">{children}</div>

        {/* Right Sidebar */}
        {rightSidebar && (
          <aside className="w-[320px] hidden lg:block space-y-6">
            {rightSidebar}
          </aside>
        )}
      </div>
    </div>
  );
}
