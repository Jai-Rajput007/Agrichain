"use client";
// components/Sidebar.tsx
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useState, createContext, useContext } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { IconMenu2, IconX } from "@tabler/icons-react";
import { links } from "@/config/links";

interface Links {
  label: string;
  href: string;
  icon: string;
}

interface SidebarContextProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  animate: boolean;
}

const SidebarContext = createContext<SidebarContextProps | undefined>(undefined);

export const useSidebar = () => {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider");
  }
  return context;
};

export const SidebarProvider = ({
  children,
  open: openProp,
  setOpen: setOpenProp,
  animate = true,
}: {
  children: React.ReactNode;
  open?: boolean;
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  animate?: boolean;
}) => {
  const [openState, setOpenState] = useState(false);
  const open = openProp !== undefined ? openProp : openState;
  const setOpen = setOpenProp !== undefined ? setOpenProp : setOpenState;

  return (
    <SidebarContext.Provider value={{ open, setOpen, animate }}>
      {children}
    </SidebarContext.Provider>
  );
};

export const Sidebar = ({
  open,
  setOpen,
  animate,
}: {
  open?: boolean;
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  animate?: boolean;
}) => {
  return (
    <SidebarProvider open={open} setOpen={setOpen} animate={animate}>
      <DesktopSidebar />
      <MobileSidebar />
    </SidebarProvider>
  );
};

export const DesktopSidebar = () => {
  const { open, setOpen, animate } = useSidebar();
  const mainLinks = links.filter((link) => link.label !== "Settings");
  const settingsLink = links.find((link) => link.label === "Settings");

  return (
    <motion.div
      className={cn(
        "fixed left-0 top-0 h-screen z-50 px-4 py-4 hidden md:flex md:flex-col bg-neutral-100 dark:bg-neutral-800",
        // Use cutter.svg for sidebar
        "cursor-[url('/cutter.svg')_8_24,_default]"
      )}
      animate={{
        width: animate ? (open ? "300px" : "80px") : "300px",
      }}
      initial={{ width: "80px" }}
      transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <div className="flex flex-col items-center pt-6">
        <img
          src="/agriculture.svg"
          alt="Logo"
          className={cn(
            "w-10 h-10 transition-all duration-300 ease-in-out",
            !open && "mx-auto"
          )}
        />
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{
            opacity: animate ? (open ? 1 : 0) : 1,
            y: animate ? (open ? 0 : 10) : 0,
            width: animate ? (open ? "auto" : 0) : "auto",
          }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
          className={cn(
            "mt-2 text-lg font-bold tracking-wide whitespace-nowrap overflow-hidden",
            "bg-gradient-to-r from-green-600 via-green-400 to-blue-500 bg-clip-text text-transparent",
            "dark:from-green-500 dark:via-green-300 dark:to-blue-400"
          )}
        >
          Agrochain
        </motion.span>
      </div>
      <motion.hr
        initial={false}
        animate={{
          opacity: animate ? (open ? 1 : 0) : 1,
          width: animate ? (open ? "80%" : 0) : "80%",
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="my-4 border-neutral-300 dark:border-neutral-600 opacity-50 mx-auto"
      />
      <nav className="flex flex-col gap-4 mt-4">
        {mainLinks.map((link, index) => (
          <SidebarLink key={index} link={link} />
        ))}
      </nav>
      {settingsLink && (
        <div className="mt-auto pb-6">
          <SidebarLink link={settingsLink} />
        </div>
      )}
    </motion.div>
  );
};

export const MobileSidebar = () => {
  const { open, setOpen } = useSidebar();
  const mainLinks = links.filter((link) => link.label !== "Settings");
  const settingsLink = links.find((link) => link.label === "Settings");

  return (
    <div className="md:hidden">
      <button
        onClick={() => setOpen(!open)}
        className="fixed top-4 left-4 z-50 p-2"
      >
        <IconMenu2 className="text-neutral-800 dark:text-neutral-200" />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", bounce: 0, duration: 0.4 }}
            className={cn(
              "fixed top-0 left-0 h-screen w-screen bg-white/80 dark:bg-neutral-900/80 backdrop-blur-sm z-40",
              // Use cutter.svg for mobile sidebar background
              "cursor-[url('/cutter.svg')_8_24,_default]"
            )}
            onClick={() => setOpen(false)}
          >
            <motion.div
              className={cn(
                "absolute left-0 top-0 h-full w-[300px] bg-white dark:bg-neutral-900 p-6 shadow-xl flex flex-col",
                // Ensure sidebar content uses cutter.svg
                "cursor-[url('/cutter.svg')_8_24,_default]"
              )}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex flex-col items-center pt-6">
                <img
                  src="/agriculture.svg"
                  alt="Logo"
                  className="w-10 h-10"
                />
                <motion.span
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
                  className={cn(
                    "mt-2 text-lg font-bold tracking-wide",
                    "bg-gradient-to-r from-green-600 via-green-400 to-blue-500 bg-clip-text text-transparent",
                    "dark:from-green-500 dark:via-green-300 dark:to-blue-400"
                  )}
                >
                  Agrochain
                </motion.span>
                <hr className="my-4 w-4/5 border-neutral-300 dark:border-neutral-600 opacity-50" />
              </div>
              <nav className="flex flex-col gap-4 mt-4">
                {mainLinks.map((link, index) => (
                  <SidebarLink key={index} link={link} />
                ))}
              </nav>
              {settingsLink && (
                <div className="mt-auto pb-6">
                  <SidebarLink link={settingsLink} />
                </div>
              )}
              <IconX
                className="text-neutral-800 dark:text-neutral-200 cursor-pointer absolute top-4 right-4"
                onClick={() => setOpen(false)}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const SidebarLink = ({ link }: { link: Links }) => {
  const { open, animate } = useSidebar();
  return (
    <Link
      href={link.href}
      className={cn(
        "flex items-center py-2 px-2 rounded-lg transition-all duration-300 ease-in-out",
        "bg-transparent",
        "hover:bg-gradient-to-r hover:from-green-200 hover:via-green-100 hover:to-blue-100",
        "dark:hover:bg-gradient-to-r dark:hover:from-green-800 dark:hover:via-green-700 dark:hover:to-blue-800",
        "hover:shadow-lg hover:scale-105",
        !open ? "justify-center" : "justify-start gap-4"
      )}
    >
      <img
        src={link.icon}
        alt={link.label}
        className={cn(
          "w-6 h-6 transition-all duration-300 ease-in-out",
          !open && "mx-auto",
          "hover:brightness-125"
        )}
      />
      <motion.span
        initial={false}
        animate={{
          opacity: animate ? (open ? 1 : 0) : 1,
          width: animate ? (open ? "auto" : 0) : "auto",
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className={cn(
          "text-neutral-700 dark:text-neutral-200 text-sm whitespace-nowrap overflow-hidden",
          "hover:text-green-800 dark:hover:text-green-100"
        )}
      >
        {link.label}
      </motion.span>
    </Link>
  );
};