import { GrUserExpert, GrTools } from "react-icons/gr";
import { MdOutlineModelTraining } from "react-icons/md";
import { RiUserCommunityLine } from "react-icons/ri";
import { IoNewspaperOutline } from "react-icons/io5";
import { BentoCard, BentoGrid } from "./ui/bento-grid";


const features = [
    {
        Icon: GrUserExpert,
        name: "Expert Insights",
        description: "In-depth articles from industry professionals.",
        href: "/",
        cta: "Learn more",
        background: <img className="absolute opacity-60 w-full h-fit md:h-full hover:opacity-40 transition-opacity duration-500" src="https://res.cloudinary.com/damr9jzpb/image/upload/v1735402379/pexels-cottonbro-5474037.jpg" />,
        className: "lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3",
    },
    {
        Icon: GrTools,
        name: "Tools & Resources",
        description: "Comprehensive guides on essential hacking tools.",
        href: "/",
        cta: "Learn more",
        background: <img className="absolute opacity-60 w-full h-fit hover:opacity-40 transition-opacity duration-500" src="https://res.cloudinary.com/damr9jzpb/image/upload/v1735402244/pexels-saksham-choudhary-109710-2036656.jpg" />,
        className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
    },
    {
        Icon: MdOutlineModelTraining,
        name: "Training Programs",
        description: "Hands-on courses for aspiring ethical hackers.",
        href: "/",
        cta: "Learn more",
        background: <img className="absolute opacity-60 w-full h-full md:h-fit hover:opacity-40 transition-opacity duration-500" src="https://res.cloudinary.com/damr9jzpb/image/upload/v1732378873/code_image_swwd6b.jpg" />,
        className: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4",
    },
    {
        Icon: RiUserCommunityLine,
        name: "Community Forum",
        description: "Connect with peers and share knowledge.",
        href: "/",
        cta: "Learn more",
        background: <img className="absolute opacity-60 w-full h-full md:h-fit hover:opacity-40 transition-opacity duration-500" src="https://res.cloudinary.com/damr9jzpb/image/upload/v1735402541/pexels-mikhail-nilov-7988210.jpg" />,
        className: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2",
    },
    {
        Icon: IoNewspaperOutline,
        name: "Latest News",
        description:
            "Stay updated on cybersecurity trends and threats.",
        href: "/",
        cta: "Learn more",
        background: <img className="absolute opacity-60 w-full h-full hover:opacity-40 transition-opacity duration-500" src="https://res.cloudinary.com/damr9jzpb/image/upload/v1735402591/pexels-thisisengineering-3861963.jpg" />,
        className: "lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4",
    },
];

export function BentoDemo() {
    return (
    <div className="py-44 px-2 md:px-0">
        <div className="text-center">
        <p className='text-gray-400 mb-5'>Benefits</p>
        <h2 className='text-4xl mb-10 font-bold md:text-6xl leading-normal bg-gradient-to-b from-gray-500 to-white bg-clip-text text-transparent'>Be Prepared for Every Interaction</h2>
        </div>
        <BentoGrid className="lg:grid-rows-3 min-h-[50rem] ">
            {features.map((feature) => (
                <BentoCard key={feature.name} {...feature} />
            ))}
        </BentoGrid>
    </div>
    );
}
