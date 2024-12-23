"use client"

import { Provider } from "react-redux";
import { store } from "./store";
import "./globals.css";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="overflow-y-scroll overflow-hidden">
        <Provider store={store}>
          {children}
        </Provider>
      </body>
    </html >
  );
}
