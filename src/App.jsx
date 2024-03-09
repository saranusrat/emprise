// react router////
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

// react router////
import RootLayouts from "./Components/Layouts/RootLayouts";
import Home from "./Components/Layouts/Pages/Home";
import Activities from "./Components/Layouts/Pages/Activities";
import TourDetails from "./Components/Layouts/Pages/TourDetails";


function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
     <Route   path="/" element={<RootLayouts/>} >
     <Route   path="/" element={<Home/>} />
     <Route   path="/activities" element={<Activities/>} />
     <Route   path="/specials" element={<TourDetails/>} />

     </Route>
    
      </Route>
    )
  );

  return (
    <>

<RouterProvider router={router} />
    </>
  )
}


export default App
