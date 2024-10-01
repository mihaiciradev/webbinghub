import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Divider,
  Button,
  Drawer,
} from "@mui/material";
import React from "react";
import { useRouter } from "next/navigation";
import menu from "../menu.svg";
import Image from "next/image";
import { FlexBox } from "@/components/FlexBox";
import WhiteLogo from "@/assets/header-white-logo.svg";
import styles from "./drawer.module.css";

export default function TemporaryDrawer() {
  const [open, setOpen] = React.useState(false);
  const router = useRouter();

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const handleLinkClick = (path: string) => () => {
    router.push(path);
    setOpen(false);
  };

  const DrawerList = (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "2rem",
        fontSize: "2rem",
        backgroundColor: "#333232",
        color: "#E4D0A7",
      }}
      role="presentation"
      onClick={toggleDrawer(false)}
    >
      <Image src={WhiteLogo} alt="webbinghub white" className={styles.logo} />

      <List>
        <ListItem>
          <ListItemButton onClick={handleLinkClick("/")}>
            {/* <ListItemText primary="Home" /> */}
            Home
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton onClick={handleLinkClick("/about")}>
            {/* <ListItemText primary="About" /> */}
            About
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton onClick={handleLinkClick("/contact")}>
            {/* <ListItemText primary="Contact" /> */}
            Contact
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <Box
      sx={{
        position: "absolute",
        top: "10px",
        right: "5%",
      }}
    >
      <FlexBox onClick={toggleDrawer(true)} className={styles.mobileMenu}>
        <Image src={menu} alt="menu" />
      </FlexBox>
      <Drawer
        anchor="right"
        open={open}
        onClose={toggleDrawer(false)}
        PaperProps={{
          sx: {
            width: "100%",
          },
        }}
      >
        {DrawerList}
      </Drawer>
    </Box>
  );
}
