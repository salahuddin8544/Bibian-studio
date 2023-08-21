import React from 'react';
import vr from '../../../assets/arbr/image.webp'
import ArBrItem from './ArBrItem';
const ArBr = () => {
    const contents =[
        {
            video:<iframe height="403" src="https://www.youtube.com/embed/U00nKYL9UWM" title="The Augmented Furniture" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>,
            title:'The Augmented Furniture',
            description:"Introducing our Augmented Reality Furniture App – Your Personalized Home Styling Companion! Experience furniture shopping like never before with our innovative AR Furniture App. Tailored exclusively for furniture brands, this app revolutionizes your shopping journey. Visualize an entire collection in your living space using augmented reality. Effortlessly choose, place, and preview furniture pieces, ensuring a perfect fit before you buy. Say goodbye to guesswork and hello to precision. Our app empowers you to measure furniture dimensions within your room, ensuring every piece aligns harmoniously. Snap photos to compare options or share your creative designs on social media for instant feedback from friends. But that's not all – we've streamlined the purchase process. With direct in-app ordering, you can secure your favorite finds without leaving the comfort of your home. No more hassles, no more inconvenience. It's furniture shopping reimagined. Elevate your interior design aspirations with our AR Furniture App. Your dream space is now just a tap away. Redefine your shopping experience today"
        },
        {
            video:<iframe width="320" height="403" src="https://www.youtube.com/embed/dtV0tsWSqkc" title="Augmented footwear - Vivian Studios | Mobile App" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>,
            title:'The Augmented Footwear',
            description:"Introducing our Augmented Reality Footwear App – Step into Perfect Comfort! Discover a new era of shoe shopping with our cutting-edge AR Footwear App. Designed exclusively for footwear brands, this app transforms the way you find your perfect pair. Visualize an entire collection in stunning augmented reality, virtually trying on shoes and finding your flawless fit. Gone are the days of uncertain sizing. Our app lets you measure your foot accurately, ensuring each shoe matches your unique contours. Snap photos to compare styles or share your virtual tryons on social media to gather opinions from friends. But there's more – we've simplified the purchase process. With seamless in-app ordering, you can secure your favorite picks without leaving your home. No more crowded stores, no more compromise. It's shoe shopping redefined. Elevate your shoe shopping experience with our AR Footwear App. Your ideal shoes are just a tap away. Redefine your style effortlessly – Get a quote now!"
        },
        {
            video:<iframe width="320" height="403" src="https://www.youtube.com/embed/JcqVJfAHPDo" title="Augmented Eyewear | Mobile App" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>,
            title:'The Augmented Eyewear',
            description:"Introducing our Augmented Reality Eyewear App – Redefining Your Vision! Experience eyewear shopping like never before with our revolutionary AR Eyewear App. Crafted exclusively for eyewear brands, this app revolutionizes the way you find your perfect frames. Immerse yourself in augmented reality, virtually trying on an entire collection and finding the frames that match your style. No more guesswork when it comes to fit. Our app empowers you to measure eyeglass sizes accurately, ensuring a seamless and comfortable fit. Capture photos to compare different looks or share your virtual try-ons on social media to get feedback from friends. But that's not all – we've simplified the purchasing process. With easy in-app ordering, you can secure your favorite frames from the comfort of your home. Say goodbye to crowded stores and hello to convenience. It's eyewear shopping reimagined. Elevate your eyewear game with our AR Eyewear App. The perfect frames for you are just a tap away. Embrace a new way of shopping and redefine your style effortlessly"
        },
        {
            video:<iframe width="320" height="403" src="https://www.youtube.com/embed/e0vNiBp85UY" title="The Augmented Watch | Unity | Vuforia Engine" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>,
            title:'The Augmented Watch',
            description:"Introducing our Augmented Reality Watch App – Elevate Your Wrist Game! Step into a new dimension of watch shopping with our groundbreaking AR Watch App. Tailored exclusively for watch brands, this app redefines how you discover the perfect timepiece. Immerse yourself in augmented reality, virtually trying on an entire collection and finding the watch that resonates with your style. No more uncertainty about wrist fit. Our app empowers you to measure wrist sizes with precision, ensuring a comfortable and stylish fit. Snap photos to compare different designs or share your virtual try-ons on social media to gather opinions from friends. And there's more – we've streamlined the purchase process. With seamless in-app ordering, you can secure your favorite watch right from your fingertips. Say farewell to crowded stores and embrace the convenience of digital shopping. It's watch shopping reimagined. Elevate your wristwear with our AR Watch App. The perfect timepiece is just a tap away. Discover a fresh way to shop and redefine your style effortlessly."
        },
    ]
    return (
        <div>
           <div className='w-11/12 mx-auto'>
           <section className=''>
                <img className='w-full' height={600} src={vr} alt="" />
            </section>
            <section>
                {
                    contents.map((content,i)=><ArBrItem
                    
                    key={i}
                    content={content}
                    ></ArBrItem>)
                }
            </section>
           </div>
        </div>
    );
};

export default ArBr;