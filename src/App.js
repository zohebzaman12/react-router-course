import { Route,createRoutesFromElements } from "react-router-dom";
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import RootLayout from "./Layouts/RootLayout";
import Faq from "./pages/Faq";
import Contact from "./pages/Contact";
import HelpLayout from "./Layouts/HelpLayout";
import Error404 from "./pages/Error404";
import CareersLayout from "./Layouts/CareerLayout";
import Careers,{careerLoaders} from "./pages/Careers";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />} errorElement={<Error404 />}>
      <Route index element={<Home />}/>
      <Route path="about" element={<About />}/>
      
      <Route path="help" element={<HelpLayout />}> 
        <Route path="faq" element={<Faq />}/>
        <Route path="contact" element={<Contact/>}/>
      </Route>
      <Route path="careers" element={<CareersLayout />}>
        <Route 
        index 
        element={<Careers />}
        loader={careerLoaders}
        />
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
