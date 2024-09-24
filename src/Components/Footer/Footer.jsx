import React from "react";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import "./Footer.css";
export default function Footer() {
  return (
    <>
      <div className="footer_outer_container">
        <div className="footer_inner_container">
          <div className="footer_icons">
            <FacebookOutlinedIcon />
            <InstagramIcon />
            <YouTubeIcon />
          </div>
          <div className="footer_data">
            <div>
              <ul>
                <li>Audio Description</li>
                <li>Invester Relations</li>
                <li>Legal Notice</li>
              </ul>
            </div>
            <div>
              <ul>
                <li>Help Center</li>
                <li>Jobs</li>
                <li>cookie preference</li>
              </ul>
            </div>
            <div>
              <ul>
                <li>Gift Card</li>
                <li>Termes ofUse</li>
                <li>Corporate Information</li>
              </ul>
            </div>
            <div>
              <ul>
                <li>Media Center</li>
                <li>Privacy </li>
                <li>Contact Us</li>
              </ul>
            </div>
                  </div>
                  <br />
                  <br />
          <div className="service_code">
            <p>Service_Code</p>
          </div>

          <div className="copy_write">&copy:1997-2024 Netflix, Inc.</div>
        </div>
      </div>
    </>
  );
}
