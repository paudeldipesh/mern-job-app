import { useState, createContext, useContext } from "react";
import { Outlet } from "react-router-dom";
import { BigSidebar, Navbar, SmallSidebar } from "../components";
import Wrapper from "../assets/wrappers/Dashboard";

const DashboardContext = createContext();

export default function DashboardLayout() {
  // temporary
  const user = { name: "ramesh uncle" };
  const [showSidebar, setShowSidebar] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  function toggleDarkTheme() {
    console.log("Toggle dark theme");
  }

  function toggleSidebar() {
    setShowSidebar((cur) => !cur);
  }

  async function logoutUser() {
    console.log("Logout user");
  }

  return (
    <DashboardContext.Provider
      value={{
        user,
        showSidebar,
        isDarkTheme,
        toggleDarkTheme,
        toggleSidebar,
        logoutUser,
      }}
    >
      <Wrapper>
        <main className="dashboard">
          <SmallSidebar />
          <BigSidebar />
          <div>
            <Navbar />
            <div className="dashboard-page">
              <Outlet />
            </div>
          </div>
        </main>
      </Wrapper>
    </DashboardContext.Provider>
  );
}

export const useDashboardContext = () => useContext(DashboardContext);
