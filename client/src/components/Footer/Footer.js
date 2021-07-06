import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import styles from "../../assets/jss/mernpress/components/footerStyle.js";
import FacebookImage from "../../assets/img/Social_Media/ic_facebook.png"
import InstragramImage from "../../assets/img/Social_Media/ic_instagram.png"
import TwitterImage from "../../assets/img/Social_Media/ic_twitter.png"
import YoutubeImage from "../../assets/img/Social_Media/ic_youtube.png"


import CardImg from '../../assets/img/cards.webp';

const useStyles = makeStyles(styles);

export default function Footer(props) {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <div className={classes.container}>
        <div className={classes.topFooter}>
          <a href="/" className={classes.logo}>Mernpress</a>
          <ul className={classes.links}>
            <li className={classes.link}><a href="#">Shop</a></li>
            <li className={classes.link}><a href="#">Journal</a></li>
            <li className={classes.link}><a href="#">About</a></li>
            <li className={classes.link}><a href="#">Contacts</a></li>
          </ul>
          <ul className={classes.socialLinks}>
            <li className={classes.link}><img src={FacebookImage} alt="Facebook" /></li>
            <li className={classes.link}><img src={InstragramImage} alt="Twitter" /></li>
            <li className={classes.link}><img src={TwitterImage} alt="Instagram" /></li>
            <li className={classes.link}><img src={YoutubeImage} alt="Youtube" /></li>
          </ul>
        </div>
        <div className={classes.lineDiv}></div>
        <div className={classes.bottomFooter}>
          <ul className={classes.left, classes.credibility}>
            <li className={classes.text}>
              <p>
                <span>
                  &copy; {1900 + new Date().getYear()}{" "}
                  <a
                    href="#"
                    target="_blank"
                    className={classes.a}
                  >
                    Mernpress
                  </a>
                </span>
              </p>
            </li>
            <li className={classes.text}>Privacy Policy</li>
            <li className={classes.text}>Terms of Use</li>
          </ul>
          <ul className={classes.right}>
            <li><p className={classes.desc}>Accepted payment methods</p></li>
            <li>
              <img src={CardImg} />
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

