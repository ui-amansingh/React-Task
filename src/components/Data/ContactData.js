import { Mail, MapPin } from "react-feather";
import { FaFacebookF, FaTwitter, FaInstagram, FaDribbble } from "react-icons/fa";

const ContactData =[
    {
        id:1,
        icon:<Mail />,
        text:"info@webmail.com",
        links:"info@webmail.com"
    },
    {
        id:2,
        icon:<MapPin />,
        text:"15/A, Nest Tower, NYC",
        links:"https://cedcommerce.com/"
    }
]
const Socialicons = [
    {

        id:1,
        icons:<FaFacebookF />,
        title: "Facebook"
    },
    {

        id:2,
        icons:<FaTwitter />,
        title: "Twitter"
    },
    {

        id:3,
        icons:<FaInstagram />,
        title: "Instagram"
    },
    {

        id:4,
        icons:<FaDribbble />,
        title: "Dribbble"
    }
]
export {ContactData, Socialicons};