// src/layout/FeedLayout.jsx
import NamanChatWidget from "../feed/Right/NamanBotCard";
import ProfileNavbar from "./ProfileNavbar";

export default function FeedLayout({
  leftSidebar,
  rightSidebar,
  children,
  showNavbar = true,
}) {
  return (
    <div className="min-h-screen bg-logo-dark text-gray-100">
      {/* Top navbar (same as Profile layout) */}
      {showNavbar && <ProfileNavbar />}

      {/* Main container */}
      <div className="max-w-[1600px] mx-auto px-4 md:px-6 lg:px-8 pt-6">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[280px_minmax(0,1fr)_320px]">
          {/* Left rail */}
          <aside className="space-y-6">{leftSidebar}</aside>

          {/* Center feed */}
          <main className="space-y-6">{children}</main>

          {/* Right rail (hidden on small screens, like ProfileLayout) */}
          {rightSidebar ? (
            <aside className="hidden lg:block space-y-6">{rightSidebar}</aside>
          ) : null}
          <NamanChatWidget onOpen={() => {}} />
        </div>
      </div>
    </div>
  );
}
