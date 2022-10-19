import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get("window");

// Base colours for the application
export const COLOURS = {
    primary_yellow : "#FFD300",
    primary_grayish : "#707070",
    ghost : "#F2F2F2",
    secondary_pink : "#F8E7DD",
    dark_pink : "#723E4A",
    blueish_gray : "#818297",
    ghost_white : "#F9F9F9",
    off_white : "#F6FAFB",
    lime_green : "#00C9A5",
    white : "#FFFFFF",
    black : "#000000",
    red : "#e61515",
    hr : "#8C98A4",
    facebook_blue : "#4267B2",
    twitter_blue : "#1DA1F2",
    youtube_red : "#FF0000",
    twitch_purple : "#6441a5",
    instagram_purple : "#5851db"
}

// Base sizes for the application
export const SIZES = {
    base : 0,
    font : 14,
    radius : 30,
    defaultPadding : 10,

    // font sizes
    h1:50,
    h2:30,
    h3:22,
    h4:20,
    h5:18,
    textBody:30,
    textBody2:20,
    textBody3:16,
    textBody4:14,
    textBody5:12,

    // app dimensions
    width,
    height
}

export const RADIUS = {
    radius_xs : 4,
    radius_sm : 8,
    radius_md : 12,
    radius_lg : 16,
    radius_xl : 20
}

const appTheme = { COLOURS, SIZES, RADIUS };

export default appTheme;