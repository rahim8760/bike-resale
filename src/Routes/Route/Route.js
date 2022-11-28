import AdminLayout from "../../Layout/AdminLayout";
import Buyer from "../../Layout/Buyer";
import DashBoardLayout from "../../Layout/DashBoardLayout";
import SellerLayout from "../../Layout/SellerLayout";
import Blog from "../../Pages/Blog/Blog";
import AddProduct from "../../Pages/DashBoard/AddProduct/AddProduct";
import InputCategory from "../../Pages/DashBoard/InputCategory/InputCategory";
import MyBuyers from "../../Pages/DashBoard/MyBuyers/MyBuyers";
import MyOrders from "../../Pages/DashBoard/MyOrders/MyOrders";
import MyProducts from "../../Pages/DashBoard/MyProducts/MyProducts";
import Seller from "../../Pages/DashBoard/Seller/Seller";
import ShowAdvertisement from "../../Pages/DashBoard/ShowAdvertisement/ShowAdvertisement";
import UserReport from "../../Pages/DashBoard/UserReport/UserReport";
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
        path:'/dashBoard/admin',
        element:<AdminLayout></AdminLayout>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:'/dashBoard/admin',
                element:<Users></Users>
            },
            {
                path:'/dashBoard/admin/inputCategory',
                element:<InputCategory></InputCategory>
            },
            {
                path:'/dashBoard/admin/advertisement',
                element:<ShowAdvertisement></ShowAdvertisement>
            },
            {
                path:'/dashBoard/admin/seller',
                element:<Seller></Seller>
            },
            {
                path:'/dashBoard/admin/userReport',
                element:<UserReport></UserReport>
            },
            {
                path:'/dashBoard/admin/myProfile',
                element:<Users></Users>
            }
        ]
    },
    {
        path:'/dashBoard/seller',
        element:<SellerLayout></SellerLayout>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:'/dashBoard/seller',
                element:<PrivetRouter><Users></Users></PrivetRouter>
            },
            {
                path:'/dashBoard/seller/addProduct',
                element:<AddProduct></AddProduct>
            },
            {
                path:'/dashBoard/seller/myBuyers',
                element:<MyBuyers></MyBuyers>
            },
            {
                path:'/dashBoard/seller/myProduct',
                element:<PrivetRouter><MyProducts></MyProducts></PrivetRouter>
            },
            {
                path:'/dashBoard/seller/myProfile',
                element:<Users></Users>
            }
        ]
    },
    {
        path:'/dashBoard/buyer',
        element:<Buyer></Buyer>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:'/dashBoard/buyer',
                element:<PrivetRouter><Users></Users></PrivetRouter>
            },
            {
                path:'/dashBoard/buyer/myOrder',
                element:<MyOrders></MyOrders>
            },
            {
                path:'/dashBoard/buyer/myProfile',
                element:<Users></Users>
            }
        ]
    }
])
export default router