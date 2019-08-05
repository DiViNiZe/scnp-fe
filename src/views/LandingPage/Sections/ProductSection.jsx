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
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons
import Chat from "@material-ui/icons/Chat";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Fingerprint from "@material-ui/icons/AccessTime";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import InfoArea from "components/InfoArea/InfoArea.jsx";

import productStyle from "assets/jss/material-kit-react/views/landingPageSections/productStyle.jsx";

class ProductSection extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h2 className={classes.title}>ทำกับเราทำด้วยใจ SCNP</h2>
            <h5 className={classes.description}>
              เราเป็นโรงงานผลิตเสื้อผ้าสำเร็จรูปที่มีคุณภาพและครบวงจร
              ตั้งแต่การขึ้นแพทเทิร์น ตัดเย็บ รวมไปถึงการปัก/สกรีน
              ด้วยเครื่องจักรและเทคโนโลยีที่ทันสมัย
              สามารถรองรับการผลิตได้ปริมาณมาก
              มีการตรวจสอบคุณภาพของสินค้า{' '}เพื่อให้ได้สินค้าที่มีมาตรฐานและคุณภาพดี
            </h5>
          </GridItem>
        </GridContainer>
        <div>
          <GridContainer>
            <GridItem xs={12} sm={12} md={4}>
              <InfoArea
                title="การันตีคุณภาพ"
                description="ทางร้านเราการันตีคุณภาพของผลงาน จากประสบการณ์มากกว่า10ปี และก่อนส่งงานทุกครั้งจะผ่านการ QC อย่างดี ดังนั้นคุณลูกค้าไว้วางใจได้เลยค่ะ"
                icon={VerifiedUser}
                iconColor="success"
                vertical
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <InfoArea
                title="ต่อรองราคาได้"
                description="เนื่องจากเราต้องการให้คุณลูกค้าได้รับเสื้อผ้าที่ถูกใจ และเป็นไปตามต้องการ เราจึงเปิดโอกาสให้ลูกค้าสามารถสอบถามและต่อรองราคาได้เสมือนเป็นครอบครัวเดียวกัน"
                icon={Chat}
                iconColor="info"
                vertical
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <InfoArea
                title="ตรงต่อเวลา"
                description="คุณลูกค้าสามารถไว้วางใจเรื่องตรงต่อได้อย่างแน่นอน เพราะเรามีระบบการเช็คสถานะสินค้าออนไลน์ว่าตอนนี้อยู่ในขั้นตอนการผลิตขั้นไหน ได้ตลอด 24 ชั่วโมง "
                icon={Fingerprint}
                iconColor="danger"
                vertical
              />
            </GridItem>
          </GridContainer>
        </div>
      </div>
    );
  }
}

ProductSection.propTypes = {
  classes: PropTypes.object
};

export default withStyles(productStyle)(ProductSection);
