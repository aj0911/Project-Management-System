import { AiOutlineBell, AiOutlineHome, AiOutlineMan, AiOutlineProject, AiOutlineSetting, AiOutlineTeam } from 'react-icons/ai'
import { MdOutlineToggleOff, MdRecommend, MdTaskAlt } from "react-icons/md";

export const features = [
    {
        name:'Task Management',
        text:'Organize tasks, set deadlines, and assign responsibilities to streamline project progress.',
        img:require('../Assets/Images/hero-3.png')
    },
    {
        name:'User-Friendly Interface',
        text:'Offer an intuitive and user-friendly interface for seamless adoption and efficient utilization by team members at all levels.',
        img:require('../Assets/Images/hero-app-2.png')
    },
    {
        name:'Progress Tracking',
        text:'Monitor project milestones, track progress in real-time, and identify potential bottlenecks for timely resolution.',
        img:require('../Assets/Images/hero-2.png')
    },
    {
        name:'Resource Allocation',
        text:'Efficiently allocate resources, including personnel, time, and materials, for optimal project execution.',
        img:require('../Assets/Images/hero-app-1.png')
    },
]

export const footerLinks = [
    {
        name: 'Resources',
        links: [
            {
                name: 'User Guides',
                link: '#user-guides'
            },
            {
                name: 'FAQs',
                link: '#faqs'
            },
            {
                name: 'Video Tutorials',
                link: '#video-tutorials'
            }
        ]
    },
    {
        name: 'Support',
        links: [
            {
                name: 'Contact Us',
                link: '#contact'
            },
            {
                name: 'Help Center',
                link: '#help-center'
            },
            {
                name: 'Feedback',
                link: '#feedback'
            }
        ]
    },
    {
        name: 'Company',
        links: [
            {
                name: 'About Us',
                link: '#about'
            },
            {
                name: 'Careers',
                link: '#careers'
            },
            {
                name: 'Press',
                link: '#press'
            }
        ]
    }
];

export const colors = {
    day:[
        {
            '--bgColor':'#fff'
        },
        {
            '--textColor':'#000'
        },
        {
            '--bgColorLightPlus':'#F8F8F8'
        },
        {
            '--bgColorLight':'#DFDFDF'
        },
    ],
    night:[
        {
            '--bgColor':'#1A1C2D'
        },
        {
            '--textColor':'#fff'
        },
        {
            '--bgColorLightPlus':'#181B31'
        },
        {
            '--bgColorLight':'#13131D'
        },
    ]
}

export const roles = {
    ADMIN:'Admin',
    PRODUCT_MANAGER:'Product Manager',
    PROFESSOR:'Professor'
}

export const frames = {
    LOGIN:true,
    REGISTER:false
}

export const DashboardOptions = [
    {
        name:null,
        menus:[
            {
                name:'Home',
                icon:<AiOutlineHome/>
            },
            {
                name:'My Tasks',
                icon:<MdTaskAlt/>
            },
            {
                name:'Managers',
                icon:<AiOutlineMan/>
            },
            {
                name:'Team',
                icon:<AiOutlineTeam/>
            },
            {
                name:'Projects',
                icon:<AiOutlineProject/>
            },
        ]
    },
    {
        name:'Reporting',
        menus:[
            {
                name:'Inbox',
                icon:<AiOutlineBell/>
            },
            {
                name:'Recommendations',
                icon:<MdRecommend/>
            }
        ]
    },
    {
        name:'Others',
        menus:[
            {
                name:'Settings',
                icon:<AiOutlineSetting/>
            },
            {
                name:'Account',
                icon:<MdOutlineToggleOff/>
            }
        ]
    },
]