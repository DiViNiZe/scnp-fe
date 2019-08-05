/*!

=========================================================
* Material Kit React - v1.7.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-kit-react/blob/master/LICENSE.md)
* DOCS https://creativetimofficial.github.io/material-kit-react/#/documentation?ref=mkr-navbar
* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
/*eslint-disable*/
import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
// react components for routing our app without refresh
import {Link} from "react-router-dom";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import {Apps} from "@material-ui/icons";

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.jsx";
import Button from "components/CustomButtons/Button.jsx";

import headerLinksStyle from "assets/jss/material-kit-react/components/headerLinksStyle.jsx";

function HeaderLinks({...props}) {
    const {classes} = props;
    return (
        <List className={classes.list}>
            <ListItem className={classes.listItem}>
                {/*<CustomDropdown*/}
                {/*    noLiPadding*/}
                {/*    buttonText="Components"*/}
                {/*    buttonProps={{*/}
                {/*        className: classes.navLink,*/}
                {/*        color: "transparent"*/}
                {/*    }}*/}
                {/*    buttonIcon={Apps}*/}
                {/*    dropdownList={[*/}
                {/*        <Link to="/" className={classes.dropdownLink}>*/}
                {/*            All components*/}
                {/*        </Link>,*/}
                {/*        <a*/}
                {/*            href="https://creativetimofficial.github.io/material-kit-react/#/documentation?ref=mkr-navbar"*/}
                {/*            target="_blank"*/}
                {/*            className={classes.dropdownLink}*/}
                {/*        >*/}
                {/*            Documentation*/}
                {/*        </a>*/}
                {/*    ]}*/}
                {/*/>*/}
            </ListItem>
            <ListItem className={classes.listItem}>
                <Link
                    to={'/promotion'}
                    color="transparent"
                    className={classes.navLink}
                >
                    โปรโมชั่น
                </Link>
            </ListItem>
            <ListItem className={classes.listItem}>
                <Link
                    to={'/cotncol'}
                    color="transparent"
                    className={classes.navLink}
                >
                    สีและเนื้อผ้า
                </Link>
            </ListItem>
            <ListItem className={classes.listItem}>
                <Link
                    to={'/size'}
                    color="transparent"
                    className={classes.navLink}
                >
                    ขนาดเสื้อ
                </Link>
            </ListItem>
            <ListItem className={classes.listItem}>
                <Link
                    to={'/profile-page'}
                    color="transparent"
                    className={classes.navLink}
                >
                    ติดต่อ
                </Link>
            </ListItem>
            <ListItem className={classes.listItem}>
                <Tooltip
                    id="instagram-twitter"
                    title="Follow us on Line"
                    placement={window.innerWidth > 959 ? "top" : "left"}
                    classes={{tooltip: classes.tooltip}}
                >
                    <Button
                        href="http://line.me/ti/p/@zea0113s"
                        target="_blank"
                        color="transparent"
                        className={classes.navLink}
                    >
                        <i className={classes.socialIcons + " fab fa-line"}/>
                    </Button>
                </Tooltip>
            </ListItem>
            <ListItem className={classes.listItem}>
                <Tooltip
                    id="instagram-facebook"
                    title="Follow us on facebook"
                    placement={window.innerWidth > 959 ? "top" : "left"}
                    classes={{tooltip: classes.tooltip}}
                >
                    <Button
                        color="transparent"
                        href="https://www.facebook.com/nittayapeer"
                        target="_blank"
                        className={classes.navLink}
                    >
                        <i className={classes.socialIcons + " fab fa-facebook"}/>
                    </Button>
                </Tooltip>
            </ListItem>
            <ListItem className={classes.listItem}>
                <Tooltip
                    id="instagram-tooltip"
                    title="Follow us on instagram"
                    placement={window.innerWidth > 959 ? "top" : "left"}
                    classes={{tooltip: classes.tooltip}}
                >
                    <Button
                        color="transparent"
                        href="https://www.instagram.com/scnp.embo/"
                        target="_blank"
                        className={classes.navLink}
                    >
                        <i className={classes.socialIcons + " fab fa-instagram"}/>
                    </Button>
                </Tooltip>
            </ListItem>
        </List>
    );
}

export default withStyles(headerLinksStyle)(HeaderLinks);
