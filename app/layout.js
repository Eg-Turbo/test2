"use client";
import "./globals.css";
import Header from "./Header";
import { store } from "./RTK/store";
import { Provider } from "react-redux";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className="relative">
        <Provider store={store}>
          <Header />
          {children}
        </Provider>
        <script
          src="https://kit.fontawesome.com/a490982228.js"
          crossOrigin="anonymous"
        ></script>
      </body>
    </html>
  );
}
