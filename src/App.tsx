import type { HomePageProps } from "./types";
import HomePage from "./pages/Home";
import { useHomePageHook } from "./hooks/useHomePageHook";
import { Route, Routes } from "react-router";
import AboutPage from "./pages/About";
import Header from "./components/Header";
import NotFoundPage from "./pages/NotFound";
import CoinDetailPage from "./pages/CoinDetails";

function App() {
  const props: HomePageProps = useHomePageHook();
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage {...props} />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/coin/:id" element={<CoinDetailPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
