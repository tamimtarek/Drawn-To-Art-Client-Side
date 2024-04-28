import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Error from "../Pages/Error/Error";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Cards from "../Pages/Cards/Cards";
import MyList from "../Pages/MyList/MyList";
import AddCraft from "../Pages/AddCraft/AddCraft";
import PrivetRoute from "./PrivetRoute";
import UpdateItems from "../Pages/UpdateItems/UpdateItems";
import CardDetails from "../Pages/CardDetails/CardDetails";
import AllArt from "../AllArt/AllArt";
import CategoryBase from "../Pages/Subcategory/CategoryBase";
import CategoryCardDetails from "../Pages/Subcategory/CategoryCardDetails";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <Error></Error>,
      children: [
        {
          path: "/",
          element: <Home></Home>
        },
        {
          path: "/login",
          element:<Login></Login>
        },
        {
          path: "/register",
          element: <Register></Register>
        },
        {
          path: "/mylist",
          element: <PrivetRoute><MyList></MyList></PrivetRoute>
        },
        {
          path: "/addArtCraft",
          element: <PrivetRoute><AddCraft></AddCraft></PrivetRoute>
        },
        {
          path: "/update/:id",
          element: <UpdateItems></UpdateItems>,
          loader: () => fetch("http://localhost:5000/crafts")
        },
        {
          path: "/details/:id",
          element: <CardDetails></CardDetails>,
          loader: () => fetch("http://localhost:5000/crafts")
        },
        {
          path: "/allart",
          element: <AllArt></AllArt>
        },
        {
          path: "/category/:subcategory_name",
          element: <CategoryBase></CategoryBase>,
          loader: () => fetch("http://localhost:5000/subcategory")
        },
        {
          path: "/artCategory/:id",
          element: <CategoryCardDetails></CategoryCardDetails>,
          loader: ({params}) => fetch(`http://localhost:5000/subcategory/${params.subcategory_name}`)
        }
      ]
    },
  ]);

export default router;