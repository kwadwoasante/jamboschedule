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
            ...reggaeWorld(defaultJambo)
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(1,0,0),
            endTime : setTimer(2,0,0),
            ...westernPlaylist(defaultJambo)
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(2,0,0),
            endTime : setTimer(3,0,0),
            ...southernPlaylist(defaultJambo)
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(3,0,0),
            endTime : setTimer(4,0,0),
            ...hornPlaylist(defaultJambo)
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(4,0,0),
            endTime : setTimer(5,0,0),
            ...driveTimeShow(defaultJambo)
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(5,0,0),
            endTime : setTimer(6,0,0),
            ...emptyShow(defaultJambo)
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(6,0,0),
            endTime : setTimer(7,0,0),
            ...magazineShow(defaultJambo)
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(7,0,0),
            endTime : setTimer(8,0,0),
            ...magazineShow(defaultJambo)
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(8,0,0),
            endTime : setTimer(9,0,0),
            ...moment(defaultJambo)
            // wait for image of Sade and Enoch
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(9,0,0),
            endTime : setTimer(10,0,0),
            ...magazineShow(defaultJambo)
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(10,0,0),
            endTime : setTimer(11,0,0),
            ...magazineShow(defaultJambo)
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(11,0,0),
            endTime : setTimer(12,0,0),
            ...scienceShow(drDada)
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(12,0,0),
            endTime : setTimer(13,0,0),
            ...stereoLove(defaultJambo)
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(13,0,0),
            endTime : setTimer(14,0,0),
            ...twih(defaultJambo)
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
            ...emptyShow(defaultJambo)
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(16,0,0),
            endTime : setTimer(17,0,0),
            ...planetSport(defaultJambo)
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(17,0,0),
            endTime : setTimer(18,0,0),
            ...sportsEngine(defaultJambo)
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(18,0,0),
            endTime : setTimer(19,0,0),
            ...stereoLove(defaultJambo)
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(19,0,0),
            endTime : setTimer(20,0,0),
            ...touchPoint(defaultJambo)
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(20,0,0),
            endTime : setTimer(21,0,0),
            ...sportsEngine(defaultJambo)
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(21,0,0),
            endTime : setTimer(22,0,0),
            ...scienceShow(drDada)
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(22,0,0),
            endTime : setTimer(23,0,0),
            ...exploringFaith(defaultJambo)
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(23,0,0),
            endTime : setTimer(24,0,0),
            ...reggaeWorld(defaultJambo)
        }
    ],
    "Tues" : [
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(0,0,0),
            endTime : setTimer(1,0,0),
            ...westernPlaylist(defaultJambo)
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(1,0,0),
            endTime : setTimer(2,0,0),
            ...easternPlaylist(defaultJambo)
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(2,0,0),
            endTime : setTimer(3,0,0),
            ...northernPlaylist(defaultJambo)
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(3,0,0),
            endTime : setTimer(4,0,0),
            ...emptyShow(defaultJambo)
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(4,0,0),
            endTime : setTimer(5,0,0),
            ...basolo(defaultJambo)
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(5,0,0),
            endTime : setTimer(6,0,0),
            ...scienceShow(drDada)
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(6,0,0),
            endTime : setTimer(7,0,0),
            ...storiesShapeUs(defaultJambo)
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(7,0,0),
            endTime : setTimer(8,0,0),
            ...moment(defaultJambo)
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(8,0,0),
            endTime : setTimer(9,0,0),
            ...sportsEngine(defaultJambo)
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(9,0,0),
            endTime : setTimer(10,0,0),
            ...onTheDouble(KBL)
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(10,0,0),
            endTime : setTimer(11,0,0),
            ...onTheDouble(KBL)
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(11,0,0),
            endTime : setTimer(12,0,0),
            ...stereoLove(defaultJambo)
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(12,0,0),
            endTime : setTimer(13,0,0),
            ...twih(defaultJambo)
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
            ...basolo(defaultJambo)
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(15,0,0),
            endTime : setTimer(16,0,0),
            ...madeInScotland(defaultJambo)
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(16,0,0),
            endTime : setTimer(17,0,0),
            ...storiesShapeUs(defaultJambo)
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(17,0,0),
            endTime : setTimer(18,0,0),
            ...reggaeWorld(defaultJambo)
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(18,0,0),
            endTime : setTimer(19,0,0),
            ...madeInScotland(defaultJambo)
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(19,0,0),
            endTime : setTimer(20,0,0),
            ...onTheDouble(KBL)
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(20,0,0),
            endTime : setTimer(21,0,0),
            ...onTheDouble(KBL)
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(21,0,0),
            endTime : setTimer(22,0,0),
            ...exploringFaith(defaultJambo)
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(22,0,0),
            endTime : setTimer(23,0,0),
            ...twih(defaultJambo)
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
            ...basolo(defaultJambo)
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(1,0,0),
            endTime : setTimer(2,0,0),
            ...northernPlaylist(defaultJambo)
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(2,0,0),
            endTime : setTimer(3,0,0),
            ...hornPlaylist(defaultJambo)
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(3,0,0),
            endTime : setTimer(4,0,0),
            ...driveTimeShow(defaultJambo)
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(4,0,0),
            endTime : setTimer(5,0,0),
            ...driveTimeShow(defaultJambo)
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(5,0,0),
            endTime : setTimer(6,0,0),
            ...storiesShapeUs(defaultJambo)
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(6,0,0),
            endTime : setTimer(7,0,0),
            ...moment(defaultJambo)
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(7,0,0),
            endTime : setTimer(8,0,0),
            ...emptyShow(defaultJambo)
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(8,0,0),
            endTime : setTimer(9,0,0),
            ...emptyShow(defaultJambo)
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(9,0,0),
            endTime : setTimer(10,0,0),
            ...scienceShow(drDada)
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(10,0,0),
            endTime : setTimer(11,0,0),
            ...madeInScotland(defaultJambo)
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(11,0,0),
            endTime : setTimer(12,0,0),
            ...twih(defaultJambo)
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
            ...planetSport(defaultJambo)
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(14,0,0),
            endTime : setTimer(15,0,0),
            ...scienceShow(drDada)
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(15,0,0),
            endTime : setTimer(16,0,0),
            ...storiesShapeUs(defaultJambo)
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(16,0,0),
            endTime : setTimer(17,0,0),
            ...sportsEngine(defaultJambo)
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(17,0,0),
            endTime : setTimer(18,0,0),
            ...storiesShapeUs(defaultJambo)
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(18,0,0),
            endTime : setTimer(19,0,0),
            ...moment(defaultJambo)
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(19,0,0),
            endTime : setTimer(20,0,0),
            ...scienceShow(drDada)
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(20,0,0),
            endTime : setTimer(21,0,0),
            ...reggaeWorld(defaultJambo)
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(21,0,0),
            endTime : setTimer(22,0,0),
            ...twih(defaultJambo)
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(22,0,0),
            endTime : setTimer(23,0,0),
            ...regardSur(Yves)
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(23,0,0),
            endTime : setTimer(24,0,0),
            ...regardSur(Yves)
        }
    ],
    "Thurs" : [
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(0,0,0),
            endTime : setTimer(1,0,0),
            ...southernPlaylist(defaultJambo)
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(1,0,0),
            endTime : setTimer(2,0,0),
            ...emptyShow(defaultJambo)
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(2,0,0),
            endTime : setTimer(3,0,0),
            ...emptyShow(defaultJambo)
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(3,0,0),
            endTime : setTimer(4,0,0),
            ...easternPlaylist(defaultJambo)
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(4,0,0),
            endTime : setTimer(5,0,0),
            ...magazineShow(defaultJambo)
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(5,0,0),
            endTime : setTimer(6,0,0),
            ...magazineShow(defaultJambo)
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(6,0,0),
            endTime : setTimer(7,0,0),
            ...sportsEngine(defaultJambo)
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(7,0,0),
            endTime : setTimer(8,0,0),
            ...moment(defaultJambo)
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(8,0,0),
            endTime : setTimer(9,0,0),
            ...scienceShow(drDada)
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(9,0,0),
            endTime : setTimer(10,0,0),
            ...emptyShow(defaultJambo)
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(10,0,0),
            endTime : setTimer(11,0,0),
            ...emptyShow(defaultJambo)
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(11,0,0),
            endTime : setTimer(12,0,0),
            ...madeInScotland(defaultJambo)
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(12,0,0),
            endTime : setTimer(13,0,0),
            ...planetSport(defaultJambo)
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(13,0,0),
            endTime : setTimer(14,0,0),
            ...reggaeWorld(defaultJambo)
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(14,0,0),
            endTime : setTimer(15,0,0),
            ...magazineShow(defaultJambo)
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(15,0,0),
            endTime : setTimer(16,0,0),
            ...magazineShow(defaultJambo)
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(16,0,0),
            endTime : setTimer(17,0,0),
            ...driveTimeShow(defaultJambo)
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(17,0,0),
            endTime : setTimer(18,0,0),
            ...driveTimeShow(defaultJambo)
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(18,0,0),
            endTime : setTimer(19,0,0),
            ...regardSur(Yves)
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(19,0,0),
            endTime : setTimer(20,0,0),
            ...regardSur(Yves)
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(20,0,0),
            endTime : setTimer(21,0,0),
            ...reggaeWorld(defaultJambo)
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(21,0,0),
            endTime : setTimer(22,0,0),
            ...emptyShow(defaultJambo)
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(22,0,0),
            endTime : setTimer(23,0,0),
            ...areYouKiddinMe(defaultJambo)
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(23,0,0),
            endTime : setTimer(24,0,0),
            ...twih(defaultJambo)
        },
    ],
    "Fri" : [
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(0,0,0),
            endTime : setTimer(1,0,0),
            ...madeInScotland(defaultJambo)
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(1,0,0),
            endTime : setTimer(2,0,0),
            ...hornPlaylist(defaultJambo)
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(2,0,0),
            endTime : setTimer(3,0,0),
            ...westernPlaylist(defaultJambo)
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(3,0,0),
            endTime : setTimer(4,0,0),
            ...southernPlaylist(defaultJambo)
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(4,0,0),
            endTime : setTimer(5,0,0),
            ...storiesShapeUs(defaultJambo)
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(5,0,0),
            endTime : setTimer(6,0,0),
            ...sportsEngine(defaultJambo)
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(6,0,0),
            endTime : setTimer(7,0,0),
            ...onTheDouble(KBL)
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(7,0,0),
            endTime : setTimer(8,0,0),
            ...onTheDouble(KBL)
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(8,0,0),
            endTime : setTimer(9,0,0),
            ...sportsEngine(defaultJambo)
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(9,0,0),
            endTime : setTimer(10,0,0),
            ...twih(defaultJambo)
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(10,0,0),
            endTime : setTimer(11,0,0),
            ...emptyShow(defaultJambo)
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(11,0,0),
            endTime : setTimer(12,0,0),
            ...planetSport(defaultJambo)
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(12,0,0),
            endTime : setTimer(13,0,0),
            ...basolo(defaultJambo)
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(13,0,0),
            endTime : setTimer(14,0,0),
            ...exploringFaith(defaultJambo)
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(14,0,0),
            endTime : setTimer(15,0,0),
            ...storiesShapeUs(defaultJambo)
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(15,0,0),
            endTime : setTimer(16,0,0),
            ...stereoLove(defaultJambo)
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(16,0,0),
            endTime : setTimer(17,0,0),
            ...planetSport(defaultJambo)
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(17,0,0),
            endTime : setTimer(18,0,0),
            ...madeInScotland(defaultJambo)
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(18,0,0),
            endTime : setTimer(19,0,0),
            ...stereoLove(defaultJambo)
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(19,0,0),
            endTime : setTimer(20,0,0),
            ...exploringFaith(defaultJambo)
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
            ...areYouKiddinMe(defaultJambo)
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(22,0,0),
            endTime : setTimer(23,0,0),
            ...planetSport(defaultJambo)
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(23,0,0),
            endTime : setTimer(24,0,0),
            ...westernPlaylist(defaultJambo)
        }
    ],
    "Sat" : [
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(0,0,0),
            endTime : setTimer(1,0,0),
            ...stereoLove(defaultJambo)
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(1,0,0),
            endTime : setTimer(2,0,0),
            ...emptyShow(defaultJambo)
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(2,0,0),
            endTime : setTimer(3,0,0),
            ...easternPlaylist(defaultJambo)
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(3,0,0),
            endTime : setTimer(4,0,0),
            ...emptyShow(defaultJambo)
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(4,0,0),
            endTime : setTimer(5,0,0),
            ...moment(defaultJambo)
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(5,0,0),
            endTime : setTimer(6,0,0),
            ...driveTimeShow(defaultJambo)
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(6,0,0),
            endTime : setTimer(7,0,0),
            ...driveTimeShow(defaultJambo)
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(7,0,0),
            endTime : setTimer(8,0,0),
            ...regardSur(Yves)
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(8,0,0),
            endTime : setTimer(9,0,0),
            ...regardSur(Yves)
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(9,0,0),
            endTime : setTimer(10,0,0),
            ...twih(defaultJambo)
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(10,0,0),
            endTime : setTimer(11,0,0),
            ...exploringFaith(defaultJambo)
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(11,0,0),
            endTime : setTimer(12,0,0),
            ...magazineShow(defaultJambo)
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(12,0,0),
            endTime : setTimer(13,0,0),
            ...magazineShow(defaultJambo)
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(13,0,0),
            endTime : setTimer(14,0,0),
            ...storiesShapeUs(defaultJambo)
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(14,0,0),
            endTime : setTimer(15,0,0),
            ...basolo(defaultJambo)
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(15,0,0),
            endTime : setTimer(16,0,0),
            ...scienceShow(drDada)
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(16,0,0),
            endTime : setTimer(17,0,0),
            ...sportsEngine(defaultJambo)
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(17,0,0),
            endTime : setTimer(18,0,0),
            ...moment(defaultJambo)
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(18,0,0),
            endTime : setTimer(19,0,0),
            ...twih(defaultJambo)
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
            ...planetSport(defaultJambo)
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(21,0,0),
            endTime : setTimer(22,0,0),
            ...basolo(defaultJambo)
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(22,0,0),
            endTime : setTimer(23,0,0),
            ...areYouKiddinMe(defaultJambo)
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(23,0,0),
            endTime : setTimer(4,0,0),
            ...emptyShow(defaultJambo)
        }
    ],
    "Sun" : [
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(0,0,0),
            endTime : setTimer(1,0,0),
            ...emptyShow(defaultJambo)
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(1,0,0),
            endTime : setTimer(2,0,0),
            ...stereoLove(defaultJambo)
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(2,0,0),
            endTime : setTimer(3,0,0),
            ...basolo(defaultJambo)
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(3,0,0),
            endTime : setTimer(4,0,0),
            ...driveTimeShow(defaultJambo)
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(4,0,0),
            endTime : setTimer(5,0,0),
            ...driveTimeShow(defaultJambo)
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(5,0,0),
            endTime : setTimer(6,0,0),
            ...scienceShow(drDada)
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(6,0,0),
            endTime : setTimer(7,0,0),
            ...regardSur(Yves)
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(7,0,0),
            endTime : setTimer(8,0,0),
            ...regardSur(Yves)
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
            ...emptyShow(defaultJambo)
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(10,0,0),
            endTime : setTimer(11,0,0),
            ...exploringFaith(defaultJambo)
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(11,0,0),
            endTime : setTimer(12,0,0),
            ...magazineShow(defaultJambo)
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(12,0,0),
            endTime : setTimer(13,0,0),
            ...magazineShow(defaultJambo)
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(13,0,0),
            endTime : setTimer(14,0,0),
            ...stereoLove(defaultJambo)
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(14,0,0),
            endTime : setTimer(15,0,0),
            ...emptyShow(defaultJambo)
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(15,0,0),
            endTime : setTimer(16,0,0),
            ...scienceShow(drDada)
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(16,0,0),
            endTime : setTimer(17,0,0),
            ...twih(defaultJambo)
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(17,0,0),
            endTime : setTimer(18,0,0),
            ...storiesShapeUs(defaultJambo)
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(18,0,0),
            endTime : setTimer(19,0,0),
            ...moment(defaultJambo)
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(19,0,0),
            endTime : setTimer(20,0,0),
            ...planetSport(defaultJambo)
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(20,0,0),
            endTime : setTimer(21,0,0),
            ...basolo(defaultJambo)
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(21,0,0),
            endTime : setTimer(22,0,0),
            ...emptyShow(defaultJambo)
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(22,0,0),
            endTime : setTimer(23,0,0),
            ...emptyShow(defaultJambo)
        },
        {
            id: Math.random().toString(36).slice(2),
            startTime : setTimer(23,0,0),
            endTime : setTimer(24,0,0),
            ...stereoLove(defaultJambo)
        }
    ],
}

module.exports = { data }