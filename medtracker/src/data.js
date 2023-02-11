import nf from './assets/home/nf.png'
import nf1 from './assets/home/nf2.png'
import nf2 from './assets/home/nf3.png'
import nf3 from './assets/home/nf4.png'
import nf4 from './assets/home/nf5.png'
import {MdOutlineChildCare} from 'react-icons/md'
import {GiGlassHeart} from 'react-icons/gi'
import {FaDungeon,FaDumbbell,FaAirbnb} from 'react-icons/fa'
import heart from './assets/home/heart.png'
import influenza from './assets/home/influenza.png'
import medica from './assets/home/medication.jpg'
export const navbar = [
    {
        name:"HOME",
        link:"/"
    },
    {
        name:"BUSINESS",
        link:"/business"
    },
    {
        name:"PROFESSIONALS",
        link:"/professinal"
    },
    {
        name:"ABOUT",
        link:"/about"
    },
    {
        name:"NEWS",
        link:"/news"
    },
    {
        name:"FAG",
        link:"/fag"
    },
]

export const services = [
    {
        icon:<MdOutlineChildCare/>,
        title:"Children",
        p1:"Have important information available at school and activities",
        p2:"If your child is missing, the emergency card has contact information for those closest to them"
    },
    {
        icon:<GiGlassHeart/>,
        title:"Young Adults",
        p1:"Translate your allergies while traveling",
        p2:"Prevent health problems by raising awareness and logging health history over time"
    },
    {
        icon:<FaDumbbell/>,
        title:"Adults",
        p1:"A personal and up-to-date health card is important to have available in the event of a critical situation",
        p2:"You can choose to share your digital health card with family and other trusted people"
    },
    {
        icon:<FaAirbnb/>,
        title:"Senior Citizens",
        p1:"Have important information available in 20 languages ​​and facilitate precise and vital treatment",
        p2:"Collect and upload medical documents"
    },

]

export const  serviceImages = [
    nf,
    nf1,
    nf2,
    nf3,
    nf4
]

export const news = [
    {
        image:heart,
        title:"The most meaningful Christmas gift you can give to your employees"
    },
    {
        image:influenza,
        title:"Dont forget about the influenza"
    },
    {
        image:medica,
        title:"Medication in turkish"
    }
]
