/*!

=========================================================
* Material Kit React - v1.7.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-kit-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import {container} from "assets/jss/material-kit-react.jsx";

const signupPageStyle = {
    container: {
        ...container,
        zIndex: "2",
        position: "relative",
        paddingTop: "20vh",
        paddingBottom: "200px"
    },
    section: {
        padding: "70px 0",
        textAlign: "center"
    },
    text: {
        color: "#495057"
    },
    socialLine: {
        color: 'green',
        fontSize: '145px !important'
    },
    socialInstagram: {
        color: '#9b6954',
        fontSize: '145px !important'
    },
    socialFacebook: {
        color: '#3C5A99',
        fontSize: '145px !important'
    },
    socialMedia: {
        display: 'flex',
        justifyContent: 'space-around'
    },
    socialPhone: {
        color: '#777',
        fontSize: '28px !important'
    },
    phoneContainer: {
        width: '100px',
        fontSize: '22px'
    }
};

export default signupPageStyle;
