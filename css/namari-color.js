import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "body": {
        "background": "#fff",
        "fontFamily": "'Open Sans', sans-serif, Arial, Helvetica",
        "fontSize": 15,
        "fontWeight": "normal",
        "color": "#111"
    },
    "a": {
        "color": "#d2b356"
    },
    "la-ball-triangle-path": {
        "color": "#d2b356"
    },
    "a:hover": {
        "color": "#d2b356"
    },
    "headernav-solid nav a:hover": {
        "color": "#d2b356"
    },
    "icon i": {
        "color": "#d2b356"
    },
    "banner section-heading:before": {
        "background": "#d2b356"
    },
    "testimonialclassic footer:before": {
        "background": "#d2b356"
    },
    "pricing-block-content:hover": {
        "borderColor": "#d2b356"
    },
    "header nav a": {
        "color": "#111"
    },
    "header i": {
        "color": "#111"
    },
    "headernav-solid": {
        "color": "#333"
    },
    "headernav-solid a": {
        "color": "#333"
    },
    "headernav-solid i": {
        "color": "#333"
    },
    "nav-mobile ul li a": {
        "color": "#333"
    },
    "headernav-solid active": {
        "color": "#d2b356",
        "borderColor": "#d2b356"
    },
    "primary-color": {
        "backgroundColor": "#d2b356",
        "color": "#fff"
    },
    "featured pricing": {
        "backgroundColor": "#d2b356",
        "color": "#fff"
    },
    "primary-color section-title": {
        "color": "#fff"
    },
    "primary-color section-subtitle": {
        "color": "#fff"
    },
    "featured pricing p": {
        "color": "#fff"
    },
    "section-heading h2:after": {
        "background": "#d2b356",
        "content": "",
        "display": "block",
        "width": 30,
        "height": 5,
        "marginTop": 30
    },
    "text-center section-heading h2:after": {
        "marginTop": 30,
        "marginRight": "auto",
        "marginBottom": 25,
        "marginLeft": "auto"
    },
    "primary-color icon i": {
        "color": "#fff"
    },
    "primary-color i": {
        "color": "#fff"
    },
    "secondary-color": {
        "backgroundColor": "#f5f5f5"
    },
    "banner": {
        "background": "url(\"https://sun-and-co.com/wp-content/uploads/2016/07/coliving.jpg\") no-repeat center top",
        "backgroundSize": "cover"
    },
    "banner h1": {
        "fontFamily": "'Open Sans', sans-serif, Arial, Helvetica",
        "fontSize": 62,
        "lineHeight": 60,
        "fontWeight": "800",
        "color": "#111"
    },
    "banner h2": {
        "fontFamily": "'Open Sans', sans-serif, Arial, Helvetica",
        "fontSize": 18,
        "fontWeight": "300",
        "color": "#fff"
    },
    "section-title": {
        "fontFamily": "'Open Sans', sans-serif, Arial, Helvetica",
        "fontSize": 34,
        "fontWeight": "700",
        "color": "#111"
    },
    "section-subtitle": {
        "fontFamily": "'Open Sans', sans-serif, Arial, Helvetica",
        "fontSize": 16,
        "fontWeight": "300",
        "color": "#9c9c9c"
    },
    "testimonial q": {
        "fontFamily": "'Open Sans', sans-serif, Arial, Helvetica",
        "fontSize": 17,
        "fontWeight": "300"
    },
    "testimonialclassic q": {
        "color": "#111"
    },
    "testimonialclassic footer": {
        "color": "#111"
    },
    "h1": {
        "fontFamily": "'Open Sans', sans-serif, Arial, Helvetica",
        "fontSize": 40,
        "fontWeight": "300",
        "color": "#111"
    },
    "h2": {
        "fontFamily": "'Open Sans', sans-serif, Arial, Helvetica",
        "fontSize": 34,
        "fontWeight": "300",
        "color": "#111"
    },
    "h3": {
        "fontFamily": "'Open Sans', sans-serif, Arial, Helvetica",
        "fontSize": 30,
        "fontWeight": "700",
        "color": "#111"
    },
    "h4": {
        "fontFamily": "'Open Sans', sans-serif, Arial, Helvetica",
        "fontSize": 18,
        "fontWeight": "400",
        "color": "#111"
    },
    "h5": {
        "fontFamily": "'Open Sans', sans-serif, Arial, Helvetica",
        "fontSize": 16,
        "fontWeight": "400",
        "color": "#111"
    },
    "h6": {
        "fontFamily": "'Open Sans', sans-serif, Arial, Helvetica",
        "fontSize": 14,
        "fontWeight": "400",
        "color": "#111"
    },
    "button": {
        "fontFamily": "'Open Sans', sans-serif, Arial, Helvetica",
        "fontSize": 14,
        "fontWeight": "bold",
        "color": "#111",
        "borderColor": "#111"
    },
    "input[type=\"submit\"]": {
        "fontFamily": "'Open Sans', sans-serif, Arial, Helvetica",
        "fontSize": 14,
        "fontWeight": "bold",
        "color": "#111",
        "borderColor": "#111"
    },
    "button:hover": {
        "borderColor": "#d2b356",
        "color": "#d2b356"
    },
    "input[type=\"submit\"]:hover": {
        "borderColor": "#d2b356",
        "color": "#d2b356"
    },
    "banner button": {
        "fontFamily": "'Open Sans', sans-serif, Arial, Helvetica",
        "fontSize": 16,
        "color": "#111",
        "borderColor": "#111"
    },
    "banner button:hover": {
        "color": "#d2b356",
        "borderColor": "#d2b356"
    },
    "landing-footer": {
        "fontFamily": "'Open Sans', sans-serif, Arial, Helvetica",
        "fontSize": 12,
        "fontWeight": "normal",
        "color": "#999"
    },
    "landing-footer p": {
        "fontFamily": "'Open Sans', sans-serif, Arial, Helvetica",
        "fontSize": 12,
        "fontWeight": "normal",
        "color": "#999"
    },
    "landing-footer a": {
        "fontFamily": "'Open Sans', sans-serif, Arial, Helvetica",
        "fontSize": 12,
        "fontWeight": "normal",
        "color": "#999"
    },
    "landing-footer i": {
        "color": "#999"
    }
});