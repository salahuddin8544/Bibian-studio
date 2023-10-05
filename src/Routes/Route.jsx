import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../Components/Pages/Home/Home/Home";
import Services from "../Components/Pages/Services/Services";
import Contact from "../Components/Pages/Contact/Contact";
import AnimationCgi from "../Components/Pages/Animation&CGI/AnimationCgi";
import ArBr from "../Components/Pages/ArBr/ArBr";
import  VFX from '../Components/Pages/vfx/vfx' ;
import About from "../Components/Pages/About/About";
import VideoEditGraphicsThumbnail from "../Components/Pages/videoEditThumbnail/VideoEditGraphicsThumbnail";
import Blog from "../Components/Pages/Blog/Blog";
import SingleBlog from "../Components/Pages/Blog/SingleBlog";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Main> </Main>,
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
                element:<VFX/>
            },
            {
                path:'services/ar/br',
                element:<ArBr></ArBr>
            },
            {
                path:'/sercices/video-editing&motion-graphics&thumbnail',
                element: <VideoEditGraphicsThumbnail/> 
            },
            {
                path:'contact',
                element:<Contact></Contact>
            },
            {
                path:'about',
                element:<About></About>
            },
            {
                path: 'blog',
                element: <Blog/> 
            },
            {
                path:'/blog/details/:id',
                element: <SingleBlog/>
            },
            {
                path:'*',
                element: <div className="text-4xl font-bold text-center ">  Routes not  found ! </div>
            }

        ])
    }
])
export default router;