import React from "react";
import "./EmailList.css";
import { ArrowDropDown } from "@mui/icons-material";
import RedoIcon from "@mui/icons-material/Redo";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { IconButton } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import KeyboardHideIcon from "@mui/icons-material/KeyboardHide";
import SettingsIcon from "@mui/icons-material/Settings";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import InboxIcon from "@mui/icons-material/Inbox";
import Section from "./Section";
import PeopleIcon from "@mui/icons-material/People";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import EmailRow from "./EmailRow";

const EmailList = () => {
  return (
    <div className="emailList">
      <div className="emailList__settings">
        <div className="emailList__settingsLeft">
          <Checkbox />
          <IconButton>
            <ArrowDropDown />
          </IconButton>
          <IconButton>
            <RedoIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
        <div className="emailList__settingsRight">
          <IconButton>
            <ChevronLeftIcon />
          </IconButton>
          <IconButton>
            <ChevronRightIcon />
          </IconButton>
          <IconButton>
            <KeyboardHideIcon />
          </IconButton>
          <IconButton>
            <SettingsIcon />
          </IconButton>
        </div>
      </div>

      <div className="emailList__sections">
        <Section Icon={InboxIcon} title="Primary" color="red" selected />
        <Section Icon={PeopleIcon} title="Social" color="blue" />
        <Section Icon={LocalOfferIcon} title="Promotions" color="green" />
      </div>

      <div className="emailList__list">
        <EmailRow
          title="Twitch"
          subject="Hey follow streamer!!!"
          description="This is a test"
          time="10pm"
        />
        <EmailRow
          title="Twitch"
          subject="Hey follow streamer!!!"
          description="This is a test This is a test This is a test This is a test This is a test"
          time="10pm"
        />
      </div>
    </div>
  );
};

export default EmailList;
