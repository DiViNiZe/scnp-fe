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
// nodejs library to set properties for componenlts
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
// core components
import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";
import Button from "components/CustomButtons/Button.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import Parallax from "components/Parallax/Parallax.jsx";
import {CopyToClipboard} from 'react-copy-to-clipboard';
import Swal from 'sweetalert2'

import logo from "assets/img/content/scnp-white-logo.jpg";

import LocationSection from '../../components/Maps/locationSection.jsx';

import profilePageStyle from "assets/jss/material-kit-react/views/profilePage.jsx";

class ProfilePage extends React.Component {
    render() {
        const {classes, ...rest} = this.props;
        const imageClasses = classNames(
            classes.imgRaised,
            classes.imgRoundedCircle,
            classes.imgFluid
        );
        const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
        return (
            <div>
                <Header
                    color="transparent"
                    brand="SCNP การปัก"
                    rightLinks={<HeaderLinks/>}
                    fixed
                    changeColorOnScroll={{
                        height: 200,
                        color: "white"
                    }}
                    {...rest}
                />
                <Parallax small filter image={require("assets/img/profile-bg.jpg")}/>
                <div className={classNames(classes.main, classes.mainRaised)}>
                    <div>
                        <div className={classes.container}>
                            <GridContainer justify="center">
                                <GridItem xs={12} sm={12} md={6}>
                                    <div className={classes.profile}>
                                        <div>
                                            <img src={logo} alt="..." className={imageClasses}/>
                                        </div>
                                        <div className={classes.name}>
                                            <h3 className={classes.title}>บจก. เอสซีเอ็นพี​</h3>
                                            <h6>โซลูชั่นเสื้อผ้า</h6>
                                        </div>
                                    </div>
                                </GridItem>
                                <div className={classes.description}>
                                    <p>
                                        รับปักเสื้อและสกีนเสื้อ ทั้งเสื้อยืดเสื้อโปโล
                                        งานคุณภาพราคาเป็นมิตรการันตีด้วยประสบการณ์การทำงานมากกว่า20ปี.{" "}
                                    </p>
                                </div>
                                <GridItem sm={12} md={8}>
                                    <LocationSection/>
                                </GridItem>
                                <GridItem sm={12} md={4} className={classes.aboutInfomation}>
                                    <div>
                                        บ้านเลขที่ 98/274-248 ถ.ประชาอุทิศ ซอยประชาอุทิศ33แยก7 แขวงบางมด เขตทุ่งครุ
                                        กทม.
                                    </div>
                                    <div>
                                        <h3 style={{color: '#344'}}>เปิดบริการ</h3>
                                        <p>จันทร์ - เสาร์</p>
                                        <p> 8:00 AM – 5:00 PM </p>
                                    </div>
                                    <div>
                                        <Button
                                            href="http://line.me/ti/p/@zea0113s"
                                            target="_blank"
                                            color="transparent"
                                        >
                                            <i className={classes.socialLine + " fab fa-line"}/>
                                        </Button>
                                        <Button
                                            color="transparent"
                                            href="https://www.facebook.com/nittayapeer"
                                            target="_blank"
                                        >
                                            <i className={classes.socialFacebook + " fab fa-facebook"}/>
                                        </Button>
                                        <Button
                                            color="transparent"
                                            href="https://www.instagram.com/scnp.embo/"
                                            target="_blank"
                                        >
                                            <i className={classes.socialInstagram + " fab fa-instagram"}/>
                                        </Button>
                                        <CopyToClipboard className={'MuiButtonBase-root'} text={'092946639'}
                                                         onCopy={() => Swal.fire({
                                                             position: 'top-end',
                                                             type: 'success',
                                                             title: 'คัดลอกเลขหมายสำเร็จ',
                                                             showConfirmButton: false,
                                                             timer: 1500
                                                         })}>
                                            <span><i className={classes.socialPhone + " fa fa-phone"}/>0970129389</span></CopyToClipboard>
                                    </div>
                                </GridItem>
                            </GridContainer>


                            {/*<GridContainer justify="center">*/}
                            {/*    <GridItem xs={12} sm={12} md={8} className={classes.navWrapper}>*/}
                            {/*        <NavPills*/}
                            {/*            alignCenter*/}
                            {/*            color="primary"*/}
                            {/*            tabs={[*/}
                            {/*                {*/}
                            {/*                    tabButton: "Studio",*/}
                            {/*                    tabIcon: Camera,*/}
                            {/*                    tabContent: (*/}
                            {/*                        <GridContainer justify="center">*/}
                            {/*                            <GridItem xs={12} sm={12} md={4}>*/}
                            {/*                                <img*/}
                            {/*                                    alt="..."*/}
                            {/*                                    src={studio1}*/}
                            {/*                                    className={navImageClasses}*/}
                            {/*                                />*/}
                            {/*                                <img*/}
                            {/*                                    alt="..."*/}
                            {/*                                    src={studio2}*/}
                            {/*                                    className={navImageClasses}*/}
                            {/*                                />*/}
                            {/*                            </GridItem>*/}
                            {/*                            <GridItem xs={12} sm={12} md={4}>*/}
                            {/*                                <img*/}
                            {/*                                    alt="..."*/}
                            {/*                                    src={studio5}*/}
                            {/*                                    className={navImageClasses}*/}
                            {/*                                />*/}
                            {/*                                <img*/}
                            {/*                                    alt="..."*/}
                            {/*                                    src={studio4}*/}
                            {/*                                    className={navImageClasses}*/}
                            {/*                                />*/}
                            {/*                            </GridItem>*/}
                            {/*                        </GridContainer>*/}
                            {/*                    )*/}
                            {/*                },*/}
                            {/*                {*/}
                            {/*                    tabButton: "Work",*/}
                            {/*                    tabIcon: Palette,*/}
                            {/*                    tabContent: (*/}
                            {/*                        <GridContainer justify="center">*/}
                            {/*                            <GridItem xs={12} sm={12} md={4}>*/}
                            {/*                                <img*/}
                            {/*                                    alt="..."*/}
                            {/*                                    src={work1}*/}
                            {/*                                    className={navImageClasses}*/}
                            {/*                                />*/}
                            {/*                                <img*/}
                            {/*                                    alt="..."*/}
                            {/*                                    src={work2}*/}
                            {/*                                    className={navImageClasses}*/}
                            {/*                                />*/}
                            {/*                                <img*/}
                            {/*                                    alt="..."*/}
                            {/*                                    src={work3}*/}
                            {/*                                    className={navImageClasses}*/}
                            {/*                                />*/}
                            {/*                            </GridItem>*/}
                            {/*                            <GridItem xs={12} sm={12} md={4}>*/}
                            {/*                                <img*/}
                            {/*                                    alt="..."*/}
                            {/*                                    src={work4}*/}
                            {/*                                    className={navImageClasses}*/}
                            {/*                                />*/}
                            {/*                                <img*/}
                            {/*                                    alt="..."*/}
                            {/*                                    src={work5}*/}
                            {/*                                    className={navImageClasses}*/}
                            {/*                                />*/}
                            {/*                            </GridItem>*/}
                            {/*                        </GridContainer>*/}
                            {/*                    )*/}
                            {/*                },*/}
                            {/*                {*/}
                            {/*                    tabButton: "Favorite",*/}
                            {/*                    tabIcon: Favorite,*/}
                            {/*                    tabContent: (*/}
                            {/*                        <GridContainer justify="center">*/}
                            {/*                            <GridItem xs={12} sm={12} md={4}>*/}
                            {/*                                <img*/}
                            {/*                                    alt="..."*/}
                            {/*                                    src={work4}*/}
                            {/*                                    className={navImageClasses}*/}
                            {/*                                />*/}
                            {/*                                <img*/}
                            {/*                                    alt="..."*/}
                            {/*                                    src={studio3}*/}
                            {/*                                    className={navImageClasses}*/}
                            {/*                                />*/}
                            {/*                            </GridItem>*/}
                            {/*                            <GridItem xs={12} sm={12} md={4}>*/}
                            {/*                                <img*/}
                            {/*                                    alt="..."*/}
                            {/*                                    src={work2}*/}
                            {/*                                    className={navImageClasses}*/}
                            {/*                                />*/}
                            {/*                                <img*/}
                            {/*                                    alt="..."*/}
                            {/*                                    src={work1}*/}
                            {/*                                    className={navImageClasses}*/}
                            {/*                                />*/}
                            {/*                                <img*/}
                            {/*                                    alt="..."*/}
                            {/*                                    src={studio1}*/}
                            {/*                                    className={navImageClasses}*/}
                            {/*                                />*/}
                            {/*                            </GridItem>*/}
                            {/*                        </GridContainer>*/}
                            {/*                    )*/}
                            {/*                }*/}
                            {/*            ]}*/}
                            {/*        />*/}
                            {/*    </GridItem>*/}
                            {/*</GridContainer>*/}
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}

ProfilePage.propTypes = {
    classes: PropTypes.object
};

export default withStyles(profilePageStyle)(ProfilePage);
