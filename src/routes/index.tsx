import { lazy } from "react"

const Landing = lazy(() => import("../pages/hero-section"))
const About = lazy(() => import("@/pages/about-section"))
const Product = lazy(() => import("@/pages/product-section"))

const routes = [
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "/about",
    element: <About/>,
  },
  {
    path: "/product",
    element: <Product/>
  },
]

export default routes
