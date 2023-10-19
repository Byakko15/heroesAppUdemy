import {Navigate, Route, Routes} from "react-router-dom";
import {Navbar} from "../../ui/components/Navbar";
import {DcPag, Hero, Marvel} from "../pages/index";
import {Search} from "../components/Search";

export const HeroesRoutes = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/marvel" element={<Marvel />} />
          <Route path="/dc" element={<DcPag />} />

          <Route path="/search" element={<Search />} />
          <Route path="/hero/:id" element={<Hero />} />
        </Routes>
      </div>
    </div>
  );
};
