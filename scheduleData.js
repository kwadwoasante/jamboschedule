const { setTimer } = require("./constants") ;
const fs = require("fs");

// presenters images
const defaultJambo = fs.readFileSync("./assets/logo_24.png")
const BB = fs.readFileSync("./assets/imgs/BB.png");
const Oluwakemi = fs.readFileSync("./assets/imgs/Akinbobola.png");
const Saada = fs.readFileSync("./assets/imgs/Saada.png");
const Yves = fs.readFileSync("./assets/imgs/Yves.png");
const Agatha = fs.readFileSync("./assets/imgs/Agatha.png");
const Chinny = fs.readFileSync("./assets/imgs/Chinny.png");
const KBL = fs.readFileSync("./assets/imgs/KBL.png");
const JeanNjali = fs.readFileSync("./assets/imgs/Michel_and_Guy.png");
const DJKweizah = fs.readFileSync("./assets/imgs/DJ_Kweizah.png");
const Shokunbi = fs.readFileSync("./assets/imgs/Shokunbi.png");
const LadiFemi = fs.readFileSync("./assets/imgs/Ladi_and_Femi.png");
const host3000 = fs.readFileSync("./assets/imgs/3000_miles.png");
const africanWarrior = fs.readFileSync("./assets/imgs/African_warrior.png");
const drDada = fs.readFileSync("./assets/imgs/Dr_Dada.png");

const data = {
    "Mon" : [
        {
            id: Math.random().toString(36).slice(2),
            title : "Swahili Voice",
            startTime : setTimer(0,0,0),
            endTime : setTimer(1,0,0),
            presenter : "Saada",
            img : Saada,
            desc : "Talk and Music by Saada as she discusses whatever you want her to talk about. It is your questions and your discussion in Swahili plus Swahili music."
        },
        {
            id: Math.random().toString(36).slice(2),
            title : "Interviews",
            startTime : setTimer(1,0,0),
            endTime : setTimer(2,0,0),
            presenter : "Jambo Presenter",
            img : defaultJambo,
            desc : "We talk to ordinary people doing extraordinary things in the community."
        },
        {
            id: Math.random().toString(36).slice(2),
            title : "North Africa Playlist (NAP)",
            startTime : setTimer(2,0,0),
            endTime : setTimer(3,0,0),
            presenter : "Jambo Presenter",
            img : defaultJambo,
            desc : "A selection of music from North African countries"
        },
        {
            id: Math.random().toString(36).slice(2),
            title : "Interviews",
            startTime : setTimer(3,0,0),
            endTime : setTimer(4,0,0),
            presenter : "Jambo Presenter",
            img : defaultJambo,
            desc : "We talk to ordinary people doing extraordinary things in the community."
        },
        {
            id: Math.random().toString(36).slice(2),
            title : "North Africa Playlist (NAP)",
            startTime : setTimer(4,0,0),
            endTime : setTimer(5,0,0),
            presenter : "Jambo Presenter",
            img : defaultJambo,
            desc : "A selection of music from North African countries"
        },
        {
            id: Math.random().toString(36).slice(2),
            title : "Interviews",
            startTime : setTimer(5,0,0),
            endTime : setTimer(6,0,0),
            presenter : "Jambo Presenter",
            img : defaultJambo,
            desc : "We talk to ordinary people doing extraordinary things in the community."
        },
        {
            id: Math.random().toString(36).slice(2),
            title : "North Africa Playlist (NAP)",
            startTime : setTimer(6,0,0),
            endTime : setTimer(7,0,0),
            presenter : "Jambo Presenter",
            img : defaultJambo,
            desc : "A selection of music from North African countries"
        },
        {
            id: Math.random().toString(36).slice(2),
            title : "Mind Matters with Agatha Kabera",
            startTime : setTimer(7,0,0),
            endTime : setTimer(8,0,0),
            presenter : "Agatha Kabera",
            img : Agatha,
            desc : "Agatha Kabera discusses mental health issues, the stigmas, stereotypes and misconceptions within the Black communities."
        },
        {
            id: Math.random().toString(36).slice(2),
            title : "Interviews",
            startTime : setTimer(8,0,0),
            endTime : setTimer(9,0,0),
            presenter : "Jambo Presenter",
            img : defaultJambo,
            desc : "We talk to ordinary people doing extraordinary things in the community."
        },
        {
            id: Math.random().toString(36).slice(2),
            title : "Recipe for Success",
            startTime : setTimer(9,0,0),
            endTime : setTimer(10,0,0),
            presenter : "Bishop Francis Alao",
            img : defaultJambo,
            desc : "Bishop Francis Alao discusses what constitute success."
        },
        {
            id: Math.random().toString(36).slice(2),
            title: `BB's African News Magazine`,
            startTime : setTimer(10,0,0),
            endTime : setTimer(12,0,0),
            presenter: "BB",
            img: BB,
            desc : "Weekly show focused on all things positive from the Scottish African Diaspora and the African Diaspora and the African continent. Features: Interviews and spotlight on ordinary people doing extraordinary things for society/African proverbs and A moment in History telling the true facts about some known and unknown historical personalities."
        },
        {
            id: Math.random().toString(36).slice(2),
            title: 'Swahili Voice',
            startTime : setTimer(12,0,0),
            endTime : setTimer(13,0,0),
            presenter: "Saada",
            img: Saada,
            desc : "Talk and Music by Saada as she discusses whatever you want her to talk about. It is your questions and your discussion in Swahili plus Swahili music."
        },
        {
            id: Math.random().toString(36).slice(2),
            title: 'Parlons-en',
            startTime : setTimer(13,0,0),
            endTime : setTimer(14,0,0),
            presenter: "Jean Michel and Guy Njali",
            img: JeanNjali,
            desc : "Weekly show in French about Heritage"
        },
        {
            id: Math.random().toString(36).slice(2),
            title: `BB's African News Magazine`,
            startTime : setTimer(14,0,0),
            endTime : setTimer(16,0,0),
            presenter: "BB",
            img: BB,
            desc : "Weekly show focused on all things positive from the Scottish African Diaspora and the African Diaspora and the African continent. Features: Interviews and spotlight on ordinary people doing extraordinary things for society/African proverbs and A moment in History telling the true facts about some known and unknown historical personalities."
        },
        {
            id: Math.random().toString(36).slice(2),
            title: 'Yoruba Language Talk Show',
            startTime : setTimer(16,0,0),
            endTime : setTimer(17,0,0),
            presenter: "Oluwakemi Akinbobola",
            img: Oluwakemi,
            desc : "Oluwakemi Akinbobola, chatting about challenging issues couple experience."
        },
        {
            id: Math.random().toString(36).slice(2),
            title: 'North African Playlist (NAP)',
            startTime : setTimer(17,0,0),
            endTime : setTimer(18,0,0),
            presenter: "Jambo Presenter",
            img: defaultJambo,
            desc : "A selection of music from North African countries"
        },
        {
            id: Math.random().toString(36).slice(2),
            title: 'Pachedu Renfrewshire',
            startTime : setTimer(18,0,0),
            endTime : setTimer(19,0,0),
            presenter: "Jambo Presenter",
            img: defaultJambo,
            desc : "A weekly conversational program on issues affecting people in BME communities in Scotland. Coordinated by our partner, a Renfrewshire based charity which helps diverse communities called Pachedu."
        },
        {
            id: Math.random().toString(36).slice(2),
            title: 'Juxtaposition Debate',
            startTime : setTimer(19,0,0),
            endTime : setTimer(21,0,0),
            presenter: "Jambo Presenter",
            img: defaultJambo,
            desc : "Serious discussion with Barbershop Banter hosted by Andre, Roxanne and Easy"
        },
        {
            id: Math.random().toString(36).slice(2),
            title: 'The Science Show',
            startTime : setTimer(21,0,0),
            endTime : setTimer(22,0,0),
            presenter: "Dr Adetunmise Dada",
            img: drDada,
            desc : "Dr Adetunmise Dada explores everything to do with science, technology, engineering and mathematics (STEM) in plain language, through a series of interesting interviews, news highlights, reports, music and much more. The programme also showcases the people behind STEM-related activities in Scotland and beyond, all in a fun and accessible way."
        },
        {
            id: Math.random().toString(36).slice(2),
            title: 'Made in Scotland',
            startTime : setTimer(22,0,0),
            endTime : setTimer(23,0,0),
            presenter: "Jambo Presenter",
            img: defaultJambo,
            desc : "Showcase of Scotland’s undiscovered talent"
        },
        {
            id: Math.random().toString(36).slice(2),
            title: 'North African Playlist (NAP)',
            startTime : setTimer(23,0,0),
            endTime : setTimer(24,0,0),
            presenter: "Jambo Presenter",
            img: defaultJambo,
            desc : "A selection of music from North African countries"
        }
    ],
    "Tues" : [
        {
            id: Math.random().toString(36).slice(2),
            title : "Horn of Africa Playlist",
            startTime : setTimer(0,0,0),
            endTime : setTimer(1,0,0),
            presenter : "Jambo Presenter",
            img : defaultJambo,
            desc : "A selection of music from the horn of Africa countries."
        },
        {
            id: Math.random().toString(36).slice(2),
            title : "Interviews",
            startTime : setTimer(1,0,0),
            endTime : setTimer(2,0,0),
            presenter : "Jambo Presenter",
            img : defaultJambo,
            desc : "We talk to ordinary people doing extraordinary things in the community."
        },
        {
            id: Math.random().toString(36).slice(2),
            title : "Horn of Africa Playlist",
            startTime : setTimer(2,0,0),
            endTime : setTimer(3,0,0),
            presenter : "Jambo Presenter",
            img : defaultJambo,
            desc : "A selection of music from the horn of Africa countries."
        },
        {
            id: Math.random().toString(36).slice(2),
            title : "Interviews",
            startTime : setTimer(3,0,0),
            endTime : setTimer(4,0,0),
            presenter : "Jambo Presenter",
            img : defaultJambo,
            desc : "We talk to ordinary people doing extraordinary things in the community."
        },
        {
            id: Math.random().toString(36).slice(2),
            title : "Horn of Africa Playlist",
            startTime : setTimer(4,0,0),
            endTime : setTimer(5,0,0),
            presenter : "Jambo Presenter",
            img : defaultJambo,
            desc : "A selection of music from the horn of Africa countries."
        },
        {
            id: Math.random().toString(36).slice(2),
            title : "Interviews",
            startTime : setTimer(5,0,0),
            endTime : setTimer(6,0,0),
            presenter : "Jambo Presenter",
            img : defaultJambo,
            desc : "We talk to ordinary people doing extraordinary things in the community."
        },
        {
            id: Math.random().toString(36).slice(2),
            title : "Horn of Africa Playlist",
            startTime : setTimer(6,0,0),
            endTime : setTimer(7,0,0),
            presenter : "Jambo Presenter",
            img : defaultJambo,
            desc : ""
        },
        {
            id: Math.random().toString(36).slice(2),
            title : "Interviews",
            startTime : setTimer(7,0,0),
            endTime : setTimer(8,0,0),
            presenter : "Jambo Presenter",
            img : defaultJambo,
            desc : "We talk to ordinary people doing extraordinary things in the community."
        },
        {
            id: Math.random().toString(36).slice(2),
            title : "Parlons-en",
            startTime : setTimer(8,0,0),
            endTime : setTimer(9,0,0),
            presenter : "Jean Michel and Guy Njali",
            img : JeanNjali,
            desc : "Weekly show in French about Heritage"
        },
        {
            id: Math.random().toString(36).slice(2),
            title : "Horn of Africa Playlist",
            startTime : setTimer(9,0,0),
            endTime : setTimer(10,0,0),
            presenter : "Jambo Presenter",
            img : defaultJambo,
            desc : "A selection of music from the horn of Africa countries."
        },
        {
            id: Math.random().toString(36).slice(2),
            title: 'Inspiring Transformation',
            startTime : setTimer(10,0,0),
            endTime : setTimer(11,0,0),
            presenter: "Jambo Presenter",
            img: defaultJambo,
            desc : "We talk to people pushing boundaries on the road to success"
        },
        {
            id: Math.random().toString(36).slice(2),
            title: `BB's African News Magazine`,
            startTime : setTimer(11,0,0),
            endTime : setTimer(13,0,0),
            presenter: "BB",
            img: BB,
            desc : "Weekly show focused on all things positive from the Scottish African Diaspora and the African Diaspora and the African continent. Features: Interviews and spotlight on ordinary people doing extraordinary things for society/African proverbs and A moment in History telling the true facts about some known and unknown historical personalities."
        },
        {
            id: Math.random().toString(36).slice(2),
            title: 'Horn of Africa Playlist',
            startTime : setTimer(13,0,0),
            endTime : setTimer(14,0,0),
            presenter: "Jambo Presenter",
            img: defaultJambo,
            desc : "A selection of music from the horn of Africa countries."
        },
        {
            id: Math.random().toString(36).slice(2),
            title: '3000 Miles',
            startTime : setTimer(14,0,0),
            endTime : setTimer(15,0,0),
            presenter: "Jambo Presenter",
            img: host3000,
            desc : "3000 Miles kicked off initially as an immigration podcast which concerns itself with Afro-Caribbean realities and predicament in the diaspora before becoming a proper radio program on Jambo Radio Scotland which is now causing a positive wave and getting lots of attention."
        },
        {
            id: Math.random().toString(36).slice(2),
            title: 'Pachedu Renfrewshire',
            startTime : setTimer(15,0,0),
            endTime : setTimer(16,0,0),
            presenter: "Jambo Presenter",
            img: defaultJambo,
            desc : "A weekly conversational program on issues affecting people in BME communities in Scotland. Coordinated by our partner, a Renfrewshire based charity which helps diverse communities called Pachedu."
        },
        {
            id: Math.random().toString(36).slice(2),
            title: 'African Warrior',
            startTime : setTimer(16,0,0),
            endTime : setTimer(17,0,0),
            presenter: "Jambo Presenter",
            img: africanWarrior,
            desc : "The main aim of the African warrior show on Jambo Radio is to celebrate the achievements of African diasporans and their communities both abroad and back in Africa. This will be done by recognising such people on-air and seeking to have them as guests during the show to speak about their achievements, journey, aspirations, goals and advice to others such as them looking to leave a mark."
        },
        {
            id: Math.random().toString(36).slice(2),
            title: 'Roots Rock Reggae',
            startTime : setTimer(17,0,0),
            endTime : setTimer(18,0,0),
            presenter: "DJ Kweizah",
            img: DJKweizah,
            desc : "DJ Kweizah takes you on a journey to the roots of reggae music and bounces the tracks that make reggae music spiritual and exciting."
        },
        {
            id: Math.random().toString(36).slice(2),
            title: 'Horn of Africa Playlist',
            startTime : setTimer(18,0,0),
            endTime : setTimer(19,0,0),
            presenter: "Jambo Presenter",
            img: defaultJambo,
            desc : "A selection of music from the horn of Africa countries."
        },
        {
            id: Math.random().toString(36).slice(2),
            title: 'Interviews',
            startTime : setTimer(19,0,0),
            endTime : setTimer(20,0,0),
            presenter: "Jambo Presenter",
            img: defaultJambo,
            desc : "We talk to ordinary people doing extraordinary things in the community."
        },
        {
            id: Math.random().toString(36).slice(2),
            title: 'Parlons-en',
            startTime : setTimer(20,0,0),
            endTime : setTimer(21,0,0),
            presenter: "Jean Michel and Guy Njali",
            img: JeanNjali,
            desc : "Weekly show in French about Heritage"
        },
        {
            id: Math.random().toString(36).slice(2),
            title: 'Yoruba Language Talk Show',
            startTime : setTimer(21,0,0),
            endTime : setTimer(22,0,0),
            presenter: "Oluwakemi Akinbobola",
            img: Oluwakemi,
            desc : "Oluwakemi Akinbobola, chatting about challenging issues couple experience."
        },
        {
            id: Math.random().toString(36).slice(2),
            title: 'Horn of Africa Playlist',
            startTime : setTimer(22,0,0),
            endTime : setTimer(23,0,0),
            presenter: "Jambo Presenter",
            img: defaultJambo,
            desc : "A selection of music from the horn of Africa countries."
        },
        {
            id: Math.random().toString(36).slice(2),
            title: 'Made in Scotland',
            startTime : setTimer(23,0,0),
            endTime : setTimer(24,0,0),
            presenter: "Jambo Presenter",
            img: defaultJambo,
            desc : "Showcase of Scotland’s undiscovered talent"
        }
    ],
    "Wed" : [
        {
            id: Math.random().toString(36).slice(2),
            title : "East Africa Playlist",
            startTime : setTimer(0,0,0),
            endTime : setTimer(1,0,0),
            presenter : "Jambo Presenter",
            img : defaultJambo,
            desc : "A selection of music from East African countries"
        },
        {
            id: Math.random().toString(36).slice(2),
            title : "Interviews",
            startTime : setTimer(1,0,0),
            endTime : setTimer(2,0,0),
            presenter : "Jambo Presenter",
            img : defaultJambo,
            desc : "We talk to ordinary people doing extraordinary things in the community."
        },
        {
            id: Math.random().toString(36).slice(2),
            title : "East Africa Playlist",
            startTime : setTimer(2,0,0),
            endTime : setTimer(3,0,0),
            presenter : "Jambo Presenter",
            img : defaultJambo,
            desc : "A selection of music from East African countries"
        },
        {
            id: Math.random().toString(36).slice(2),
            title : "Interviews",
            startTime : setTimer(3,0,0),
            endTime : setTimer(4,0,0),
            presenter : "Jambo Presenter",
            img : defaultJambo,
            desc : "We talk to ordinary people doing extraordinary things in the community."
        },
        {
            id: Math.random().toString(36).slice(2),
            title : "East Africa Playlist",
            startTime : setTimer(4,0,0),
            endTime : setTimer(5,0,0),
            presenter : "Jambo Presenter",
            img : defaultJambo,
            desc : "A selection of music from East African countries"
        },
        {
            id: Math.random().toString(36).slice(2),
            title : "Interviews",
            startTime : setTimer(5,0,0),
            endTime : setTimer(6,0,0),
            presenter : "Jambo Presenter",
            img : defaultJambo,
            desc : "We talk to ordinary people doing extraordinary things in the community."
        },
        {
            id: Math.random().toString(36).slice(2),
            title : "East Africa Playlist (EAP)",
            startTime : setTimer(6,0,0),
            endTime : setTimer(7,0,0),
            presenter : "Jambo Presenter",
            img : defaultJambo,
            desc : "A selection of music from East African countries"
        },
        {
            id: Math.random().toString(36).slice(2),
            title : "Interviews",
            startTime : setTimer(7,0,0),
            endTime : setTimer(8,0,0),
            presenter : "Jambo Presenter",
            img : defaultJambo,
            desc : "We talk to ordinary people doing extraordinary things in the community."
        },
        {
            id: Math.random().toString(36).slice(2),
            title : "East Africa Playlist",
            startTime : setTimer(8,0,0),
            endTime : setTimer(9,0,0),
            presenter : "Jambo Presenter",
            img : defaultJambo,
            desc : "A selection of music from East African countries"
        },
        {
            id: Math.random().toString(36).slice(2),
            title: `Interviews`,
            startTime : setTimer(9,0,0),
            endTime : setTimer(10,0,0),
            presenter: "Jambo Presenter",
            img: defaultJambo,
            desc : "We talk to ordinary people doing extraordinary things in the community."
        },
        {
            id: Math.random().toString(36).slice(2),
            title: `Swahili Voice`,
            startTime : setTimer(10,0,0),
            endTime : setTimer(11,0,0),
            presenter: "Saada",
            img: Saada,
            desc : "Talk and Music by Saada as she discusses whatever you want her to talk about. It is your questions and your discussion in Swahili plus Swahili music."
        },
        {
            id: Math.random().toString(36).slice(2),
            title: 'Yoruba Language Talk Show',
            startTime : setTimer(11,0,0),
            endTime : setTimer(12,0,0),
            presenter: "Oluwakemi Akinbobola",
            img: Oluwakemi,
            desc : "Oluwakemi Akinbobola, chatting about challenging issues couple experience."
        },
        {
            id: Math.random().toString(36).slice(2),
            title: '3000 Miles',
            startTime : setTimer(12,0,0),
            endTime : setTimer(13,0,0),
            presenter: "Jambo Presenter",
            img: host3000,
            desc : "3000 Miles kicked off initially as an immigration podcast which concerns itself with Afro-Caribbean realities and predicament in the diaspora before becoming a proper radio program on Jambo Radio Scotland which is now causing a positive wave and getting lots of attention."
        },
        {
            id: Math.random().toString(36).slice(2),
            title: 'East Africa Playlist (EAP)',
            startTime : setTimer(13,0,0),
            endTime : setTimer(14,0,0),
            presenter: "Jambo Presenter",
            img: defaultJambo,
            desc : "A selection of music from East African countries"
        },
        {
            id: Math.random().toString(36).slice(2),
            title: 'The Science Show',
            startTime : setTimer(14,0,0),
            endTime : setTimer(15,0,0),
            presenter: "Dr Adetunmise Dada",
            img: drDada,
            desc : "Dr Adetunmise Dada explores everything to do with science, technology, engineering and mathematics (STEM) in plain language, through a series of interesting interviews, news highlights, reports, music and much more. The programme also showcases the people behind STEM-related activities in Scotland and beyond, all in a fun and accessible way."
        },
        {
            id: Math.random().toString(36).slice(2),
            title: 'Parlons-en',
            startTime : setTimer(15,0,0),
            endTime : setTimer(16,0,0),
            presenter: "Jean Michel and Guy Njali",
            img: JeanNjali,
            desc : "Weekly show in French about Heritage"
        },
        {
            id: Math.random().toString(36).slice(2),
            title: 'The Sports Engine',
            startTime : setTimer(16,0,0),
            endTime : setTimer(17,0,0),
            presenter: "Ladi Egbedire and Femi Afolabi",
            img: LadiFemi,
            desc : "Hosted by Ladi Egbedire and Femi Afolabi. Live every Wednesday at 2pm, Ladi and Femi talk everything sport, joined by international guests, with the latest updates from Africa, the Caribbean, and Scotland."
        },
        {
            id: Math.random().toString(36).slice(2),
            title: 'East African Playlist',
            startTime : setTimer(17,0,0),
            endTime : setTimer(18,0,0),
            presenter: "Jambo Presenter",
            img: defaultJambo,
            desc : "A selection of music from East African countries"
        },
        {
            id: Math.random().toString(36).slice(2),
            title: 'The Nigerian Pride Show',
            startTime : setTimer(18,0,0),
            endTime : setTimer(19,0,0),
            presenter: "Dr Lion Oluwole Shokunbi",
            img: Shokunbi,
            desc : "Dr Lion Oluwole Shokunbi and guests discusses Nigeria with Nigerians."
        },
        {
            id: Math.random().toString(36).slice(2),
            title: 'East African Playlist',
            startTime : setTimer(19,0,0),
            endTime : setTimer(20,0,0),
            presenter: "Jambo Presenter",
            img: defaultJambo,
            desc : "A selection of music from East African countries"
        },
        {
            id: Math.random().toString(36).slice(2),
            title: 'Interviews',
            startTime : setTimer(20,0,0),
            endTime : setTimer(21,0,0),
            presenter: "Jambo Presenter",
            img: defaultJambo,
            desc : "We talk to ordinary people doing extraordinary things in the community."
        },
        {
            id: Math.random().toString(36).slice(2),
            title: 'Swahili Voice',
            startTime : setTimer(21,0,0),
            endTime : setTimer(22,0,0),
            presenter: "Saada",
            img: Saada,
            desc : "Talk and Music by Saada as she discusses whatever you want her to talk about. It is your questions and your discussion in Swahili plus Swahili music."
        },
        {
            id: Math.random().toString(36).slice(2),
            title: 'Pachedu Renfrewshire',
            startTime : setTimer(22,0,0),
            endTime : setTimer(23,0,0),
            presenter: "Jambo Presenter",
            img: defaultJambo,
            desc : "A weekly conversational program on issues affecting people in BME communities in Scotland. Coordinated by our partner, a Renfrewshire based charity which helps diverse communities called Pachedu."
        },
        {
            id: Math.random().toString(36).slice(2),
            title: 'East African Playlist',
            startTime : setTimer(23,0,0),
            endTime : setTimer(24,0,0),
            presenter: "Jambo Presenter",
            img: defaultJambo,
            desc : "A selection of music from East African countries"
        }
    ],
    "Thurs" : [
        {
            id: Math.random().toString(36).slice(2),
            title : "Central Africa Playlist",
            startTime : setTimer(0,0,0),
            endTime : setTimer(1,0,0),
            presenter : "Jambo Presenter",
            img : defaultJambo,
            desc : "A selection of music from Central African countries."
        },
        {
            id: Math.random().toString(36).slice(2),
            title : "Interviews",
            startTime : setTimer(1,0,0),
            endTime : setTimer(2,0,0),
            presenter : "Jambo Presenter",
            img : defaultJambo,
            desc : "We talk to ordinary people doing extraordinary things in the community."
        },
        {
            id: Math.random().toString(36).slice(2),
            title : "Central Africa Playlist",
            startTime : setTimer(2,0,0),
            endTime : setTimer(3,0,0),
            presenter : "Jambo Presenter",
            img : defaultJambo,
            desc : "A selection of music from Central African countries."
        },
        {
            id: Math.random().toString(36).slice(2),
            title : "Interviews",
            startTime : setTimer(3,0,0),
            endTime : setTimer(4,0,0),
            presenter : "Jambo Presenter",
            img : defaultJambo,
            desc : "We talk to ordinary people doing extraordinary things in the community."
        },
        {
            id: Math.random().toString(36).slice(2),
            title : "Central Africa Playlist",
            startTime : setTimer(4,0,0),
            endTime : setTimer(5,0,0),
            presenter : "Jambo Presenter",
            img : defaultJambo,
            desc : "A selection of music from Central African countries."
        },
        {
            id: Math.random().toString(36).slice(2),
            title : "Interviews",
            startTime : setTimer(5,0,0),
            endTime : setTimer(6,0,0),
            presenter : "Jambo Presenter",
            img : defaultJambo,
            desc : "We talk to ordinary people doing extraordinary things in the community."
        },
        {
            id: Math.random().toString(36).slice(2),
            title : "Central Africa Playlist",
            startTime : setTimer(6,0,0),
            endTime : setTimer(7,0,0),
            presenter : "Jambo Presenter",
            img : defaultJambo,
            desc : "A selection of music from Central African countries."
        },
        {
            id: Math.random().toString(36).slice(2),
            title : "Interviews",
            startTime : setTimer(7,0,0),
            endTime : setTimer(8,0,0),
            presenter : "Jambo Presenter",
            img : defaultJambo,
            desc : "We talk to ordinary people doing extraordinary things in the community."
        },
        {
            id: Math.random().toString(36).slice(2),
            title : "Central Africa Playlist",
            startTime : setTimer(8,0,0),
            endTime : setTimer(9,0,0),
            presenter : "Jambo Presenter",
            img : defaultJambo,
            desc : "A selection of music from Central African countries."
        },
        {
            id: Math.random().toString(36).slice(2),
            title : `BB's African News Magazine`,
            startTime : setTimer(9,0,0),
            endTime : setTimer(11,0,0),
            presenter : "BB",
            img : BB,
            desc : "Weekly show focused on all things positive from the Scottish African Diaspora and the African Diaspora and the African continent. Features: Interviews and spotlight on ordinary people doing extraordinary things for society/African proverbs and A moment in History telling the true facts about some known and unknown historical personalities."
        },
        {
            id: Math.random().toString(36).slice(2),
            title: 'Central Africa Playlist',
            startTime : setTimer(11,0,0),
            endTime : setTimer(12,0,0),
            presenter: "Jambo Presenter",
            img: defaultJambo,
            desc : "A selection of music from Central African countries."
        },
        {
            id: Math.random().toString(36).slice(2),
            title: 'Omo Yoruba Atata',
            startTime : setTimer(12,0,0),
            endTime : setTimer(13,0,0),
            presenter: "Yves Modeste",
            img: Yves,
            desc : "Is another Yoruba show on Jambo Radio Scotland, which means A Good Yoruba Child. It is a show that would teach young kids how to read and write Yoruba Language and also Pronounce words in Yoruba. It will also include story telling from the olden days for young people and adults that want to know more about the Yoruba culture."
        },
        {
            id: Math.random().toString(36).slice(2),
            title: 'The Sports Engine',
            startTime : setTimer(13,0,0),
            endTime : setTimer(14,0,0),
            presenter: "Ladi Egbedire and Femi Afolabi",
            img: LadiFemi,
            desc : "Hosted by Ladi Egbedire and Femi Afolabi. Live every Wednesday at 2pm, Ladi and Femi talk everything sport, joined by international guests, with the latest updates from Africa, the Caribbean, and Scotland."
        },
        {
            id: Math.random().toString(36).slice(2),
            title: 'Interviews',
            startTime : setTimer(14,0,0),
            endTime : setTimer(15,0,0),
            presenter: "Jambo Presenter",
            img: defaultJambo,
            desc : "We talk to ordinary people doing extraordinary things in the community."
        },
        {
            id: Math.random().toString(36).slice(2),
            title: 'Parlons-en',
            startTime : setTimer(15,0,0),
            endTime : setTimer(16,0,0),
            presenter: "Jean Michel and Guy Njali",
            img: JeanNjali,
            desc : "Weekly show in French about Heritage"
        },
        {
            id: Math.random().toString(36).slice(2),
            title: 'Pachedu Renfrewshire',
            startTime : setTimer(16,0,0),
            endTime : setTimer(17,0,0),
            presenter: "Jambo Presenter",
            img: defaultJambo,
            desc : "A weekly conversational program on issues affecting people in BME communities in Scotland. Coordinated by our partner, a Renfrewshire based charity which helps diverse communities called Pachedu."
        },
        {
            id: Math.random().toString(36).slice(2),
            title: 'The Nigerian Pride Show',
            startTime : setTimer(17,0,0),
            endTime : setTimer(18,0,0),
            presenter: "Dr Lion Oluwole Shokunbi",
            img: Shokunbi,
            desc : "Dr Lion Oluwole Shokunbi and guests discusses Nigeria with Nigerians."
        },
        {
            id: Math.random().toString(36).slice(2),
            title: 'On The Double',
            startTime : setTimer(18,0,0),
            endTime : setTimer(19,0,0),
            presenter: "KBL",
            img: KBL,
            desc : "This program seeks to extensively educate the public on the positivity of hip-life, Urban music and lifestyle. It also presents the latest news and information on music, lifestyle and various artists to the public."
        },
        {
            id: Math.random().toString(36).slice(2),
            title: 'Regard Sur La Diplomatie',
            startTime : setTimer(19,0,0),
            endTime : setTimer(21,0,0),
            presenter: "Yves Modeste",
            img: Yves,
            desc : "Yves Modeste Ngue and panel talks on global diplomacy"
        },
        {
            id: Math.random().toString(36).slice(2),
            title: 'The Science Show',
            startTime : setTimer(21,0,0),
            endTime : setTimer(22,0,0),
            presenter: "Dr Adetunmise Dada",
            img: drDada,
            desc : "Dr Adetunmise Dada explores everything to do with science, technology, engineering and mathematics (STEM) in plain language, through a series of interesting interviews, news highlights, reports, music and much more. The programme also showcases the people behind STEM-related activities in Scotland and beyond, all in a fun and accessible way."
        },
        {
            id: Math.random().toString(36).slice(2),
            title: 'Central African Playlist',
            startTime : setTimer(22,0,0),
            endTime : setTimer(23,0,0),
            presenter: "Jambo Presenter",
            img: defaultJambo,
            desc : "A selection of music from Central African countries."
        },
        {
            id: Math.random().toString(36).slice(2),
            title: 'The Week In Holyrood (TWiH)',
            startTime : setTimer(23,0,0),
            endTime : setTimer(24,0,0),
            presenter: "Charles Fletcher",
            img: defaultJambo,
            desc : "Our Parliamentary Editor, Charles’s fletcher brings weekly updates on what is happening at the Scottish parliament."
        },
    ],
    "Fri" : [
        {
            id: Math.random().toString(36).slice(2),
            title : "West African Playlist",
            startTime : setTimer(0,0,0),
            endTime : setTimer(1,0,0),
            presenter : "Jambo Presenter",
            img : defaultJambo,
            desc : "A selection of music from West African countries."
        },
        {
            id: Math.random().toString(36).slice(2),
            title : "Interviews",
            startTime : setTimer(1,0,0),
            endTime : setTimer(2,0,0),
            presenter : "Jambo Presenter",
            img : defaultJambo,
            desc : "We talk to ordinary people doing extraordinary things in the community."
        },
        {
            id: Math.random().toString(36).slice(2),
            title : "West African Playlist",
            startTime : setTimer(2,0,0),
            endTime : setTimer(3,0,0),
            presenter : "Jambo Presenter",
            img : defaultJambo,
            desc : "A selection of music from West African countries."
        },
        {
            id: Math.random().toString(36).slice(2),
            title : "Interviews",
            startTime : setTimer(3,0,0),
            endTime : setTimer(4,0,0),
            presenter : "Jambo Presenter",
            img : defaultJambo,
            desc : "We talk to ordinary people doing extraordinary things in the community."
        },
        {
            id: Math.random().toString(36).slice(2),
            title : "West African Playlist",
            startTime : setTimer(4,0,0),
            endTime : setTimer(5,0,0),
            presenter : "Jambo Presenter",
            img : defaultJambo,
            desc : "A selection of music from West African countries."
        },
        {
            id: Math.random().toString(36).slice(2),
            title : "Interviews",
            startTime : setTimer(5,0,0),
            endTime : setTimer(6,0,0),
            presenter : "Jambo Presenter",
            img : defaultJambo,
            desc : "We talk to ordinary people doing extraordinary things in the community."
        },
        {
            id: Math.random().toString(36).slice(2),
            title : "West African Playlist",
            startTime : setTimer(6,0,0),
            endTime : setTimer(7,0,0),
            presenter : "Jambo Presenter",
            img : defaultJambo,
            desc : "A selection of music from West African countries."
        },
        {
            id: Math.random().toString(36).slice(2),
            title : "Interviews",
            startTime : setTimer(7,0,0),
            endTime : setTimer(8,0,0),
            presenter : "Jambo Presenter",
            img : defaultJambo,
            desc : "We talk to ordinary people doing extraordinary things in the community."
        },
        {
            id: Math.random().toString(36).slice(2),
            title : "West African Playlist",
            startTime : setTimer(8,0,0),
            endTime : setTimer(9,0,0),
            presenter : "Jambo Presenter",
            img : defaultJambo,
            desc : "A selection of music from West African countries."
        },
        {
            id: Math.random().toString(36).slice(2),
            title : "Yoruba Language Talk Show",
            startTime : setTimer(9,0,0),
            endTime : setTimer(10,0,0),
            presenter : "Oluwakemi Akinbobola",
            img : Oluwakemi,
            desc : "Oluwakemi Akinbobola, chatting about challenging issues couple experience."
        },
        {
            id: Math.random().toString(36).slice(2),
            title : `BB's African News Magazine`,
            startTime : setTimer(10,0,0),
            endTime : setTimer(12,0,0),
            presenter : "BB",
            img : BB,
            desc : "Weekly show focused on all things positive from the Scottish African Diaspora and the African Diaspora and the African continent. Features: Interviews and spotlight on ordinary people doing extraordinary things for society/African proverbs and A moment in History telling the true facts about some known and unknown historical personalities."
        },
        {
            id: Math.random().toString(36).slice(2),
            title : "West African Playlist",
            startTime : setTimer(12,0,0),
            endTime : setTimer(13,0,0),
            presenter : "Jambo Presenter",
            img : defaultJambo,
            desc : "A selection of music from West African countries."
        },
        {
            id: Math.random().toString(36).slice(2),
            title: 'The Week In Holyrood (TWiH)',
            startTime : setTimer(13,0,0),
            endTime : setTimer(14,0,0),
            presenter: "Charles Fletcher",
            img: defaultJambo,
            desc : "Our Parliamentary Editor, Charles’s fletcher brings weekly updates on what is happening at the Scottish parliament."
        },
        {
            id: Math.random().toString(36).slice(2),
            title: 'Planet Sports Footbal Africa',
            startTime : setTimer(14,0,0),
            endTime : setTimer(15,0,0),
            presenter: "Jambo Presenter",
            img: defaultJambo,
            desc : "Football talk show produced by Passion for Sports"
        },
        {
            id: Math.random().toString(36).slice(2),
            title: 'West African Playlist',
            startTime : setTimer(15,0,0),
            endTime : setTimer(16,0,0),
            presenter: "Jambo Presenter",
            img: defaultJambo,
            desc : "A selection of music from West African countries."
        },
        {
            id: Math.random().toString(36).slice(2),
            title : "Yoruba Language Talk Show",
            startTime : setTimer(16,0,0),
            endTime : setTimer(17,0,0),
            presenter : "Oluwakemi Akinbobola",
            img : Oluwakemi,
            desc : "Oluwakemi Akinbobola, chatting about challenging issues couple experience."
        },
        {
            id: Math.random().toString(36).slice(2),
            title : "Mind Matters with Agatha Kabera",
            startTime : setTimer(17,0,0),
            endTime : setTimer(18,0,0),
            presenter : "Agatha Kabera",
            img : Agatha,
            desc : "Agatha Kabera discusses mental health issues, the stigmas, stereotypes and misconceptions within the Black communities."
        },
        {
            id: Math.random().toString(36).slice(2),
            title : "Interviews",
            startTime : setTimer(18,0,0),
            endTime : setTimer(19,0,0),
            presenter : "Jambo Presenter",
            img : defaultJambo,
            desc : "We talk to ordinary people doing extraordinary things in the community."
        },
        {
            id: Math.random().toString(36).slice(2),
            title : "Our Heritage",
            startTime : setTimer(19,0,0),
            endTime : setTimer(20,0,0),
            presenter : "Jambo Presenter",
            img : defaultJambo,
            desc : "A series of programmes about the heritage sector in Scotland. Also available in other languages."
        },
        {
            id: Math.random().toString(36).slice(2),
            title : "Music Request Show with Chinny",
            startTime : setTimer(20,0,0),
            endTime : setTimer(22,0,0),
            presenter : "Chinny",
            img : Chinny,
            desc : "Music Show with Chinny as your host. Every week she interviews a music artist and gives her top 5 tracks of the week. In the second hour, she plays the music requests that our listeners have been sending in on our WhatsApp number, through the website and app"
        },
        {
            id: Math.random().toString(36).slice(2),
            title: 'oOps! We Digressed',
            startTime : setTimer(22,0,0),
            endTime : setTimer(23,0,0),
            presenter: "Tanya, Michelle and Helen",
            img: defaultJambo,
            desc : "Hosted by three best friends, Tanya, Michelle and Helen – this is a fun show that explores friendship, life and trending pop-culture debates."
        },
        {
            id: Math.random().toString(36).slice(2),
            title: 'West Afrcan Playlist',
            startTime : setTimer(23,0,0),
            endTime : setTimer(24,0,0),
            presenter: "Jambo Presenter",
            img: defaultJambo,
            desc : "A selection of music from West African countries."
        }
    ],
    "Sat" : [
        {
            id: Math.random().toString(36).slice(2),
            title : "Southern African Playlist",
            startTime : setTimer(0,0,0),
            endTime : setTimer(1,0,0),
            presenter : "Jambo Presenter",
            img : defaultJambo,
            desc : "A selection of music from Southern African countries."
        },
        {
            id: Math.random().toString(36).slice(2),
            title : "West African Playlist",
            startTime : setTimer(1,0,0),
            endTime : setTimer(2,0,0),
            presenter : "Jambo Presenter",
            img : defaultJambo,
            desc : "A selection of music from West African countries."
        },
        {
            id: Math.random().toString(36).slice(2),
            title : "Southern African Playlist",
            startTime : setTimer(2,0,0),
            endTime : setTimer(3,0,0),
            presenter : "Jambo Presenter",
            img : defaultJambo,
            desc : "A selection of music from Southern African countries."
        },
        {
            id: Math.random().toString(36).slice(2),
            title : "West African Playlist",
            startTime : setTimer(3,0,0),
            endTime : setTimer(4,0,0),
            presenter : "Jambo Presenter",
            img : defaultJambo,
            desc : "A selection of music from West African countries."
        },
        {
            id: Math.random().toString(36).slice(2),
            title : "Interviews",
            startTime : setTimer(4,0,0),
            endTime : setTimer(5,0,0),
            presenter : "Jambo Presenter",
            img : defaultJambo,
            desc : "We talk to ordinary people doing extraordinary things in the community."
        },
        {
            id: Math.random().toString(36).slice(2),
            title : "Southern African Playlist",
            startTime : setTimer(5,0,0),
            endTime : setTimer(6,0,0),
            presenter : "Jambo Presenter",
            img : defaultJambo,
            desc : "A selection of music from Southern African countries."
        },
        {
            id: Math.random().toString(36).slice(2),
            title : "Interviews",
            startTime : setTimer(6,0,0),
            endTime : setTimer(7,0,0),
            presenter : "Jambo Presenter",
            img : defaultJambo,
            desc : "We talk to ordinary people doing extraordinary things in the community."
        },
        {
            id: Math.random().toString(36).slice(2),
            title : "Southern African Playlist",
            startTime : setTimer(7,0,0),
            endTime : setTimer(8,0,0),
            presenter : "Jambo Presenter",
            img : defaultJambo,
            desc : "A selection of music from Southern African countries."
        },
        {
            id: Math.random().toString(36).slice(2),
            title : "This Week in Holyrood (TWiH)",
            startTime : setTimer(8,0,0),
            endTime : setTimer(9,0,0),
            presenter : "Charles Fletcher",
            img : defaultJambo,
            desc : "Our Parliamentary Editor, Charles’s fletcher brings weekly updates on what is happening at the Scottish parliament."
        },
        {
            id: Math.random().toString(36).slice(2),
            title : "Planet Sports Football Africa",
            startTime : setTimer(9,0,0),
            endTime : setTimer(10,0,0),
            presenter : "Jambo Presenter",
            img : defaultJambo,
            desc : "Football talk show produced by Passion for Sports"
        },
        {
            id: Math.random().toString(36).slice(2),
            title : "Yoruba Language Talk Show",
            startTime : setTimer(10,0,0),
            endTime : setTimer(11,0,0),
            presenter : "Oluwakemi Akinbobola",
            img : Oluwakemi,
            desc : "Oluwakemi Akinbobola, chatting about challenging issues couple experience."
        },
        {
            id: Math.random().toString(36).slice(2),
            title : "BB's African Magazine Show",
            startTime : setTimer(11,0,0),
            endTime : setTimer(13,0,0),
            presenter : "BB",
            img : BB,
            desc : "Weekly show focused on all things positive from the Scottish African Diaspora and the African Diaspora and the African continent. Features: Interviews and spotlight on ordinary people doing extraordinary things for society/African proverbs and A moment in History telling the true facts about some known and unknown historical personalities."
        },
        {
            id: Math.random().toString(36).slice(2),
            title : "On the Double by KBL",
            startTime : setTimer(13,0,0),
            endTime : setTimer(14,0,0),
            presenter : "KBL",
            img : KBL,
            desc : "This program seeks to extensively educate the public on the positivity of hip-life, Urban music and lifestyle. It also presents the latest news and information on music, lifestyle and various artists to the public."
        },
        {
            id: Math.random().toString(36).slice(2),
            title : "Parlons-en",
            startTime : setTimer(14,0,0),
            endTime : setTimer(15,0,0),
            presenter : "Jean Michel and Guy Njali",
            img : JeanNjali,
            desc : "Weekly show in French about Heritage"
        },
        {
            id: Math.random().toString(36).slice(2),
            title: 'Pidgin Yarn',
            startTime : setTimer(15,0,0),
            endTime : setTimer(17,0,0),
            presenter: "Miyaki and co-hosts",
            img: defaultJambo,
            desc : "Talk show in Pidgin Language - Miyaki and co-hosts chat on topic and play music."
        },
        {
            id: Math.random().toString(36).slice(2),
            title: 'Southern African Playlist',
            startTime : setTimer(17,0,0),
            endTime : setTimer(18,0,0),
            presenter: "Jambo Presenter",
            img: defaultJambo,
            desc : "A selection of music from Southern African countries."
        },
        {
            id: Math.random().toString(36).slice(2),
            title: 'Pachedu',
            startTime : setTimer(18,0,0),
            endTime : setTimer(19,0,0),
            presenter: "Jambo Presenter",
            img: defaultJambo,
            desc : "A weekly conversational program on issues affecting people in BME communities in Scotland. Coordinated by our partner, a Renfrewshire based charity which helps diverse communities called Pachedu."
        },
        {
            id: Math.random().toString(36).slice(2),
            title: 'Swahili Voice',
            startTime : setTimer(19,0,0),
            endTime : setTimer(20,0,0),
            presenter: "Saada",
            img: Saada,
            desc : "Talk and Music by Saada as she discusses whatever you want her to talk about. It is your questions and your discussion in Swahili plus Swahili music."
        },
        {
            id: Math.random().toString(36).slice(2),
            title: 'The Science Show',
            startTime : setTimer(20,0,0),
            endTime : setTimer(21,0,0),
            presenter: "Dr Adetunmise Dada",
            img: drDada,
            desc : "Dr Adetunmise Dada explores everything to do with science, technology, engineering and mathematics (STEM) in plain language, through a series of interesting interviews, news highlights, reports, music and much more. The programme also showcases the people behind STEM-related activities in Scotland and beyond, all in a fun and accessible way."
        },
        {
            id: Math.random().toString(36).slice(2),
            title: 'Black Music in Scotland',
            startTime : setTimer(21,0,0),
            endTime : setTimer(22,0,0),
            presenter: "Jambo Presenter",
            img: defaultJambo,
            desc : "Black Music in Scotland. Hosted by MC Trigga"
        },
        {
            id: Math.random().toString(36).slice(2),
            title: 'Music Request Show with Chinny',
            startTime : setTimer(22,0,0),
            endTime : setTimer(24,0,0),
            presenter: "Chinny",
            img: Chinny,
            desc : "Music Show with Chinny as your host. Every week she interviews a music artist and gives her top 5 tracks of the week. In the second hour, she plays the music requests that our listeners have been sending in on our WhatsApp number, through the website and app"
        }
    ],
    "Sun" : [
        {
            id: Math.random().toString(36).slice(2),
            title : "Carribean Vibes",
            startTime : setTimer(0,0,0),
            endTime : setTimer(1,0,0),
            presenter : "Jambo Presenter",
            img : defaultJambo,
            desc : "A selection of music from the nations in the Caribbean."
        },
        {
            id: Math.random().toString(36).slice(2),
            title : "Juxtaposition Debate",
            startTime : setTimer(1,0,0),
            endTime : setTimer(3,0,0),
            presenter : "Jambo Presenter",
            img : defaultJambo,
            desc : "Serious discussion with Barbershop Banter hosted by Andre, Roxanne and Easy"
        },
        {
            id: Math.random().toString(36).slice(2),
            title : "Carribean Vibes",
            startTime : setTimer(3,0,0),
            endTime : setTimer(4,0,0),
            presenter : "Jambo Presenter",
            img : defaultJambo,
            desc : "A selection of music from the nations in the Caribbean."
        },
        {
            id: Math.random().toString(36).slice(2),
            title : "Gospel Music",
            startTime : setTimer(4,0,0),
            endTime : setTimer(8,0,0),
            presenter : "Jambo Presenter",
            img : defaultJambo,
            desc : "Inspiring songs by leading gospel singers to kick- start your week in meditation and reflection."
        },
        {
            id: Math.random().toString(36).slice(2),
            title : "Carribean Vibes",
            startTime : setTimer(8,0,0),
            endTime : setTimer(9,0,0),
            presenter : "Jambo Presenter",
            img : defaultJambo,
            desc : "A selection of music from the nations in the Caribbean."
        },
        {
            id: Math.random().toString(36).slice(2),
            title : "This Week in Holyrood (TWiH)",
            startTime : setTimer(9,0,0),
            endTime : setTimer(10,0,0),
            presenter : "Charles Fletcher",
            img : defaultJambo,
            desc : "Our Parliamentary Editor, Charles’s fletcher brings weekly updates on what is happening at the Scottish parliament."
        },
        {
            id: Math.random().toString(36).slice(2),
            title : "Recipe for Success",
            startTime : setTimer(10,0,0),
            endTime : setTimer(11,0,0),
            presenter : "Bishop Francis Alao",
            img : defaultJambo,
            desc : "Bishop Francis Alao discusses what constitute success."
        },
        {
            id: Math.random().toString(36).slice(2),
            title : "Carribean Vibes",
            startTime : setTimer(11,0,0),
            endTime : setTimer(12,0,0),
            presenter : "Jambo Presenter",
            img : defaultJambo,
            desc : "A selection of music from the nations in the Caribbean."
        },
        {
            id: Math.random().toString(36).slice(2),
            title : "Regard Sur La Diplomatie",
            startTime : setTimer(12,0,0),
            endTime : setTimer(14,0,0),
            presenter : "Yves Modeste",
            img : Yves,
            desc : "Yves Modeste Ngue and panel talks on global diplomacy"
        },
        {
            id: Math.random().toString(36).slice(2),
            title : "This Week in Holyrood (TWiH)",
            startTime : setTimer(14,0,0),
            endTime : setTimer(15,0,0),
            presenter : "Charles Fletcher",
            img : defaultJambo,
            desc : "Our Parliamentary Editor, Charles’s fletcher brings weekly updates on what is happening at the Scottish parliament."
        },
        {
            id: Math.random().toString(36).slice(2),
            title : "Roots Rock Reggae",
            startTime : setTimer(15,0,0),
            endTime : setTimer(16,0,0),
            presenter : "DJ Kweizah",
            img : DJKweizah,
            desc : "DJ Kweizah takes you on a journey to the roots of reggae music and bounces the tracks that make reggae music spiritual and exciting."
        },
        {
            id: Math.random().toString(36).slice(2),
            title: 'Mind Matters with Agatha Kabera',
            startTime : setTimer(16,0,0),
            endTime : setTimer(17,0,0),
            presenter: "Agatha Kabera",
            img: Agatha,
            desc : "Agatha Kabera discusses mental health issues, the stigmas, stereotypes and misconceptions within the Black communities."
        },
        {
            id: Math.random().toString(36).slice(2),
            title : "Caribbean Vibes",
            startTime : setTimer(17,0,0),
            endTime : setTimer(18,0,0),
            presenter : "Jambo Presenter",
            img : defaultJambo,
            desc : "A selection of music from the nations in the Caribbean."
        },
        {
            id: Math.random().toString(36).slice(2),
            title: 'Juxtaposition Debate',
            startTime : setTimer(18,0,0),
            endTime : setTimer(20,0,0),
            presenter: "Jambo Presenter",
            img: defaultJambo,
            desc : "Serious discussion with Barbershop Banter hosted by Andre, Roxanne and Easy"
        },
        {
            id: Math.random().toString(36).slice(2),
            title: 'The Nigerian Pride',
            startTime : setTimer(20,0,0),
            endTime : setTimer(21,0,0),
            presenter: "Dr Lion Oluwole Shokunbi",
            img: Shokunbi,
            desc : "Dr Lion Oluwole Shokunbi and guests discusses Nigeria with Nigerians."
        },
        {
            id: Math.random().toString(36).slice(2),
            title: 'Carribean Vibes',
            startTime : setTimer(21,0,0),
            endTime : setTimer(22,0,0),
            presenter: "Jambo Presenter",
            img: defaultJambo,
            desc : "A selection of music from the nations in the Caribbean."
        },
        {
            id: Math.random().toString(36).slice(2),
            title: 'Yoruba Language Talk Show',
            startTime : setTimer(22,0,0),
            endTime : setTimer(23,0,0),
            presenter: "Oluwakemi Akinbobola",
            img: Oluwakemi,
            desc : "Oluwakemi Akinbobola, chatting about challenging issues couple experience."
        },
        {
            id: Math.random().toString(36).slice(2),
            title: 'Made in Scotland',
            startTime : setTimer(23,0,0),
            endTime : setTimer(24,0,0),
            presenter: "Jambo Presenter",
            img: defaultJambo,
            desc : "Showcase of Scotland’s undiscovered talent"
        }
    ],
}

module.exports = { data }