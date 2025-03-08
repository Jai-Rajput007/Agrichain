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
    <SidebarContext.Provider value={{ open, setOpen, animate: animate }}>
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
  return (
    <motion.div
      className={cn(
        "fixed left-0 top-0 h-screen z-50 px-4 py-4 hidden md:flex md:flex-col bg-neutral-100 dark:bg-neutral-800",
      )}
      animate={{
        width: animate ? (open ? "300px" : "80px") : "300px",
      }}
      initial={{ width: "80px" }}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <div className="flex items-center justify-center mb-8 pt-16">
        <img 
          src="/agriculture.svg" 
          alt="Logo" 
          className={cn(
            "w-10 h-10 transition-all duration-300",
            !open && "mx-auto"
          )} 
        />
      </div>
      <nav className="flex flex-col gap-4">
        {links.map((link, index) => (
          <SidebarLink key={index} link={link} />
        ))}
      </nav>
    </motion.div>
  );
};

export const MobileSidebar = () => {
  const { open, setOpen } = useSidebar();
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
            className="fixed top-0 left-0 h-screen w-screen bg-white/80 dark:bg-neutral-900/80 backdrop-blur-sm z-40"
            onClick={() => setOpen(false)}
          >
            <motion.div
              className="absolute left-0 top-0 h-full w-[300px] bg-white dark:bg-neutral-900 p-6 shadow-xl"
              onClick={e => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-8 pt-16">
                <img src="/agriculture.svg" alt="Logo" className="w-10 h-10" />
                <IconX 
                  className="text-neutral-800 dark:text-neutral-200 cursor-pointer" 
                  onClick={() => setOpen(false)}
                />
              </div>
              <nav className="flex flex-col gap-4">
                {links.map((link, index) => (
                  <SidebarLink key={index} link={link} />
                ))}
              </nav>
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
        "flex items-center py-2 px-2 rounded-lg transition-all duration-150",
        !open ? "justify-center" : "justify-start gap-4"
      )}
    >
      <img 
        src={link.icon} 
        alt={link.label} 
        className={cn(
          "w-6 h-6 transition-all duration-300",
          !open && "mx-auto"
        )} 
      />

      <motion.span
        animate={{
          display: animate ? (open ? "inline-block" : "none") : "inline-block",
          opacity: animate ? (open ? 1 : 0) : 1,
        }}
        className="text-neutral-700 dark:text-neutral-200 text-sm group-hover:translate-x-1 transition-transform duration-150 whitespace-pre"
      >
        {link.label}
      </motion.span>
    </Link>
  );
};
