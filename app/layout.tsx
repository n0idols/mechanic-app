import ReactQueryWrapper from "./ReactQueryWrapper";
import { SessionProvider } from "next-auth/react";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import "./globals.css";
import Navbar from "@/components/Navbar";
import AuthContext from "./AuthContext";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <div id="modal-root"></div>

        <AuthContext>
          <ReactQueryWrapper>
            <Navbar />
            <div className="mx-auto max-w-6xl px-2">{children}</div>
          </ReactQueryWrapper>
        </AuthContext>
      </body>
    </html>
  );
}
