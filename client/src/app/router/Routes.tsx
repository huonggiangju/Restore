import { createBrowserRouter, Navigate } from "react-router-dom";
import AboutPage from "../../features/about/AboutPage";
import Catalog from "../../features/catalog/Catalog";
import ProductDetail from "../../features/catalog/ProductDetail";
import ContactPage from "../../features/contact/ContactPage";
import HomePage from "../../features/home/HomePage";
import Notfound from "../errors/NotFound";
import ServerError from "../errors/ServerError";
import App from "../layout/App";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        children:[
            {path: '', element: <HomePage/>},
            {path: 'contact', element: <ContactPage/>},
            {path: 'catalog', element: <Catalog/>},
            {path: 'catalog/:id', element: <ProductDetail/>},
            {path: 'about', element: <AboutPage/>},
            {path: 'server-error', element: <ServerError/>},
            {path: 'not-found', element: <Notfound/>},
            {path: '*', element: <Navigate replace to='/not-found'/>},
        ]
    }
])
