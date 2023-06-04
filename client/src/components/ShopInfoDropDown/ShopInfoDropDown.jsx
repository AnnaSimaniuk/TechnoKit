import { useState } from "react";
import { Divider, Typography } from "@mui/material";
import Menu from "@mui/material/Menu";
import ExpandMoreRoundedIcon from "@mui/icons-material/ExpandMoreRounded";
import TimerLogo from "../../assets/images/shopInfo/dropdown__timer.svg";
import LocationLogo from "../../assets/images/shopInfo/dropdown__location.svg";
import styles from "./ShopInfoDropDown.module.scss";

const ShopInfoDropDown = () => {
  const [isOpenShopInfo, setIsOpenShopInfo] = useState(null);
  const openShopInfo = (event) => {
    setIsOpenShopInfo(event.currentTarget);
  };
  const closeShopInfo = () => {
    setIsOpenShopInfo(null);
  };
  return (
    <>
      <ExpandMoreRoundedIcon
        onClose={closeShopInfo}
        onClick={openShopInfo}
        className={styles.icon}
      />
      <Menu
        anchorEl={isOpenShopInfo}
        open={Boolean(isOpenShopInfo)}
        onClose={closeShopInfo}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 2,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 75,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <div className={styles["shop__time-wrapper"]}>
          <img
            className={styles.timer__logo}
            src={TimerLogo}
            alt="Timer Logo"
          />
          <div className={styles["shop__working-time"]}>
            <Typography
              component="p"
              fontSize={12}
              fontWeight={400}
              lineHeight="16.8px"
              color="#000"
            >
              We are open:
            </Typography>
            <Typography component="span" fontSize={12} color="#A2A6B0">
              Mon-Thu: <b> 9:00 AM - 5:30 PM</b>
              <br />
              Fr: <b> 9:00 AM - 6:00 PM</b>
              <br />
              Sat: <b> 11:00 AM - 5:00 PM</b>
            </Typography>
          </div>
        </div>
        <Divider />
        <div className={styles["shop-adress"]}>
          <img
            className={styles.location__logo}
            src={LocationLogo}
            alt="Timer Logo"
          />
          <div className={styles["shop__adress-info"]}>
            <Typography fontSize={13} fontWeight={400} color="#000">
              Address: 1234 Street Adress, <br /> City Address, 1234
            </Typography>
          </div>
        </div>

        <div className={styles["shop__contacts-info"]}>
          <Typography
            fontSize={13}
            fontWeight={400}
            color="#000"
            align="left"
            component="span"
          >
            Phones:{" "}
            <a href="(00) 1234 5678" style={{ color: "#0156FF" }}>
              (00) 1234 5678
            </a>{" "}
            <br /> E-mail:{" "}
            <a href="shop@email.com" style={{ color: "#0156FF" }}>
              shop@email.com
            </a>
          </Typography>
        </div>
      </Menu>
    </>
  );
};

export default ShopInfoDropDown;
