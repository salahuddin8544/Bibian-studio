import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../Components/Pages/Home/Home/Home";
import Services from "../Components/Pages/Services/Services";
import Contact from "../Components/Pages/Contact/Contact";
import AnimationCgi from "../Components/Pages/Animation&CGI/AnimationCgi";
import VFX from "../Components/Pages/VFX/VFX";
import ArBr from "../Components/Pages/ArBr/ArBr";
import About from "../Components/Pages/About/About";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:([
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/services',
                element:<Services></Services>
            },
            {
                path:'services/3danimation&cgi',
                element:<AnimationCgi></AnimationCgi>
            },
            {
                path:'services/vfx',
                element:<VFX></VFX>
            },
            {
                path:'services/ar/br',
                element:<ArBr></ArBr>
            },
            {
                path:'contact',
                element:<Contact></Contact>
            },
            {
                path:'about',
                element:<About></About>
            },

        ])
    }
])
export default router;