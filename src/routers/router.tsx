import { Route, BrowserRouter, Routes as Switch } from "react-router-dom";
import Home from "../pages/home";
import NotFound from "../pages/notFound";
import Produto from "../pages/produto";

export default function Routers() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/produto/:id" element={<Produto />} />
      </Switch>
    </BrowserRouter>
  );
}