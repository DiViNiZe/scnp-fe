import React from 'react'

import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import Button from "components/CustomButtons/Button.jsx";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";
import ContactStyle from "assets/jss/material-kit-react/views/contactPage.jsx";


class ContactSection extends React.Component {
    render() {
        const {classes} = this.props;
        return (
            <div className={classes.section}>
                <GridContainer justify="center">
                    <GridItem cs={12} sm={12} md={8}>
                        <div className={classes.text}>
                            <h1>ช่องทางการติดต่อ</h1>
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
                                <Button
                                    color="transparent"
                                    href="https://www.instagram.com/scnp.embo/"
                                    target="_blank"
                                >
                                    <div className={classes.phoneContainer}>
                                        <div><i className={classes.socialPhone + " fa fa-phone"}/>
                                            0929246639
                                        </div>
                                    </div>
                                </Button>
                            </div>
                        </div>
                    </GridItem>
                </GridContainer>
            </div>
        );
    }
}

export default withStyles(ContactStyle)(ContactSection);
