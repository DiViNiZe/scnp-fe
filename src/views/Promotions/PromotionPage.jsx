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
import React from "react"
// nodejs library to set properties for components
// nodejs library that concatenates classes
import classNames from "classnames"

import PropTypes from "prop-types";

// @material-ui/core components
// core components
import Header from "components/Header/Header.jsx"
import Footer from "components/Footer/Footer.jsx"
import GridContainer from "components/Grid/GridContainer.jsx"
import GridItem from "components/Grid/GridItem.jsx"
import Button from "components/CustomButtons/Button.jsx"
import HeaderLinks from "components/Header/HeaderLinks.jsx"
import Parallax from "components/Parallax/Parallax.jsx"
import promotion from '../../assets/img/promotions/promotion-01.png'
import {Link} from "react-router-dom"
import landingPageStyle from "assets/jss/material-kit-react/views/landingPage.jsx"
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons

const dashboardRoutes = []

class PromotionPage extends React.Component {
    render() {
        const {classes, ...rest} = this.props
        return (
            <div>
                <link
                    rel="stylesheet"
                    href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
                    integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
                    crossOrigin="anonymous"
                />
                <Header
                    color="transparent"
                    routes={dashboardRoutes}
                    brand="SCNP การปัก"
                    rightLinks={<HeaderLinks/>}
                    fixed
                    changeColorOnScroll={{
                        height: 400,
                        color: "white"
                    }}
                    {...rest}
                />
                <Parallax filter image={require("assets/img/landing-bg.jpg")}>
                    <div className={classes.container}>
                        <GridContainer>
                            <GridItem xs={12} sm={12} md={6}>
                                <h1 className={classes.title}>คุณภาพต้องมาก่อน!</h1>
                                <h4>เราใช้เทคโนโลยีช่วยในการเพิ่มคุณภาพการผลิต
                                </h4>
                                <br/>
                                <Button
                                    color="danger"
                                    size="lg"
                                    href="/status"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Link to={"/login-page"} className={classes.link}/>
                                    <i className="fas fa-tags"/>
                                    เช็คสถานะคำสั่งซื้อออนไลน์
                                </Button>
                            </GridItem>
                        </GridContainer>
                    </div>
                </Parallax>
                <div className={classNames(classes.main, classes.mainRaised)}>
                    <img src={promotion} style={{width: '100%'}} alt={'promotion pic'}/>
                </div>
                <Footer/>
            </div>
        )
    }
}

PromotionPage.propTypes = {
    classes: PropTypes.object
}

export default withStyles(landingPageStyle)(PromotionPage)
