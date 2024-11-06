import { Route, BrowserRouter, Routes as Switch } from "react-router-dom";
import Home from "../pages/home";
import NotFound from "../pages/notFound";
import Produto from "../pages/produto";
import Carrinho from "../pages/carrinho";

export default function Routers() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" element={<Home />} />
        <Route path="/carrinho" element={<Carrinho />} />
        <Route path="/produto/:id" element={<Produto />} />
        <Route path="*" element={<NotFound />} />
      </Switch>
    </BrowserRouter>
  );
}