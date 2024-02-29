import { Route,createRoutesFromElements } from "react-router-dom";
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import RootLayout from "./pages/RootLayout";
import Faq from "./pages/Faq";
import Contact from "./pages/Contact";
import HelpLayout from "./pages/HelpLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />}/>
      <Route path="about" element={<About />}/>
      <Route path="help" element={<HelpLayout />}> 
        <Route path="faq" element={<Faq />}/>
        <Route path="contact" element={<Contact/>}/>
      </Route>
    </Route>
  )
)

function App() {
  return (
      <RouterProvider  router={router}/>
  );
}

export default App
