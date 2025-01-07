"use client";

import { LayoutProps } from "./@types";

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col w-full min-h-screen h-auto items-center justify-items-center ">
      {children}
    </div>
  );
};
