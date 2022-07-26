const fs = require("fs");
const currentDate = new Date();

const setTimer = (h,m,s) => {
    currentDate.setHours(h,m,s);
    return currentDate.toISOString();
}

const BB = fs.readFileSync("assets/imgs/BB’s_African_News_Magazine_Show.png");
const Oluwakemi = fs.readFileSync("assets/imgs/Yoruba_Language_Talk_Show_with_Oluwakemi_Akinbobola.png");
const Saada = fs.readFileSync("assets/imgs/Swahili_Voice_with_Saada.png");
const Yves = fs.readFileSync("assets/imgs/Histoire_du_Cameroun_Histoire_d’Afrique_with_Yves_Modeste.png");
const Agatha = fs.readFileSync("assets/imgs/Mind_Matters_with_Agatha_Kabera.png");
const Chinny = fs.readFileSync("assets/imgs/Music_Request_Show_with_Chinny.png");
const KBL = fs.readFileSync("assets/imgs/On_The_Double_with_KBL.png");
const JeanNjali = fs.readFileSync("assets/imgs/Parlons_En_with_Jean_Michel_and_Guy_Njali.png");
const DJKweizah = fs.readFileSync("assets/imgs/Roots_Rock_Reggae_with_DJ_Kweizah.png");
const Shokunbi = fs.readFileSync("assets/imgs/The_Nigerian_Pride_with_Dr_Lion_Oluwole_Shokunbi.png");
const LadiFemi = fs.readFileSync("assets/imgs/The_Sports_Engine_with_Ladi_Egbedire_and_Femi_Afolabi.png");
const Pauhela = fs.readFileSync("assets/imgs/presenter-4.png");
const defaultJambo = fs.readFileSync("assets/logo_24.png")

const data = {
    "Monday" : [
        {
            id: Math.random().toString(36).slice(2),
            title : "Swahili Voice",
            startTime : setTimer(0,0,0),
            endTime : setTimer(1,0,0),
            presenter : "Saada",
            img : Saada
        },
        {
            id: Math.random().toString(36).slice(2),
            title : "Interviews",
            startTime : setTimer(1,0,0),
            endTime : setTimer(6,0,0),
            presenter : "Jambo Presenter",
            img : defaultJambo
        },
        {
            id: Math.random().toString(36).slice(2),
            title : "Gospel Music",
            startTime : setTimer(6,0,0),
            endTime : setTimer(7,0,0),
            presenter : "Jambo Presenter",
            img : defaultJambo
        },
        {
            id: Math.random().toString(36).slice(2),
            title : "Mind Matters",
            startTime : setTimer(7,0,0),
            endTime : setTimer(8,0,0),
            presenter : "Agatha Kabera",
            img : Agatha
        },
        {
            id: Math.random().toString(36).slice(2),
            title : "Interviews",
            startTime : setTimer(8,0,0),
            endTime : setTimer(9,0,0),
            presenter : "Jambo Presenter",
            img : defaultJambo
        },
        {
            id: Math.random().toString(36).slice(2),
            title : "Recipe for Success",
            startTime : setTimer(9,0,0),
            endTime : setTimer(10,0,0),
            presenter : "Jambo Presenter",
            img : defaultJambo
        },
        {
            id: Math.random().toString(36).slice(2),
            title : "BB African Magazine Show",
            startTime : setTimer(10,0,0),
            endTime : setTimer(12,0,0),
            presenter : "BB",
            img : BB
        },
        {
            id: Math.random().toString(36).slice(2),
            title : "Swahili Voice",
            startTime : setTimer(12,0,0),
            endTime : setTimer(13,0,0),
            presenter : "Saada",
            img : Saada
        },
        {
            id: Math.random().toString(36).slice(2),
            title : "Mon Point De Vue Sur La Culture",
            startTime : setTimer(13,0,0),
            endTime : setTimer(14,0,0),
            presenter : "Pauhela",
            img : Pauhela
        },
        {
            id: Math.random().toString(36).slice(2),
            title : "BB African Magazine Show",
            startTime : setTimer(14,0,0),
            endTime : setTimer(16,0,0),
            presenter : "BB",
            img : BB
        },
        {
            id: Math.random().toString(36).slice(2),
            title: 'Yoruba Language Talk Show',
            startTime : setTimer(16,0,0),
            endTime : setTimer(17,0,0),
            presenter: "Oluwakemi Akinbobola",
            img: Oluwakemi
        },
        {
            id: Math.random().toString(36).slice(2),
            title: 'North Africa Playlist (NAP)',
            startTime : setTimer(17,0,0),
            endTime : setTimer(18,0,0),
            status: "not yet",
            presenter: "Jambo Presenter",
            img: defaultJambo
        },
        {
            id: Math.random().toString(36).slice(2),
            title: 'Pachedu',
            startTime : setTimer(18,0,0),
            endTime : setTimer(19,0,0),
            presenter: "Oluwakemi Akinbobola",
            img: Oluwakemi
        },
        {
            id: Math.random().toString(36).slice(2),
            title: 'Juxtaposition Debate',
            startTime : setTimer(19,0,0),
            endTime : setTimer(22,0,0),
            presenter: "Jambo Presenter",
            img: defaultJambo
        },
        // {
        //     id: Math.random().toString(36).slice(2),
        //     title: 'Spotlight: Shining the lights on Creative talents in Scotland',
        //     startTime : setTimer(21,0,0),
        //     endTime : setTimer(22,0,0),
        //     status: "not yet",
        //     presenter: "",
        //     img: Oluwakemi
        // },
        {
            id: Math.random().toString(36).slice(2),
            title: 'North Africa Playlist (NAP)',
            startTime : setTimer(22,0,0),
            endTime : setTimer(23,0,0),
            presenter: "Jambo Presenter",
            img: defaultJambo
        },
        {
            id: Math.random().toString(36).slice(2),
            title: 'Mon Point De Vue Sur Le Culture',
            startTime : setTimer(23,0,0),
            endTime : setTimer(0,0,0),
            status: "not yet",
            presenter: "Pauhela",
            img: Pauhela
        }
    ],
    "Tuesday" : [
        {
            id: Math.random().toString(36).slice(2),
            title : "Gospel Music",
            startTime : setTimer(0,0,0),
            endTime : setTimer(1,0,0),
            presenter : "Jambo Presenter",
            img : defaultJambo
        },
        {
            id: Math.random().toString(36).slice(2),
            title : "North Africa Playlist (NAP)",
            startTime : setTimer(1,0,0),
            endTime : setTimer(6,0,0),
            presenter : "Jambo Presenter",
            img : defaultJambo
        },
        {
            id: Math.random().toString(36).slice(2),
            title : "Horn of Africa",
            startTime : setTimer(6,0,0),
            endTime : setTimer(7,0,0),
            presenter : "Jambo Presenter",
            img : defaultJambo
        },
        {
            id: Math.random().toString(36).slice(2),
            title : "Interviews",
            startTime : setTimer(7,0,0),
            endTime : setTimer(8,0,0),
            presenter : "Jambo Presenter",
            img : defaultJambo
        },
        {
            id: Math.random().toString(36).slice(2),
            title : "Parlons EN",
            startTime : setTimer(8,0,0),
            endTime : setTimer(9,0,0),
            presenter : "Jean Michel and Guy Njali",
            img : JeanNjali
        },
        {
            id: Math.random().toString(36).slice(2),
            title : "Interviews",
            startTime : setTimer(9,0,0),
            endTime : setTimer(10,0,0),
            presenter : "Jambo Presenter",
            img : defaultJambo
        },
        {
            id: Math.random().toString(36).slice(2),
            title : "Inspiring Transformation (IT)",
            startTime : setTimer(10,0,0),
            endTime : setTimer(11,0,0),
            presenter : "Jambo Presenter",
            img : defaultJambo
        },
        {
            id: Math.random().toString(36).slice(2),
            title : "Mon Point De Vue Sur La Culture",
            startTime : setTimer(11,0,0),
            endTime : setTimer(12,0,0),
            presenter : "BB",
            img : BB
        },
        {
            id: Math.random().toString(36).slice(2),
            title : "BB African Magazine Show",
            startTime : setTimer(12,0,0),
            endTime : setTimer(14,0,0),
            presenter : "BB",
            img : BB
        },
        {
            id: Math.random().toString(36).slice(2),
            title : "Horn of Africa Playlist (HAP)",
            startTime : setTimer(14,0,0),
            endTime : setTimer(15,0,0),
            presenter : "Jambo Presenter",
            img : defaultJambo
        },
        {
            id: Math.random().toString(36).slice(2),
            title: 'Pachedu',
            startTime : setTimer(15,0,0),
            endTime : setTimer(17,0,0),
            status: "not yet",
            presenter: "Pauhela Ngangue",
            img: Pauhela
        },
        // {
        //     id: Math.random().toString(36).slice(2),
        //     title: 'Yoruba Language Talk Show',
        //     startTime : setTimer(16,0,0),
        //     endTime : setTimer(17,0,0),
        //     status: "not yet",
        //     presenter: "Oluwakemi Akinbobola",
        //     img: Oluwakemi
        // },
        {
            id: Math.random().toString(36).slice(2),
            title: 'Roots Rock Reggie',
            startTime : setTimer(17,0,0),
            endTime : setTimer(18,0,0),
            presenter: "DJ Kweizah",
            img: DJKweizah
        },
        {
            id: Math.random().toString(36).slice(2),
            title: 'Histoire du Cameroun Histoire d\'Afrique',
            startTime : setTimer(18,0,0),
            endTime : setTimer(20,0,0),
            presenter: "Yves Modeste",
            img: Yves
        },
        {
            id: Math.random().toString(36).slice(2),
            title: 'Mon Point De Vue Sur La Culture',
            startTime : setTimer(20,0,0),
            endTime : setTimer(21,0,0),
            presenter: "Pauhela Ngangue",
            img: Pauhela
        },
        {
            id: Math.random().toString(36).slice(2),
            title: 'Yoruba Language Talk Show',
            startTime : setTimer(21,0,0),
            endTime : setTimer(22,0,0),
            presenter: "Oluwakemi Akinbobola",
            img: Oluwakemi
        },
        {
            id: Math.random().toString(36).slice(2),
            title: 'Horn of Africa Playlist (HAP)',
            startTime : setTimer(22,0,0),
            endTime : setTimer(23,0,0),
            presenter: "Jambo Presenter",
            img: defaultJambo
        },
        {
            id: Math.random().toString(36).slice(2),
            title: 'Interviews',
            startTime : setTimer(23,0,0),
            endTime : setTimer(0,0,0),
            presenter: "Jambo Presenter",
            img: defaultJambo
        }
    ],
    "Wednesday" : [
        {
            id: Math.random().toString(36).slice(2),
            title : "Interviews",
            startTime : setTimer(0,0,0),
            endTime : setTimer(6,0,0),
            presenter : "Jambo Presenter",
            img : defaultJambo
        },
        {
            id: Math.random().toString(36).slice(2),
            title : "Gospel Music",
            startTime : setTimer(6,0,0),
            endTime : setTimer(8,0,0),
            presenter : "Jambo Presenter",
            img : defaultJambo
        },
        {
            id: Math.random().toString(36).slice(2),
            title : "Mon Point De Vue Sur Le Culture",
            startTime : setTimer(8,0,0),
            endTime : setTimer(9,0,0),
            presenter : "Pouhela Ngangue",
            img : Pauhela
        },
        {
            id: Math.random().toString(36).slice(2),
            title : "Inspiring Transformations (IT)",
            startTime : setTimer(9,0,0),
            endTime : setTimer(10,0,0),
            presenter : "Jambo Presenter",
            img : defaultJambo
        },
        {
            id: Math.random().toString(36).slice(2),
            title : "Mon Point De Vue Sur Le Culture",
            startTime : setTimer(10,0,0),
            endTime : setTimer(11,0,0),
            presenter : "Pouhela Ngangue",
            img : Pauhela
        },
        {
            id: Math.random().toString(36).slice(2),
            title : "Interviews",
            startTime : setTimer(11,0,0),
            endTime : setTimer(12,0,0),
            presenter : "Jambo Presenter",
            img : defaultJambo
        },
        {
            id: Math.random().toString(36).slice(2),
            title : "East Africa Playlist (EAP)",
            startTime : setTimer(12,0,0),
            endTime : setTimer(13,0,0),
            presenter : "Jambo Presenter",
            img : defaultJambo
        },
        {
            id: Math.random().toString(36).slice(2),
            title : "Swahili Voice",
            startTime : setTimer(13,0,0),
            endTime : setTimer(14,0,0),
            presenter : "Saada",
            img : Saada
        },
        {
            id: Math.random().toString(36).slice(2),
            title : "The Sports Engine",
            startTime : setTimer(14,0,0),
            endTime : setTimer(15,0,0),
            presenter : "Ladi Egbedire and Femi Afolabi",
            img : LadiFemi
        },
        {
            id: Math.random().toString(36).slice(2),
            title: 'Swahili Voice',
            startTime : setTimer(15,0,0),
            endTime : setTimer(16,0,0),
            presenter: "Saada",
            img: Saada
        },
        {
            id: Math.random().toString(36).slice(2),
            title: 'Yoruba Language Talk Show',
            startTime : setTimer(16,0,0),
            endTime : setTimer(17,0,0),
            presenter: "Oluwakemi Akinbobola",
            img: Oluwakemi
        },
        {
            id: Math.random().toString(36).slice(2),
            title: 'East Africa Playlist (EAP)',
            startTime : setTimer(17,0,0),
            endTime : setTimer(18,0,0),
            presenter: "Jambo Presenter",
            img: defaultJambo
        },
        {
            id: Math.random().toString(36).slice(2),
            title: 'The Nigerian Pride',
            startTime : setTimer(18,0,0),
            endTime : setTimer(19,0,0),
            presenter: "Dr Lion Oluwole Shokunbi",
            img: Shokunbi
        },
        {
            id: Math.random().toString(36).slice(2),
            title: 'Histoire du Cameroun Histoire d\'Afrique',
            startTime : setTimer(19,0,0),
            endTime : setTimer(21,0,0),
            presenter: "Yves Modeste",
            img: Yves
        },
        {
            id: Math.random().toString(36).slice(2),
            title: 'Interviews',
            startTime : setTimer(21,0,0),
            endTime : setTimer(22,0,0),
            presenter: "Jambo Presenter",
            img: defaultJambo
        },
        {
            id: Math.random().toString(36).slice(2),
            title: 'Pachedu',
            startTime : setTimer(22,0,0),
            endTime : setTimer(23,0,0),
            presenter: "Jambo Presenter",
            img: defaultJambo
        },
        {
            id: Math.random().toString(36).slice(2),
            title: 'Interviews',
            startTime : setTimer(23,0,0),
            endTime : setTimer(0,0,0),
            presenter: "Jambo Presenter",
            img: defaultJambo
        }
    ],
    "Thursday" : [
        {
            id: Math.random().toString(36).slice(2),
            title : "Interviews",
            startTime : setTimer(0,0,0),
            endTime : setTimer(8,0,0),
            presenter : "Jambo Presenter",
            img : defaultJambo
        },
        {
            id: Math.random().toString(36).slice(2),
            title : "The Sports Engine",
            startTime : setTimer(8,0,0),
            endTime : setTimer(9,0,0),
            presenter : "Ladi Egbedire and Femi Afolabi",
            img : LadiFemi
        },
        {
            id: Math.random().toString(36).slice(2),
            title : "Yoruba Language Talk Show",
            startTime : setTimer(9,0,0),
            endTime : setTimer(10,0,0),
            presenter : "Oluwakemi Akinbobola",
            img : Oluwakemi
        },
        {
            id: Math.random().toString(36).slice(2),
            title : "BB African Magazine Show",
            startTime : setTimer(10,0,0),
            endTime : setTimer(12,0,0),
            presenter : "BB",
            img : BB
        },
        {
            id: Math.random().toString(36).slice(2),
            title : "Southern Africa Playlist (SAP)",
            startTime : setTimer(12,0,0),
            endTime : setTimer(13,0,0),
            presenter : "Jambo Presenter",
            img : defaultJambo
        },
        {
            id: Math.random().toString(36).slice(2),
            title : "Interviews",
            startTime : setTimer(13,0,0),
            endTime : setTimer(14,0,0),
            presenter : "Jambo Presenter",
            img : defaultJambo
        },
        {
            id: Math.random().toString(36).slice(2),
            title : "Exclusive Interviews",
            startTime : setTimer(14,0,0),
            endTime : setTimer(15,0,0),
            presenter : "Jambo Presenter",
            img : defaultJambo
        },
        {
            id: Math.random().toString(36).slice(2),
            title : "Mon Point De Vue Sur Le Culture",
            startTime : setTimer(15,0,0),
            endTime : setTimer(16,0,0),
            presenter : "Pouhela Ngangue",
            img : Pauhela
        },
        {
            id: Math.random().toString(36).slice(2),
            title : "Pachedu",
            startTime : setTimer(16,0,0),
            endTime : setTimer(17,0,0),
            presenter : "Jambo Presenter",
            img : defaultJambo
        },
        {
            id: Math.random().toString(36).slice(2),
            title : "The Nigerian Pride",
            startTime : setTimer(17,0,0),
            endTime : setTimer(18,0,0),
            presenter : "Dr Lion Oluwole Shokunbi",
            img : Shokunbi
        },
        {
            id: Math.random().toString(36).slice(2),
            title: 'On The Double By KBL',
            startTime : setTimer(18,0,0),
            endTime : setTimer(19,0,0),
            presenter: "KBL",
            img: KBL
        },
        {
            id: Math.random().toString(36).slice(2),
            title: 'Regard Sur Le Diplomatie',
            startTime : setTimer(19,0,0),
            endTime : setTimer(21,0,0),
            presenter: "Yves Modeste",
            img: Yves
        },
        {
            id: Math.random().toString(36).slice(2),
            title: 'Oops, We Digressed',
            startTime : setTimer(21,0,0),
            endTime : setTimer(22,0,0),
            presenter: "Tanya, Michelle and Helen",
            img: defaultJambo
        },
        {
            id: Math.random().toString(36).slice(2),
            title: 'Southern Africa Playlist (SAP)',
            startTime : setTimer(22,0,0),
            endTime : setTimer(23,0,0),
            presenter: "Jambo Presenter",
            img: defaultJambo
        },
        {
            id: Math.random().toString(36).slice(2),
            title: 'The Week In Holyrood (TWiH)',
            startTime : setTimer(23,0,0),
            endTime : setTimer(0,0,0),
            presenter: "Charles Fletcher",
            img: defaultJambo
        },
    ],
    "Friday" : [
        {
            id: Math.random().toString(36).slice(2),
            title : "Gospel Music",
            startTime : setTimer(0,0,0),
            endTime : setTimer(7,0,0),
            presenter : "Jambo Presenter",
            img : defaultJambo
        },
        {
            id: Math.random().toString(36).slice(2),
            title : "Regard Sur La Diplomatie",
            startTime : setTimer(7,0,0),
            endTime : setTimer(9,0,0),
            presenter : "Yves Modeste",
            img : Yves
        },
        {
            id: Math.random().toString(36).slice(2),
            title : "Yoruba Language Talk Show",
            startTime : setTimer(9,0,0),
            endTime : setTimer(10,0,0),
            presenter : "Oluwakemi Akinbobola",
            img : Oluwakemi
        },
        {
            id: Math.random().toString(36).slice(2),
            title : "BB African Magazine Show",
            startTime : setTimer(10,0,0),
            endTime : setTimer(12,0,0),
            presenter : "BB",
            img : BB
        },
        {
            id: Math.random().toString(36).slice(2),
            title : "West Africa Playlist (WAP)",
            startTime : setTimer(12,0,0),
            endTime : setTimer(13,0,0),
            presenter : "Jambo Presenter",
            img : defaultJambo
        },
        {
            id: Math.random().toString(36).slice(2),
            title : "The Week In Holyrood (TWiH)",
            startTime : setTimer(13,0,0),
            endTime : setTimer(14,0,0),
            presenter : "Charles Fletcher",
            img : defaultJambo
        },
        {
            id: Math.random().toString(36).slice(2),
            title : "Our Heritage",
            startTime : setTimer(14,0,0),
            endTime : setTimer(15,0,0),
            presenter : "Jambo Presenter",
            img : defaultJambo
        },
        {
            id: Math.random().toString(36).slice(2),
            title : "West Africa Playlist (WAP)",
            startTime : setTimer(15,0,0),
            endTime : setTimer(16,0,0),
            presenter : "Jambo Presenter",
            img : defaultJambo
        },
        {
            id: Math.random().toString(36).slice(2),
            title : "Yoruba Language Talk Show",
            startTime : setTimer(16,0,0),
            endTime : setTimer(17,0,0),
            presenter : "Oluwakemi Akinbobola",
            img : Oluwakemi
        },
        {
            id: Math.random().toString(36).slice(2),
            title : "Mind Matters",
            startTime : setTimer(17,0,0),
            endTime : setTimer(18,0,0),
            presenter : "Agatha Kabera",
            img : Agatha
        },
        {
            id: Math.random().toString(36).slice(2),
            title: 'Exclusive Interviews',
            startTime : setTimer(18,0,0),
            endTime : setTimer(19,0,0),
            presenter: "Jambo Presenter",
            img: defaultJambo
        },
        {
            id: Math.random().toString(36).slice(2),
            title: 'Our Heritage',
            startTime : setTimer(19,0,0),
            endTime : setTimer(20,0,0),
            presenter: "Jambo Presenter",
            img: defaultJambo
        },
        {
            id: Math.random().toString(36).slice(2),
            title: 'Music Request Show (MRS) with Chinny',
            startTime : setTimer(20,0,0),
            endTime : setTimer(22,0,0),
            presenter: "Chinny",
            img: Chinny
        },
        {
            id: Math.random().toString(36).slice(2),
            title: 'oOps! We Digressed',
            startTime : setTimer(22,0,0),
            endTime : setTimer(23,0,0),
            presenter: "Tanya, Michelle and Helen",
            img: defaultJambo
        },
        {
            id: Math.random().toString(36).slice(2),
            title: 'Interviews',
            startTime : setTimer(23,0,0),
            endTime : setTimer(0,0,0),
            presenter: "Jambo Presenter",
            img: defaultJambo
        }
    ],
    "Saturday" : [
        {
            id: Math.random().toString(36).slice(2),
            title : "Interviews",
            startTime : setTimer(0,0,0),
            endTime : setTimer(5,0,0),
            presenter : "Jambo Presenter",
            img : defaultJambo
        },
        {
            id: Math.random().toString(36).slice(2),
            title : "Interviews + Music",
            startTime : setTimer(5,0,0),
            endTime : setTimer(6,0,0),
            presenter : "Jambo Presenter",
            img : defaultJambo
        },
        {
            id: Math.random().toString(36).slice(2),
            title : "Interviews",
            startTime : setTimer(6,0,0),
            endTime : setTimer(8,0,0),
            presenter : "Jambo Presenter",
            img : defaultJambo
        },
        {
            id: Math.random().toString(36).slice(2),
            title : "This Week in Holyrood (TWiH)",
            startTime : setTimer(8,0,0),
            endTime : setTimer(10,0,0),
            presenter : "Charles Fletcher",
            img : defaultJambo
        },
        {
            id: Math.random().toString(36).slice(2),
            title : "Yoruba Language Talk Show",
            startTime : setTimer(10,0,0),
            endTime : setTimer(12,0,0),
            presenter : "Oluwakemi Akinbobola",
            img : Oluwakemi
        },
        {
            id: Math.random().toString(36).slice(2),
            title : "Our Heritage",
            startTime : setTimer(12,0,0),
            endTime : setTimer(13,0,0),
            presenter : "Jambo Presenter",
            img : defaultJambo
        },
        {
            id: Math.random().toString(36).slice(2),
            title : "Politics Explained",
            startTime : setTimer(13,0,0),
            endTime : setTimer(14,0,0),
            presenter : "Jambo Presenter",
            img : defaultJambo
        },
        {
            id: Math.random().toString(36).slice(2),
            title : "Parlons EN",
            startTime : setTimer(14,0,0),
            endTime : setTimer(15,0,0),
            presenter : "Jean Michel and Guy Njali",
            img : JeanNjali
        },
        {
            id: Math.random().toString(36).slice(2),
            title : "Central Africa Playlist (CAP)",
            startTime : setTimer(15,0,0),
            endTime : setTimer(16,0,0),
            presenter : "Jambo Presenter",
            img : defaultJambo
        },
        {
            id: Math.random().toString(36).slice(2),
            title: 'Pachedu',
            startTime : setTimer(16,0,0),
            endTime : setTimer(17,0,0),
            presenter: "Pouhela Ngangue",
            img: Pauhela
        },
        {
            id: Math.random().toString(36).slice(2),
            title: 'Pidgin Yarn',
            startTime : setTimer(17,0,0),
            endTime : setTimer(19,0,0),
            presenter: "Miyaki and co-hosts",
            img: defaultJambo
        },
        {
            id: Math.random().toString(36).slice(2),
            title: 'Swahili Voice',
            startTime : setTimer(19,0,0),
            endTime : setTimer(20,0,0),
            presenter: "Saada",
            img: Saada
        },
        {
            id: Math.random().toString(36).slice(2),
            title: 'Our Heritage',
            startTime : setTimer(20,0,0),
            endTime : setTimer(22,0,0),
            presenter: "Jambo Presenter",
            img: defaultJambo
        },
        {
            id: Math.random().toString(36).slice(2),
            title: 'Mind Matters',
            startTime : setTimer(22,0,0),
            endTime : setTimer(23,0,0),
            presenter: "Agatha Kabera",
            img: Agatha
        },
        {
            id: Math.random().toString(36).slice(2),
            title: 'Pidgin Yarn',
            startTime : setTimer(23,0,0),
            endTime : setTimer(0,0,0),
            presenter: "Miyaki and co-hosts",
            img: defaultJambo
        }
    ],
    "Sunday" : [
        {
            id: Math.random().toString(36).slice(2),
            title : "Pidgin Yarn",
            startTime : setTimer(0,0,0),
            endTime : setTimer(1,0,0),
            presenter : "Miyaki and co-hosts",
            img : defaultJambo
        },
        {
            id: Math.random().toString(36).slice(2),
            title : "Juxtaposition Debate",
            startTime : setTimer(1,0,0),
            endTime : setTimer(3,0,0),
            presenter : "Jambo Presenter",
            img : defaultJambo
        },
        {
            id: Math.random().toString(36).slice(2),
            title : "Gospel Music",
            startTime : setTimer(3,0,0),
            endTime : setTimer(9,0,0),
            presenter : "Jambo Presenter",
            img : defaultJambo
        },
        {
            id: Math.random().toString(36).slice(2),
            title : "This Week in Holyrood (TWiH)",
            startTime : setTimer(9,0,0),
            endTime : setTimer(10,0,0),
            presenter : "Charles Fletcher",
            img : defaultJambo
        },
        {
            id: Math.random().toString(36).slice(2),
            title : "Recipe for Success",
            startTime : setTimer(10,0,0),
            endTime : setTimer(11,0,0),
            presenter : "Jambo Presenter",
            img : defaultJambo
        },
        {
            id: Math.random().toString(36).slice(2),
            title : "Inspiring Transformation (IT)",
            startTime : setTimer(11,0,0),
            endTime : setTimer(12,0,0),
            presenter : "Jambo Presenter",
            img : defaultJambo
        },
        {
            id: Math.random().toString(36).slice(2),
            title : "Parlons EN",
            startTime : setTimer(12,0,0),
            endTime : setTimer(13,0,0),
            presenter : "Jean Michel and Guy Njali",
            img : JeanNjali
        },
        {
            id: Math.random().toString(36).slice(2),
            title : "This Week in Holyrood (TWiH)",
            startTime : setTimer(13,0,0),
            endTime : setTimer(14,0,0),
            presenter : "Charles Fletcher",
            img : defaultJambo
        },
        {
            id: Math.random().toString(36).slice(2),
            title : "Caribbean Vibes",
            startTime : setTimer(14,0,0),
            endTime : setTimer(15,0,0),
            presenter : "Jambo Presenter",
            img : defaultJambo
        },
        {
            id: Math.random().toString(36).slice(2),
            title : "Roots Rock Reggae",
            startTime : setTimer(15,0,0),
            endTime : setTimer(16,0,0),
            presenter : "DJ Kweizah",
            img : DJKweizah
        },
        {
            id: Math.random().toString(36).slice(2),
            title: 'Exclusive Interviews',
            startTime : setTimer(16,0,0),
            endTime : setTimer(17,0,0),
            presenter: "Jambo Presenter",
            img: defaultJambo
        },
        {
            id: Math.random().toString(36).slice(2),
            title: 'Mon Point De Vue Sur La Culture',
            startTime : setTimer(17,0,0),
            endTime : setTimer(18,0,0),
            presenter: "Pouhela Mgangue",
            img: Pauhela
        },
        {
            id: Math.random().toString(36).slice(2),
            title: 'Juxtaposition Debate',
            startTime : setTimer(18,0,0),
            endTime : setTimer(20,0,0),
            presenter: "Jambo Presenter",
            img: defaultJambo
        },
        {
            id: Math.random().toString(36).slice(2),
            title: 'Recipe for Success',
            startTime : setTimer(20,0,0),
            endTime : setTimer(21,0,0),
            presenter: "Jambo Presenter",
            img: defaultJambo
        },
        {
            id: Math.random().toString(36).slice(2),
            title: 'The Nigerian Pride',
            startTime : setTimer(21,0,0),
            endTime : setTimer(22,0,0),
            presenter: "Dr Lion Oluwole Shokunbi",
            img: Shokunbi
        },
        {
            id: Math.random().toString(36).slice(2),
            title: 'Yoruba Language Talk Show',
            startTime : setTimer(22,0,0),
            endTime : setTimer(23,0,0),
            presenter: "Oluwakemi Akinbobola",
            img: Oluwakemi
        },
        {
            id: Math.random().toString(36).slice(2),
            title: 'Made in Scotland',
            startTime : setTimer(23,0,0),
            endTime : setTimer(0,0,0),
            presenter: "Jambo Presenter",
            img: defaultJambo
        }
    ],
}

module.exports = {
    data
}