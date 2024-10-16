import { FlexBox } from "@/components/FlexBox";
import styles from "./page.module.css";
import Image from "next/image";
import SEO from "./assets/SEO.png";
import { List, ListItem, ListItemText, Typography } from "@mui/material";
import WebsitesTable from "./WebsitesTable";
import { Metadata } from "next/types";

export const metadata: Metadata = {
  title: "How hard is it to make a website?",
};

export default function CreateYourOwnWebsite() {
  return (
    <>
      <FlexBox className={styles.container}>
        <Image src={SEO} alt="SEO websites webbinghub" />

        <Typography variant="h4" sx={{ textAlign: "center" }}>
          How hard is it to make a website?
        </Typography>

        <Typography variant="body2" sx={{ textAlign: "center" }}>
          Building a website can be as simple or as complex as your goals and
          technical skills allow. Using platforms like WordPress or Wix,
          beginners can create basic websites fairly quickly. However, crafting
          a fully optimized, custom website with enhanced performance, design,
          and scalability requires advanced coding skills and a deep
          understanding of user experience and SEO. For businesses looking to
          grow and succeed online, working with professional web developers can
          save time, eliminate headaches, and ensure you have a high-performing
          website tailored to your needs.
        </Typography>

        <WebsitesTable />

        <Typography variant="h5">
          The Evolution of Website Creation: From Simple Builders to Full-Scale
          Custom Development
        </Typography>

        <List>
          <ListItem>
            <ListItemText
              primaryTypographyProps={{ variant: "body2" }}
              primary="&bull;&emsp;Easy-to-use platforms: About 40% of websites are built using WordPress. While these platforms make website creation accessible, they often lack the advanced customization and optimization that professional businesses need to stand out. That’s where expert development comes in—creating something unique that truly aligns with your brand’s vision."
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primaryTypographyProps={{ variant: "body2" }}
              primary="&bull;&emsp;Custom websites perform better: A study by Clutch found that businesses using website builders often struggle with technical limitations, with 29% of DIY projects being abandoned due to dissatisfaction with the final product. Custom websites, built by professionals, are more flexible, scalable, and optimized for long-term growth."
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primaryTypographyProps={{ variant: "body2" }}
              primary="&bull;&emsp;Skill gap and expertise: While basic platforms help get a website up and running, creating something robust and future-proof requires professional development. Industry-standard tools and languages like HTML, CSS, and JavaScript—skills that 64% of professional developers rely on for creating high-performance websites."
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primaryTypographyProps={{ variant: "body2" }}
              primary="&bull;&emsp;Time vs. Value: A simple DIY website can be built in 3-7 hours, but a professionally developed website, customized to your specific needs, can take a few months. This investment ensures your website not only looks great but also functions flawlessly, keeping users engaged and converting traffic into sales."
            />
          </ListItem>
        </List>

        <Typography variant="h5">
          The True Cost of Building a Website
        </Typography>

        <Typography variant="body2">
          While basic builders may seem cost-effective at first, they often come
          with hidden limitations—especially when your business starts to grow:
        </Typography>

        <List>
          <ListItem>
            <ListItemText
              primaryTypographyProps={{ variant: "body2" }}
              primary="&bull;&emsp;Lack of flexibility: Basic plans in website builders often restrict access to critical features like SEO tools, e-commerce functionality, or custom integrations. Upgrading to a professional site later can be costly and time-consuming."
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primaryTypographyProps={{ variant: "body2" }}
              primary="&bull;&emsp;Ongoing Maintenance: Websites need regular updates, security checks, and performance improvements. At WebbingHUB, we provide maintenance services, ensuring your site stays optimized and protected without you having to lift a finger."
            />
          </ListItem>
        </List>

        <Typography variant="h5">Why Settle for Average?</Typography>

        <Typography variant="body2">
          While anyone can create a basic website, will it really help you grow
          your business? Studies show that 53% of mobile users abandon websites
          that take more than 3 seconds to load. A professionally developed
          website, like those built by WebbingHUB, ensures faster load times,
          better SEO, and an overall smoother user experience—helping your
          business stand out in a crowded digital landscape.
        </Typography>

        <Typography variant="h5">Why Trust WebbingHUB?</Typography>

        <Typography variant="body2">
          At WebbingHUB, we specialize in crafting websites that not only look
          great but also convert. Whether you need a simple landing page or a
          complex e-commerce platform, our team of experts works closely with
          you to create a website that aligns perfectly with your business
          goals.
        </Typography>

        <List>
          <ListItem>
            <ListItemText
              primaryTypographyProps={{ variant: "body2" }}
              primary="&bull;&emsp;Performance and Speed: A professional website designed by us ensures faster loading times, giving your users a seamless experience and improving your SEO ranking."
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primaryTypographyProps={{ variant: "body2" }}
              primary="&bull;&emsp;Tailored Solutions: Unlike cookie-cutter templates, we build custom solutions from the ground up, offering exactly what your business needs."
            />
          </ListItem>
        </List>

        <Typography variant="h5">Ready to Elevate Your Business?</Typography>

        <Typography variant="body2">
          If you want to ensure that your website stands out, performs well, and
          grows with your business, why not leave it to the experts? At
          WebbingHUB, we turn your vision into a reality—helping you build a
          professional, high-performing website that drives results. Contact us
          today to get started and take your online presence to the next level!
        </Typography>
      </FlexBox>
    </>
  );
}
