import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../Components/Pages/Home/Home/Home";
import Services from "../Components/Pages/Services/Services";
import Animation from "../Components/Pages/Animation/Animation";
import CgiAnimationItem from "../Components/Pages/CgiAnimation/CgiAnimationItem";
import Contact from "../Components/Pages/Contact/Contact";

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
                path:'services/animation',
                element:<Animation></Animation>
            },
            {
                path:'services/cgi',
                element:<CgiAnimationItem></CgiAnimationItem>
            },
            {
                path:'contact',
                element:<Contact></Contact>
            },

        ])
    }
])
export default router;