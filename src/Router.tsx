import { DefaultLayout } from "./layout/DefaultLayout";
import { Checkout } from "./pages/Checkout";
import { Home } from "./pages/Home";
import { Routes, Route } from 'react-router-dom'
export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
      </Route>
    </Routes>
  )
}