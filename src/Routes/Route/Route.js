import DashBoardLayout from "../../Layout/DashBoardLayout";
import Blog from "../../Pages/Blog/Blog";
import AddProduct from "../../Pages/DashBoard/AddProduct/AddProduct";
import InputCategory from "../../Pages/DashBoard/InputCategory/InputCategory";
import MyOrders from "../../Pages/DashBoard/MyOrders/MyOrders";
import MyProducts from "../../Pages/DashBoard/MyProducts/MyProducts";
import Seller from "../../Pages/DashBoard/Seller/Seller";
import ShowAdvertisement from "../../Pages/DashBoard/ShowAdvertisement/ShowAdvertisement";
import Users from "../../Pages/DashBoard/Users/Users";
import Login from "../../Pages/LoginRegister/Login/Login";
import Register from "../../Pages/LoginRegister/Register/Register";
import Products from "../../Pages/Products/Products";
import ErrorPage from "../../SharedItems/ErrorPage/ErrorPage";
import PrivetRouter from "../PrivetRouter/PrivetRouter";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../../Layout/Main");
const { default: Home } = require("../../Pages/Home/Home");

const router=createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/home',
                element:<Home></Home>
            },
            {
                path:'/blog',
                element:<Blog></Blog>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:`/categoryProduct/:id`,
                element:<Products></Products>,
                loader:({params})=>fetch(`http://localhost:5000/product/${params.id}`)
                
            }
        ]
    },
    {
        path:'/dashBoard',
        element:<DashBoardLayout></DashBoardLayout>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:'/dashBoard',
                element:<Users></Users>
            },
            {
                path:'/dashBoard/inputCategory',
                element:<InputCategory></InputCategory>
            },
            {
                path:'/dashBoard/advertisement',
                element:<ShowAdvertisement></ShowAdvertisement>
            },
            {
                path:'/dashBoard/seller',
                element:<Seller></Seller>
            },
            {
                path:'/dashBoard/addProduct',
                element:<AddProduct></AddProduct>
            },
            {
                path:'/dashBoard/myOrder',
                element:<MyOrders></MyOrders>
            },
            {
                path:'/dashBoard/myProduct',
                element:<PrivetRouter><MyProducts></MyProducts></PrivetRouter>
            },
            {
                path:'/dashBoard/myProfile',
                element:<Users></Users>
            }
        ]
    }
])
export default router