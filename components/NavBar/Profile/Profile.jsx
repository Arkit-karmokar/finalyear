import React from "react";
import Image from "next/image";
import { FaUserAlt, FaRegImage, FaUserEdit } from "react-icons/fa";
import { MdHelpCenter } from "react-icons/md";
import { TbDownloadOff, TbDownload } from "react-icons/tb";
import Link from "next/link";

//INTERNAL IMPORT
import Style from "./Profile.module.css";
import images from "../../../img";

const Profile = () => {
  return (
    <div className={Style.profile}>
      <div className={Style.profile_account}>
        <Image
          src={images.user1}
          alt="user profile"
          width={50}
          height={50}
          className={Style.profile_account_img}
        />

        <div className={Style.profile_account_info}>
          <p>Sahil khan</p>
          <small>X038499382920203...</small>
        </div>
      </div>

      <div className={Style.profile_menu}>
        <div className={Style.profile_menu_one}>
          <div className={Style.profile_menu_one_item}>
            
          </div>
          <div className={Style.profile_menu_one_item}>
            
            
          </div>
          <div className={Style.profile_menu_one_item}>
          </div>
        </div>

        <div className={Style.profile_menu_two}>
          <div className={Style.profile_menu_one_item}>
           
            
          </div>
          <div className={Style.profile_menu_one_item}>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
