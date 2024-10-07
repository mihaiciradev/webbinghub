import { Box, List, ListItem, ListItemButton, Drawer } from "@mui/material";
import React from "react";
import { useRouter } from "next/navigation";
import menu from "../menu.svg";
import Image from "next/image";
import { FlexBox } from "@/components/FlexBox";
import WhiteLogo from "@/assets/header-white-logo.svg";
import styles from "./MobileHeader.module.css";

export default function MobileHeader() {
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
        width: "100dvw !important",
        height: "100dvh !important",
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
      className={styles.drawer}
    >
      <Image src={WhiteLogo} alt="webbinghub white" className={styles.logo} />

      <List>
        <ListItem>
          <ListItemButton onClick={handleLinkClick("/")}>Home</ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton onClick={handleLinkClick("/about")}>
            About
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton onClick={handleLinkClick("/contact")}>
            Contact
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <Box>
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
