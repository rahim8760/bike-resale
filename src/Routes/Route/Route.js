import DashBoardLayout from "../../Layout/DashBoardLayout";
import Blog from "../../Pages/Blog/Blog";
import DashBoard from "../../Pages/DashBoard/DashBoard/DashBoard";
import InputCategory from "../../Pages/DashBoard/InputCategory/InputCategory";
import Seller from "../../Pages/DashBoard/Seller/Seller";
import ShowAdvertisement from "../../Pages/DashBoard/ShowAdvertisement/ShowAdvertisement";
import Users from "../../Pages/DashBoard/Users/Users";
import Login from "../../Pages/LoginRegister/Login/Login";
import Register from "../../Pages/LoginRegister/Register/Register";
import ErrorPage from "../../SharedItems/ErrorPage/ErrorPage";

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
                element:<DashBoard></DashBoard>
            },
            {
                path:'/dashBoard/inputCategory',
                element:<InputCategory></InputCategory>
            },
            {
                path:'/dashBoard/user',
                element:<Users></Users>
            },
            {
                path:'/dashBoard/advertisement',
                element:<ShowAdvertisement></ShowAdvertisement>
            },
            {
                path:'/dashBoard/seller',
                element:<Seller></Seller>
            }
        ]
    }
])
export default router