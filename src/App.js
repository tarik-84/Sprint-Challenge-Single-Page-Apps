import React from "react";
import Header from "./components/Header.js";
import AppRouter from "./components/AppRouter.js";


export default function App() {
  return (
    <main data-testid='app'>
      <Header />
     <AppRouter />
    </main>
  );
}
