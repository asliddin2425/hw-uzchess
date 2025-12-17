import TopCoursesImg1 from '../assets/images/TopCoursesImg1.svg'
import TopCoursesImg2 from '../assets/images/TopCoursesImg2.svg'
import TopCoursesImg3 from '../assets/images/TopCoursesImg3.svg'
import TopCoursesImg4 from '../assets/images/TopCoursesImg4.svg'
import GoldTrophy from '../assets/icons/trophy-icon.svg'
import SilverTrophy from '../assets/icons/trophy-icon2.svg'
import RabbitIcon from '../assets/icons/rabbitIcon.svg'
import BulletIcon from '../assets/icons/bulletIcon.svg'
import BlitzIcon from '../assets/icons/blittzIcon.svg'
import RatingChangeIcon from '../assets/icons/ratingChangeIcon.svg'
import RatingChangeIcon2 from '../assets/icons/ratingChangeIcon2.svg'
import RatingChangeIcon3 from '../assets/icons/ratingChangeIcon3.svg'



import Person1 from '../assets/icons/ratingPerson1.svg'
import Person2 from '../assets/icons/ratingPerson2.svg'
import Person3 from '../assets/icons/ratingPerson3.svg'
import Person4 from '../assets/icons/ratingPerson4.svg'


import Flag1 from '../assets/icons/flag1.svg'
import Flag2 from '../assets/icons/flag2.svg'
import Flag3 from '../assets/icons/flag3.svg'
import Flag4 from '../assets/icons/flag4.svg'

import NewsImg1 from '../assets/images/newsImg.svg'
import NewsImg2 from '../assets/images/newsImg2.svg'
import NewsImg3 from '../assets/images/newsImg3.svg'
import NewsImg4 from '../assets/images/newsImg4.svg'
import NewsImg5 from '../assets/images/newsImg5.svg'
import NewsImg6 from '../assets/images/newsImg6.svg'



import Book1 from '../assets/images/book1.png';
import Book2 from '../assets/images/book2.png';
import Book3 from '../assets/images/book3.png';
import Book4 from '../assets/images/book4.png';


import MainNewsImg1 from '../assets/images/mainNewsImg1.png'
import MainNewsImg2 from '../assets/images/mainNewsImg2.svg'
import MainNewsImg3 from '../assets/images/mainNewsImg3.png'
import MainNewsImg4 from '../assets/images/mainNewsImg4.png'

export const MainTopCoursesData = [
    {
        id: 1,
        img: TopCoursesImg1,
        title: "Shaxmat donalari bilan tanishuv",
        rating: 3.5,
        viewCount: 5756,
    },

    {
        id: 2,
        img: TopCoursesImg2,
        title: "Shoxga hujum qilish",
        rating: 3.5,
        viewCount: 5756,
    },

    {
        id: 3,
        img: TopCoursesImg3,
        title: "Mot qilish",
        rating: 3.5,
        viewCount: 5756,
    },
    {
        id: 1,
        img: TopCoursesImg4,
        title: "Asosiy taktikalar",
        rating: 3.5,
        viewCount: 5756,
    },
]


export const FinishedMatchesData = [
    {
        id: 1,
        gold: GoldTrophy,
        playName: "Shohrukh Bakhtiyarov",
        levlrayt: "(2861)",
        nums: 2,
        gold2: SilverTrophy,
        playName2: "Nikaru Hakamura",
        levlrayt2: "(2768)",
        nums2: "0",
        icons: RabbitIcon,
        move: "56",
        month: "12 Dekabr"
    },
    {
        id: 2,
        gold: GoldTrophy,
        playName: "Abdusattorov Nodirbek",
        levlrayt: "(2604)",
        nums: 1,
        gold2: SilverTrophy,
        playName2: "Ding Liren",
        levlrayt2: "(2312)",
        nums2: "0",
        icons: BulletIcon,
        move: "20",
        month: "21 Noyabr"

    },
    {
        id: 3,
        gold: GoldTrophy,
        playName: "Aronian Levon",
        levlrayt: "(2402)",
        nums: "0",
        gold2: SilverTrophy,
        playName2: "Sindarov Javokhir",
        levlrayt2: "(2641)",
        nums2: 2,
        icons: BlitzIcon,
        move: "19",
        month: "19 Oktabr"
    }, {
        id: 4,
        gold: GoldTrophy,
        playName: "Caruana Fabiano",
        levlrayt: "(2402)",
        nums: 1,
        gold2: SilverTrophy,
        playName2: "Rapport Richard",
        levlrayt2: "(2641)",
        nums2: 1,
        icons: BlitzIcon,
        move: "56",
        month: "2 Sentabr"
    },
    {
        id: 5,
        gold: GoldTrophy,
        playName: "Yakubboev Nodirbek",
        levlrayt: "(2402)",
        nums: 4,
        gold2: SilverTrophy,
        playName2: "Gelfand Boris",
        levlrayt2: "(2641)",
        nums2: 1,
        icons: BulletIcon,
        move: "56",
        month: "2 Sentabr"
    },
]


export const MainRatingPlayers = [
    {
        id: 1,
        order: 1.,
        playerName: "Magnus Carlsen",
        ratingChangeIcon: RatingChangeIcon,
        ratingChange: 12,
        points: 2861,
        ratingDelta: "+102",
    },


    {
        id: 2,
        order: 2,
        playerName: "Nikaru hakamura",
        ratingChangeIcon: RatingChangeIcon2,
        ratingChange: 12,
        points: 2850,
        ratingDelta: "-11",
    },

    {
        id: 3,
        order: 3,
        playerName: "Abdusattorov Nodirbek",
        ratingChangeIcon: RatingChangeIcon,
        ratingChange: 27,
        points: 2842,
        ratingDelta: "+18",
    },

    {
        id: 4,
        order: 4,
        playerName: "Magnus Carlsen",
        ratingChangeIcon: RatingChangeIcon3,
        ratingChange: false,
        points: 2839,
        ratingDelta: "+41",
    },
    {
        id: 5,
        order: 5,
        playerName: "Yakubboev Nodirbek ",
        ratingChangeIcon: RatingChangeIcon,
        ratingChange: 5,
        points: 2839,
        ratingDelta: "+19",
    },
]




export const RatingData = [
    {
        id: 101,
        serialNumber: 1,
        personImg: Person1,
        personName: "Magnus Carlsen",
        flagIcon: Flag1,
        classicPoints: 2859,
        pointsAdd: "+102",
        rapidPoints: 2861,
        blitzPoints: 2830
    },

    {
        id: 102,
        serialNumber: 2,
        personImg: Person2,
        personName: "Ding Liren",
        flagIcon: Flag2,
        classicPoints: 2811,
        pointsAdd: null,
        rapidPoints: 2829,
        blitzPoints: 2788
    },

    {
        id: 103,
        serialNumber: 3,
        personImg: Person3,
        personName: "Ian Nepomniachtchi",
        flagIcon: Flag3,
        classicPoints: 2793,
        pointsAdd: "+1",
        rapidPoints: 2766,
        blitzPoints: 2781
    },

    {
        id: 104,
        serialNumber: 4,
        personImg: Person4,
        personName: "Alireza Firouzja",
        flagIcon: Flag4,
        classicPoints: 2811,
        pointsAdd: null,
        rapidPoints: 2829,
        blitzPoints: 2788,
    },

    {
        id: 103,
        serialNumber: 5,
        personImg: Person3,
        personName: "Ian Nepomniachtchi",
        flagIcon: Flag3,
        classicPoints: 2793,
        pointsAdd: "+1",
        rapidPoints: 2766,
        blitzPoints: 2781
    },

    {
        id: 104,
        serialNumber: 6,
        personImg: Person4,
        personName: "Alireza Firouzja",
        flagIcon: Flag4,
        classicPoints: 2811,
        pointsAdd: null,
        rapidPoints: 2829,
        blitzPoints: 2788
    },

    {
        id: 103,
        serialNumber: 7,
        personImg: Person3,
        personName: "Ian Nepomniachtchi",
        flagIcon: Flag3,
        classicPoints: 2793,
        pointsAdd: "+1",
        rapidPoints: 2766,
        blitzPoints: 2781
    },

    {
        id: 104,
        serialNumber: 8,
        personImg: Person4,
        personName: "Alireza Firouzja",
        flagIcon: Flag4,
        classicPoints: 2811,
        pointsAdd: null,
        rapidPoints: 2829,
        blitzPoints: 2788
    },

    {
        id: 103,
        serialNumber: 9,
        personImg: Person3,
        personName: "Ian Nepomniachtchi",
        flagIcon: Flag3,
        classicPoints: 2793,
        pointsAdd: "+1",
        rapidPoints: 2766,
        blitzPoints: 2781
    },

    {
        id: 104,
        serialNumber: 10,
        personImg: Person4,
        personName: "Alireza Firouzja",
        flagIcon: Flag4,
        classicPoints: 2811,
        pointsAdd: null,
        rapidPoints: 2829,
        blitzPoints: 2788
    },
]



export const NewsData = [
    {
        id: 1,
        newsImg: NewsImg1,
        newsDate: "Sentabr 7, 2022",
        aboutNews: "Nodirbek Abdusattorov FIDE jonli reytingida 2700 balldan o‘tdi",
        desc: "O‘zbekistonlik yosh grossmeyster Turkiyada o‘tkazilgan shaxmat olimpiadasida ikkita g‘...."
    },


    {
        id: 2,
        newsImg: NewsImg2,
        newsDate: "Sentabr 7, 2022",
        aboutNews: "“Qo‘shnilarning buyuk jasorati”: Rossiyalik grossmeyster o‘zbek shaxmatining g‘alab...",
        desc: "O‘zbekistonlik yosh grossmeyster Turkiyada o‘tkazilgan shaxmat olimpiadasida ikkita g‘...."
    },

    {
        id: 3,
        newsImg: NewsImg3,
        newsDate: "Sentabr 7, 2022",
        aboutNews: "O‘zbekiston shaxmatchilari olimpiadada Armanistonlik raqiblarini mag‘lub etishdi",
        desc: "O‘zbekistonlik yosh grossmeyster Turkiyada o‘tkazilgan shaxmat olimpiadasida ikkita g‘...."
    },

    {
        id: 4,
        newsImg: NewsImg3,
        newsDate: "Sentabr 7, 2022",
        aboutNews: "O‘zbekiston shaxmatchilari olimpiadada Armanistonlik raqiblarini mag‘lub etishdi",
        desc: "O‘zbekistonlik yosh grossmeyster Turkiyada o‘tkazilgan shaxmat olimpiadasida ikkita g‘...."
    },

    {
        id: 5,
        newsImg: NewsImg4,
        newsDate: "Sentabr 7, 2022",
        aboutNews: "Xalqaro shaxmat musobaqalari g‘oliblariga nima beriladi?",
        desc: "O‘zbekistonlik yosh grossmeyster Turkiyada o‘tkazilgan shaxmat olimpiadasida ikkita g‘...."
    },

    {
        id: 6,
        newsImg: NewsImg5,
        newsDate: "Sentabr 7, 2022",
        aboutNews: "Nodirbek Abdusattorov FIDE jonli reytingida 2700 balldan o‘tdi",
        desc: "O‘zbekistonlik yosh grossmeyster Turkiyada o‘tkazilgan shaxmat olimpiadasida ikkita g‘...."
    },

    {
        id: 7,
        newsImg: NewsImg2,
        newsDate: "Sentabr 7, 2022",
        aboutNews: "“Qo‘shnilarning buyuk jasorati”: Rossiyalik grossmeyster o‘zbek shaxmatining g‘alab...",
        desc: "O‘zbekistonlik yosh grossmeyster Turkiyada o‘tkazilgan shaxmat olimpiadasida ikkita g‘...."
    },

    {
        id: 8,
        newsImg: NewsImg6,
        newsDate: "Sentabr 7, 2022",
        aboutNews: "Nodirbek Abdusattorov FIDE jonli reytingida 2700 balldan o‘tdi",
        desc: "O‘zbekistonlik yosh grossmeyster Turkiyada o‘tkazilgan shaxmat olimpiadasida ikkita g‘...."
    },

    {
        id: 9,
        newsImg: NewsImg3,
        newsDate: "Sentabr 7, 2022",
        aboutNews: "O‘zbekiston shaxmatchilari olimpiadada Armanistonlik raqiblarini mag‘lub etishdi",
        desc: "O‘zbekistonlik yosh grossmeyster Turkiyada o‘tkazilgan shaxmat olimpiadasida ikkita g‘...."
    },

    {
        id: 10,
        newsImg: NewsImg5,
        newsDate: "Sentabr 7, 2022",
        aboutNews: "Xalqaro shaxmat musobaqalari g‘oliblariga nima beriladi?",
        desc: "O‘zbekistonlik yosh grossmeyster Turkiyada o‘tkazilgan shaxmat olimpiadasida ikkita g‘...."
    },

    {
        id: 11,
        newsImg: NewsImg2,
        newsDate: "Sentabr 7, 2022",
        aboutNews: "“Qo‘shnilarning buyuk jasorati”: Rossiyalik grossmeyster o‘zbek shaxmatining g‘alab...",
        desc: "O‘zbekistonlik yosh grossmeyster Turkiyada o‘tkazilgan shaxmat olimpiadasida ikkita g‘...."
    },

    {
        id: 12,
        newsImg: NewsImg1,
        newsDate: "Sentabr 7, 2022",
        aboutNews: "Nodirbek Abdusattorov FIDE jonli reytingida 2700 balldan o‘tdi",
        desc: "O‘zbekistonlik yosh grossmeyster Turkiyada o‘tkazilgan shaxmat olimpiadasida ikkita g‘...."
    },
]




export const DataAcide = [
    {
        id: 1,
        img: Book1,
        title: "Shaxmatdagi qobiliyatliringizga qayta baxo bering",
        author: "J.Silman"
    },

    {
        id: 2,
        img: Book2,
        title: "Mening tizimim",
        author: "A.Nimzowitsch"
    },

    {
        id: 3,
        img: Book3,
        title: "Zurixdagi shaxmat musobaqasi",
        author: "D.Bronstein"
    },

    {
        id: 4,
        img: Book4,
        title: "Mening esdaqolarlik o'yinlarim",
        author: "B.Fischer",
    },
];

export const MainNewsData = [
    {
        id: 1,
        img: MainNewsImg1,
        date: "Sentabr 7, 2022",
        title: "Nodirbek Abdusattorov FIDE jonli reytingida 2700 balldan o‘tdi",
        newsDeteils: "O‘zbekistonlik yosh grossmeyster Turkiyada o‘tkazilgan shaxmat olimpiadasida ikkita g‘alaba qozonib, shaxmat bo‘yicha jahon reyting...",
    },

    {
        id: 2,
        img: MainNewsImg2,
        date: "Sentabr 7, 2022",
        title: "“Qo‘shnilarning buyuk jasorati”: Rossiyalik grossmeyster o‘zbek shaxmatining g‘alabas...",
        newsDeteils: "Rossiyalik grossmeyster va shaxmat bo‘yicha murabbiy Sergey Shipov O‘zbekiston terma jamoasining Hindistondagi shaxmat olimpiadasidagi...",
    },

    {
        id: 3,
        img: MainNewsImg3,
        date: "Sentabr 7, 2022",
        title: "Xalqaro shaxmat musobaqalari g‘oliblariga nima beriladi?",
        newsDeteils: "O‘zbekiston Prezidenti Shavkat Mirziyoyevning “Shaxmatni yanada ommalashtirish va rivojlantirishga doir qo‘shimcha chora-tadbirlar to‘g‘...",
    },

    {
        id: 4,
        img: MainNewsImg4,
        date: "Sentabr 7, 2022",
        title: "O‘zbekiston shaxmatchilari olimpiadada Armanistonlik raqiblarini mag‘lub etishdi",
        newsDeteils: "Ikki davlat jamoalari o‘rtasidagi bahs 3:1 hisobida O‘zbekiston foydasiga hal bo‘ldi. Shu tariqa, hech qachon mag‘lubiyatga uchramagan respub...",
    },
]

import LevelIcon1 from '../assets/icons/Union.svg'
import LevelIcon2 from '../assets/icons/Union2.svg'
import LevelIcon3 from '../assets/icons/toj.svg'
import CardImg1 from '../assets/images/profileCardImg1.png'
import CardImg2 from '../assets/images/profileCardImg2.png'
import CardImg3 from '../assets/images/profileCardImg3.png'
import CardImg4 from '../assets/images/profileCardImg4.png'


export const ProfileCardData = [
    {
        id: 1,
        img: CardImg1,
        levelIcon: LevelIcon1,
        level: "Boshlangich",
        author: "Robert Fisher",
        lessons: " 5 ta dars"

    },

        {
        id: 2,
        img: CardImg2,
        levelIcon: LevelIcon2,
        level: "Havaskor",
        author: "Javoxir Sindarov ",
        lessons: " 12 ta dars"
        },
        
    {
        id: 3,
        img: CardImg3,
        levelIcon: LevelIcon3,
        level: "Professional",
        author: " Magnus Carlsen",
        lessons: " 20 ta dars"
    },
    {
        id: 4,
        img: CardImg4,
        levelIcon: LevelIcon1,
        level: "Boshlangich",
        author: "Robert Fisher",
        lessons: " 12ta dars"

    }
]