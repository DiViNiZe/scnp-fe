import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Gallery from "react-photo-gallery";

//IMAGE ASSETS
import photo1 from "assets/img/productpic/43743554_2066098986782241_3044794589211787264_n.jpg";
import photo2 from "assets/img/productpic/51819986_2230121137046691_4414929284515233792_n.jpg";
import photo3 from "assets/img/productpic/53556231_2272869819438489_14932299913101312_n.jpg";
import photo4 from "assets/img/productpic/54729697_2291162747609196_7777650190634188800_n.jpg";
import photo5 from "assets/img/productpic/56527856_2317070411685096_5627144174147993600_n.jpg";
import photo6 from "assets/img/productpic/56691546_2317174881674649_6899277847584571392_n.jpg";
import photo7 from "assets/img/productpic/57595629_2338384556220348_9050348686629928960_n.jpg";
import photo8 from "assets/img/productpic/60695482_2382019301856873_5264164122752188416_n.jpg";
import photo9 from "assets/img/productpic/64956708_2446825532042916_6044894138128662528_o.jpg";
import photo10 from "assets/img/productpic/66118572_2467970316595104_7208033138004459520_n.jpg";

const photos = [
  {
    src: photo1,
    sizes: ["(min-width: 480px) 50vw,(min-width: 1024px) 33.3vw,100vw"],
    width: 4,
    height: 3,
    text: "hey"
  },
  {
    src: photo2,
    sizes: ["(min-width: 480px) 50vw,(min-width: 1024px) 33.3vw,100vw"],
    width: 1,
    height: 1
  },
  {
    src: photo3,
    sizes: ["(min-width: 480px) 50vw,(min-width: 1024px) 33.3vw,100vw"],
    width: 3,
    height: 4
  },
  {
    src: photo4,
    sizes: ["(min-width: 480px) 50vw,(min-width: 1024px) 33.3vw,100vw"],
    width: 3,
    height: 4
  },
  {
    src: photo6,
    sizes: ["(min-width: 480px) 50vw,(min-width: 1024px) 33.3vw,100vw"],
    width: 3,
    height: 4
  },
  {
    src: photo5,
    sizes: ["(min-width: 480px) 50vw,(min-width: 1024px) 33.3vw,100vw"],
    width: 4,
    height: 3
  },
  {
    src: photo7,
    sizes: ["(min-width: 480px) 50vw,(min-width: 1024px) 33.3vw,100vw"],
    width: 3,
    height: 4
  },
  {
    src: photo8,
    sizes: ["(min-width: 480px) 50vw,(min-width: 1024px) 33.3vw,100vw"],
    width: 4,
    height: 3
  },
  {
    src: photo9,
    sizes: ["(min-width: 480px) 50vw,(min-width: 1024px) 33.3vw,100vw"],
    width: 4,
    height: 3
  },
  {
    src: photo10,
    sizes: ["(min-width: 480px) 50vw,(min-width: 1024px) 33.3vw,100vw"],
    width: 4,
    height: 3
  }
];

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper
  },
  gridList: {
    width: 500,
    height: 450,
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: "translateZ(0)"
  },
  titleBar: {
    background:
      "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, " +
      "rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)"
  },
  icon: {
    color: "white"
  }
}));

/**
 * The example data is structured as follows:
 *
 * import image from 'path/to/image.jpg';
 * [etc...]
 *
 * const tileData = [
 *   {
 *     img: image,
 *     title: 'Image',
 *     author: 'author',
 *     featured: true,
 *   },
 *   {
 *     [etc...]
 *   },
 * ];
 */
export default function AdvancedGridList() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Gallery photos={photos} />;
    </div>
  );
}
