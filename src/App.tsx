import { useState } from "react";
import { EditButtons } from "./components/EditButtons";
import { Navigation } from "./components/navigation/Navigation";
import { SideBar } from "./components/sidebar/SideBar";
import { TopBar } from "./components/topbar/TopBar";

export const App = () => {
  const [showEditButtons, setShowEditButtons] = useState(false);

  return (
    <div className="h-screen bg-neutral-200">
      <header className="h-28">
        <TopBar />
      </header>
      <main className="h-[calc(100vh-7rem)]">
        {showEditButtons && <EditButtons />}
        <SideBar setShowEditButtons={setShowEditButtons} />
        <Navigation />
      </main>
    </div>
  );
};
