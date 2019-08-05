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
import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";

import teamStyle from "assets/jss/material-kit-react/views/landingPageSections/teamStyle.jsx";

import team1 from "assets/img/content/hotelreview.jpg";
import team2 from "assets/img/content/review1.png";
import team3 from "assets/img/content/wedding.jpg";

class TeamSection extends React.Component {
    render() {
        const {classes} = this.props;
        const imageClasses = classNames(
            classes.imgRaised,
            classes.imgRoundedCircle,
            classes.imgFluid
        );
        return (
            <div className={classes.section}>
                <h2 className={classes.title}>รีวิวจากลูกค้าจริง</h2>
                <div>
                    <GridContainer>
                        <GridItem xs={12} sm={12} md={4}>
                            <Card plain>
                                <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                                    <img src={team1} alt="..." className={imageClasses}/>
                                </GridItem>
                                <h4 className={classes.cardTitle}>
                                    Jaroonsak Grand Trang
                                    <br/>
                                    <small className={classes.smallTitle}>Hotel</small>
                                </h4>
                                <CardBody>
                                    <p className={classes.description}>
                                        ได้เสื่้อแล้วถูกใจมากค่ะ สกรีนดีมากปรับแก้ได้ตามใจ ชอบมากค่ะ
                                    </p>
                                </CardBody>

                            </Card>
                        </GridItem>
                        <GridItem xs={12} sm={12} md={4}>
                            <Card plain>
                                <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                                    <img src={team2} alt="..." className={imageClasses}/>
                                </GridItem>
                                <h4 className={classes.cardTitle}>
                                    Look X Foto Factory
                                    <br/>
                                    <small className={classes.smallTitle}>Photographer</small>
                                </h4>
                                <CardBody>
                                    <p className={classes.description}>
                                        ถูกใจมากๆครับ งานตามใจลูกค้าสุดๆ
                                    </p>
                                </CardBody>

                            </Card>
                        </GridItem>
                        <GridItem xs={12} sm={12} md={4}>
                            <Card plain>
                                <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                                    <img src={team3} alt="..." className={imageClasses}/>
                                </GridItem>
                                <h4 className={classes.cardTitle}>
                                    Tee Design Wedding
                                    <br/>
                                    <small className={classes.smallTitle}>Wedding Studio</small>
                                </h4>
                                <CardBody>
                                    <p className={classes.description}>
                                        เนื้อผ้าดีมาก งานปักสวย ถูกใจมากค่ะ
                                    </p>
                                </CardBody>
                            </Card>
                        </GridItem>
                    </GridContainer>
                </div>
            </div>
        );
    }
}

TeamSection.propTypes = {
    classes: PropTypes.object
};

export default withStyles(teamStyle)(TeamSection);
