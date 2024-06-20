const { setTimer } = require("./constants") ;
const fs = require("fs");
const { touchPoint, madeInScotland, areYouKiddinMe, reggaeWorld, basolo, regardSur, stereoLove, storiesShapeUs, exploringFaith, sportsEngine, moment, driveTimeShow, scienceShow, planetSport, onTheDouble, southernPlaylist, westernPlaylist, interviews, centralPlaylist, twih, magazineShow, easternPlaylist, northernPlaylist, hornPlaylist, emptyShow } = require("./outputShows");

// presenters images
const defaultJambo = "http://asantekwabiah.com/assets/img/jambo/logo_24.png"
const BB = "http://asantekwabiah.com/assets/img/jambo/BB.png";
const Oluwakemi = "http://asantekwabiah.com/assets/img/jambo/Akinbobola.png";
const Saada = "http://asantekwabiah.com/assets/img/jambo/Saada.png";
const Yves = "http://asantekwabiah.com/assets/img/jambo/Yves.png";
const Agatha = "http://asantekwabiah.com/assets/img/jambo/Agatha.png";
const Chinny = "http://asantekwabiah.com/assets/img/jambo/Chinny.png";
const KBL = "http://asantekwabiah.com/assets/img/jambo/KBL.png";
const JeanNjali = "http://asantekwabiah.com/assets/img/jambo/Michel_and_Guy.png";
const DJKweizah = "http://asantekwabiah.com/assets/img/jambo/DJ_Kweizah.png";
const Shokunbi = "http://asantekwabiah.com/assets/img/jambo/Shokunbi.png";
const LadiFemi = "http://asantekwabiah.com/assets/img/jambo/Ladi_and_Femi.png";
const host3000 = "http://asantekwabiah.com/assets/img/jambo/3000_miles.png";
const africanWarrior = "http://asantekwabiah.com/assets/img/jambo/African_warrior.png";
const drDada = "http://asantekwabiah.com/assets/img/jambo/Dr_Dada.png";

const data = {
    "Mon" : [
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(0,0,0),
            endTime : setTimer(1,0,0),
            ...reggaeWorld()
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(1,0,0),
            endTime : setTimer(2,0,0),
            ...westernPlaylist()
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(2,0,0),
            endTime : setTimer(3,0,0),
            ...southernPlaylist()
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(3,0,0),
            endTime : setTimer(4,0,0),
            ...hornPlaylist()
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(4,0,0),
            endTime : setTimer(5,0,0),
            ...driveTimeShow()
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(5,0,0),
            endTime : setTimer(6,0,0),
            ...emptyShow()
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(6,0,0),
            endTime : setTimer(7,0,0),
            ...magazineShow()
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(7,0,0),
            endTime : setTimer(8,0,0),
            ...magazineShow()
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(8,0,0),
            endTime : setTimer(9,0,0),
            ...moment()
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(9,0,0),
            endTime : setTimer(10,0,0),
            ...magazineShow()
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(10,0,0),
            endTime : setTimer(11,0,0),
            ...magazineShow()
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(11,0,0),
            endTime : setTimer(12,0,0),
            ...scienceShow()
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(12,0,0),
            endTime : setTimer(13,0,0),
            ...stereoLove()
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(13,0,0),
            endTime : setTimer(14,0,0),
            ...twih()
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(14,0,0),
            endTime : setTimer(15,0,0),
            ...interviews()
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(15,0,0),
            endTime : setTimer(16,0,0),
            ...emptyShow()
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(16,0,0),
            endTime : setTimer(17,0,0),
            ...planetSport()
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(17,0,0),
            endTime : setTimer(18,0,0),
            ...sportsEngine()
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(18,0,0),
            endTime : setTimer(19,0,0),
            ...stereoLove()
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(19,0,0),
            endTime : setTimer(20,0,0),
            ...touchPoint()
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(20,0,0),
            endTime : setTimer(21,0,0),
            ...sportsEngine()
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(21,0,0),
            endTime : setTimer(22,0,0),
            ...scienceShow()
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(22,0,0),
            endTime : setTimer(23,0,0),
            ...exploringFaith()
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(23,0,0),
            endTime : setTimer(24,0,0),
            ...reggaeWorld()
        }
    ],
    "Tues" : [
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(0,0,0),
            endTime : setTimer(1,0,0),
            ...westernPlaylist()
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(1,0,0),
            endTime : setTimer(2,0,0),
            ...easternPlaylist()
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(2,0,0),
            endTime : setTimer(3,0,0),
            ...northernPlaylist()
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(3,0,0),
            endTime : setTimer(4,0,0),
            ...emptyShow()
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(4,0,0),
            endTime : setTimer(5,0,0),
            ...basolo()
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(5,0,0),
            endTime : setTimer(6,0,0),
            ...scienceShow()
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(6,0,0),
            endTime : setTimer(7,0,0),
            ...storiesShapeUs()
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(7,0,0),
            endTime : setTimer(8,0,0),
            ...moment()
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(8,0,0),
            endTime : setTimer(9,0,0),
            ...sportsEngine()
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(9,0,0),
            endTime : setTimer(10,0,0),
            ...onTheDouble()
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(10,0,0),
            endTime : setTimer(11,0,0),
            ...onTheDouble()
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(11,0,0),
            endTime : setTimer(12,0,0),
            ...stereoLove()
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(12,0,0),
            endTime : setTimer(13,0,0),
            ...twih()
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(13,0,0),
            endTime : setTimer(14,0,0),
            ...interviews()
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(14,0,0),
            endTime : setTimer(15,0,0),
            ...basolo()
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(15,0,0),
            endTime : setTimer(16,0,0),
            ...madeInScotland()
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(16,0,0),
            endTime : setTimer(17,0,0),
            ...storiesShapeUs()
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(17,0,0),
            endTime : setTimer(18,0,0),
            ...reggaeWorld()
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(18,0,0),
            endTime : setTimer(19,0,0),
            ...madeInScotland()
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(19,0,0),
            endTime : setTimer(20,0,0),
            ...onTheDouble()
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(20,0,0),
            endTime : setTimer(21,0,0),
            ...onTheDouble()
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(21,0,0),
            endTime : setTimer(22,0,0),
            ...exploringFaith()
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(22,0,0),
            endTime : setTimer(23,0,0),
            ...twih()
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(23,0,0),
            endTime : setTimer(24,0,0),
            ...interviews()
        }
    ],
    "Wed" : [
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(0,0,0),
            endTime : setTimer(1,0,0),
            ...basolo()
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(1,0,0),
            endTime : setTimer(2,0,0),
            ...northernPlaylist()
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(2,0,0),
            endTime : setTimer(3,0,0),
            ...hornPlaylist()
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(3,0,0),
            endTime : setTimer(4,0,0),
            ...driveTimeShow()
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(4,0,0),
            endTime : setTimer(5,0,0),
            ...driveTimeShow()
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(5,0,0),
            endTime : setTimer(6,0,0),
            ...storiesShapeUs()
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(6,0,0),
            endTime : setTimer(7,0,0),
            ...moment()
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(7,0,0),
            endTime : setTimer(8,0,0),
            ...emptyShow()
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(8,0,0),
            endTime : setTimer(9,0,0),
            ...emptyShow()
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(9,0,0),
            endTime : setTimer(10,0,0),
            ...scienceShow()
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(10,0,0),
            endTime : setTimer(11,0,0),
            ...madeInScotland()
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(11,0,0),
            endTime : setTimer(12,0,0),
            ...twih()
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(12,0,0),
            endTime : setTimer(13,0,0),
            ...interviews()
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(13,0,0),
            endTime : setTimer(14,0,0),
            ...planetSport()
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(14,0,0),
            endTime : setTimer(15,0,0),
            ...scienceShow()
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(15,0,0),
            endTime : setTimer(16,0,0),
            ...storiesShapeUs()
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(16,0,0),
            endTime : setTimer(17,0,0),
            ...sportsEngine()
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(17,0,0),
            endTime : setTimer(18,0,0),
            ...storiesShapeUs()
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(18,0,0),
            endTime : setTimer(19,0,0),
            ...moment()
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(19,0,0),
            endTime : setTimer(20,0,0),
            ...scienceShow()
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(20,0,0),
            endTime : setTimer(21,0,0),
            ...reggaeWorld()
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(21,0,0),
            endTime : setTimer(22,0,0),
            ...twih()
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(22,0,0),
            endTime : setTimer(23,0,0),
            ...regardSur()
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(23,0,0),
            endTime : setTimer(24,0,0),
            ...regardSur()
        }
    ],
    "Thurs" : [
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(0,0,0),
            endTime : setTimer(1,0,0),
            ...southernPlaylist()
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(1,0,0),
            endTime : setTimer(2,0,0),
            ...emptyShow()
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(2,0,0),
            endTime : setTimer(3,0,0),
            ...emptyShow()
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(3,0,0),
            endTime : setTimer(4,0,0),
            ...easternPlaylist()
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(4,0,0),
            endTime : setTimer(5,0,0),
            ...magazineShow()
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(5,0,0),
            endTime : setTimer(6,0,0),
            ...magazineShow()
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(6,0,0),
            endTime : setTimer(7,0,0),
            ...sportsEngine()
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(7,0,0),
            endTime : setTimer(8,0,0),
            ...moment()
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(8,0,0),
            endTime : setTimer(9,0,0),
            ...scienceShow()
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(9,0,0),
            endTime : setTimer(10,0,0),
            ...emptyShow()
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(10,0,0),
            endTime : setTimer(11,0,0),
            ...emptyShow()
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(11,0,0),
            endTime : setTimer(12,0,0),
            ...madeInScotland()
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(12,0,0),
            endTime : setTimer(13,0,0),
            ...planetSport()
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(13,0,0),
            endTime : setTimer(14,0,0),
            ...reggaeWorld()
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(14,0,0),
            endTime : setTimer(15,0,0),
            ...magazineShow()
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(15,0,0),
            endTime : setTimer(16,0,0),
            ...magazineShow()
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(16,0,0),
            endTime : setTimer(17,0,0),
            ...driveTimeShow()
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(17,0,0),
            endTime : setTimer(18,0,0),
            ...driveTimeShow()
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(18,0,0),
            endTime : setTimer(19,0,0),
            ...regardSur()
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(19,0,0),
            endTime : setTimer(20,0,0),
            ...regardSur()
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(20,0,0),
            endTime : setTimer(21,0,0),
            ...reggaeWorld()
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(21,0,0),
            endTime : setTimer(22,0,0),
            ...emptyShow()
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(22,0,0),
            endTime : setTimer(23,0,0),
            ...areYouKiddinMe()
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(23,0,0),
            endTime : setTimer(24,0,0),
            ...twih()
        },
    ],
    "Fri" : [
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(0,0,0),
            endTime : setTimer(1,0,0),
            ...madeInScotland()
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(1,0,0),
            endTime : setTimer(2,0,0),
            ...hornPlaylist()
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(2,0,0),
            endTime : setTimer(3,0,0),
            ...westernPlaylist()
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(3,0,0),
            endTime : setTimer(4,0,0),
            ...southernPlaylist()
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(4,0,0),
            endTime : setTimer(5,0,0),
            ...storiesShapeUs()
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(5,0,0),
            endTime : setTimer(6,0,0),
            ...sportsEngine()
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(6,0,0),
            endTime : setTimer(7,0,0),
            ...onTheDouble()
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(7,0,0),
            endTime : setTimer(8,0,0),
            ...onTheDouble()
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(8,0,0),
            endTime : setTimer(9,0,0),
            ...sportsEngine()
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(9,0,0),
            endTime : setTimer(10,0,0),
            ...twih()
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(10,0,0),
            endTime : setTimer(11,0,0),
            ...emptyShow()
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(11,0,0),
            endTime : setTimer(12,0,0),
            ...planetSport()
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(12,0,0),
            endTime : setTimer(13,0,0),
            ...basolo()
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(13,0,0),
            endTime : setTimer(14,0,0),
            ...exploringFaith()
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(14,0,0),
            endTime : setTimer(15,0,0),
            ...storiesShapeUs()
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(15,0,0),
            endTime : setTimer(16,0,0),
            ...stereoLove()
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(16,0,0),
            endTime : setTimer(17,0,0),
            ...planetSport()
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(17,0,0),
            endTime : setTimer(18,0,0),
            ...madeInScotland()
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(18,0,0),
            endTime : setTimer(19,0,0),
            ...stereoLove()
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(19,0,0),
            endTime : setTimer(20,0,0),
            ...exploringFaith()
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(20,0,0),
            endTime : setTimer(21,0,0),
            ...interviews()
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(21,0,0),
            endTime : setTimer(22,0,0),
            ...areYouKiddinMe()
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(22,0,0),
            endTime : setTimer(23,0,0),
            ...planetSport()
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(23,0,0),
            endTime : setTimer(24,0,0),
            ...westernPlaylist()
        }
    ],
    "Sat" : [
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(0,0,0),
            endTime : setTimer(1,0,0),
            ...stereoLove()
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(1,0,0),
            endTime : setTimer(2,0,0),
            ...emptyShow()
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(2,0,0),
            endTime : setTimer(3,0,0),
            ...easternPlaylist()
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(3,0,0),
            endTime : setTimer(4,0,0),
            ...emptyShow()
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(4,0,0),
            endTime : setTimer(5,0,0),
            ...moment()
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(5,0,0),
            endTime : setTimer(6,0,0),
            ...driveTimeShow()
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(6,0,0),
            endTime : setTimer(7,0,0),
            ...driveTimeShow()
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(7,0,0),
            endTime : setTimer(8,0,0),
            ...regardSur()
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(8,0,0),
            endTime : setTimer(9,0,0),
            ...regardSur()
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(9,0,0),
            endTime : setTimer(10,0,0),
            ...twih()
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(10,0,0),
            endTime : setTimer(11,0,0),
            ...exploringFaith()
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(11,0,0),
            endTime : setTimer(12,0,0),
            ...magazineShow()
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(12,0,0),
            endTime : setTimer(13,0,0),
            ...magazineShow()
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(13,0,0),
            endTime : setTimer(14,0,0),
            ...storiesShapeUs()
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(14,0,0),
            endTime : setTimer(15,0,0),
            ...basolo()
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(15,0,0),
            endTime : setTimer(16,0,0),
            ...scienceShow()
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(16,0,0),
            endTime : setTimer(17,0,0),
            ...sportsEngine()
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(17,0,0),
            endTime : setTimer(18,0,0),
            ...moment()
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(18,0,0),
            endTime : setTimer(19,0,0),
            ...twih()
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(19,0,0),
            endTime : setTimer(20,0,0),
            ...interviews()
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(20,0,0),
            endTime : setTimer(21,0,0),
            ...planetSport()
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(21,0,0),
            endTime : setTimer(22,0,0),
            ...basolo()
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(22,0,0),
            endTime : setTimer(23,0,0),
            ...areYouKiddinMe()
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(23,0,0),
            endTime : setTimer(4,0,0),
            ...emptyShow()
        }
    ],
    "Sun" : [
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(0,0,0),
            endTime : setTimer(1,0,0),
            ...emptyShow()
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(1,0,0),
            endTime : setTimer(2,0,0),
            ...stereoLove()
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(2,0,0),
            endTime : setTimer(3,0,0),
            ...basolo()
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(3,0,0),
            endTime : setTimer(4,0,0),
            ...driveTimeShow()
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(4,0,0),
            endTime : setTimer(5,0,0),
            ...driveTimeShow()
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(5,0,0),
            endTime : setTimer(6,0,0),
            ...scienceShow()
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(6,0,0),
            endTime : setTimer(7,0,0),
            ...regardSur()
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(7,0,0),
            endTime : setTimer(8,0,0),
            ...regardSur()
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(8,0,0),
            endTime : setTimer(9,0,0),
            ...interviews()
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(9,0,0),
            endTime : setTimer(10,0,0),
            ...emptyShow()
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(10,0,0),
            endTime : setTimer(11,0,0),
            ...exploringFaith()
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(11,0,0),
            endTime : setTimer(12,0,0),
            ...magazineShow()
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(12,0,0),
            endTime : setTimer(13,0,0),
            ...magazineShow()
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(13,0,0),
            endTime : setTimer(14,0,0),
            ...stereoLove()
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(14,0,0),
            endTime : setTimer(15,0,0),
            ...emptyShow()
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(15,0,0),
            endTime : setTimer(16,0,0),
            ...scienceShow()
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(16,0,0),
            endTime : setTimer(17,0,0),
            ...twih()
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(17,0,0),
            endTime : setTimer(18,0,0),
            ...storiesShapeUs()
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(18,0,0),
            endTime : setTimer(19,0,0),
            ...moment()
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(19,0,0),
            endTime : setTimer(20,0,0),
            ...planetSport()
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(20,0,0),
            endTime : setTimer(21,0,0),
            ...basolo()
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(21,0,0),
            endTime : setTimer(22,0,0),
            ...emptyShow()
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(22,0,0),
            endTime : setTimer(23,0,0),
            ...emptyShow()
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(23,0,0),
            endTime : setTimer(24,0,0),
            ...stereoLove()
        }
    ],
}

module.exports = { data }