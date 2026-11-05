import "./i18n/config.ts";
import "./css/index.css";
import { StrictMode, useEffect } from "react";
import { createRoot } from "react-dom/client";
import { useTranslation } from "react-i18next";
import Header from "./sections/Header.tsx";
import Main from "./sections/Main.tsx";
import { Toaster } from "./components/Toaster.tsx";

function Root() {
  const { i18n, t } = useTranslation();
  useEffect(() => {
    document.title = `${t("title")}`;
  }, [i18n]);
  return (
    <>
      <Header />
      <Main />
      <Toaster />
    </>
  );
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Root />
  </StrictMode>,
);
