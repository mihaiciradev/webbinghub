import * as React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

function WebsitesTable() {
  return (
    <TableContainer
      component={Paper}
      sx={{ backgroundColor: "transparent", boxShadow: "none" }}
    >
      <Table size="small" aria-label="compact table">
        <TableHead>
          <TableRow>
            <TableCell align="center" sx={{ fontWeight: "bold", width: "20%" }}>
              Website Creation Method
            </TableCell>
            <TableCell align="center" sx={{ fontWeight: "bold", width: "15%" }}>
              Difficulty Level
            </TableCell>
            <TableCell align="center" sx={{ fontWeight: "bold", width: "20%" }}>
              Time to Build
            </TableCell>
            <TableCell align="center" sx={{ fontWeight: "bold", width: "25%" }}>
              Required Skills/Tools
            </TableCell>
            <TableCell align="center" sx={{ fontWeight: "bold", width: "20%" }}>
              Best For
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.method}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell
                align="center"
                component="th"
                scope="row"
                sx={{ padding: "0px", fontSize: "0.875rem" }}
              >
                {row.method}
              </TableCell>
              <TableCell
                align="center"
                sx={{ padding: "0px", fontSize: "0.875rem" }}
              >
                {row.difficulty}
              </TableCell>
              <TableCell
                align="center"
                sx={{ padding: "0px", fontSize: "0.875rem" }}
              >
                {row.time}
              </TableCell>
              <TableCell
                align="center"
                sx={{ padding: "0px", fontSize: "0.875rem" }}
              >
                {row.skills}
              </TableCell>
              <TableCell
                align="center"
                sx={{ padding: "0px", fontSize: "0.875rem" }}
              >
                {row.bestFor}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

const rows = [
  {
    method: "Website Builders (Wix, Squarespace)",
    difficulty: "Easy",
    time: "3-7 hours",
    skills: "Drag-and-drop, basic SEO knowledge",
    bestFor: "Small businesses, personal websites, quick setups",
  },
  {
    method: "CMS Platforms (WordPress)",
    difficulty: "Moderate",
    time: "1-2 days",
    skills: "Basic coding, plugin management, SEO",
    bestFor: "Blogs, small business websites, content-heavy sites",
  },
  {
    method: "Custom-Built (HTML/CSS/JS)",
    difficulty: "Hard",
    time: "1-3 months",
    skills: "HTML, CSS, JavaScript, SEO, UX/UI",
    bestFor: "Businesses needing unique, scalable websites",
  },
  {
    method: "E-Commerce Platforms (Shopify, WooCommerce)",
    difficulty: "Moderate",
    time: "2-7 days",
    skills: "E-commerce management, basic coding, SEO",
    bestFor: "Online stores, product-based businesses",
  },
  {
    method: "Professional Development",
    difficulty: "Complex",
    time: "2-4 months",
    skills: "Advanced coding, design, SEO, backend development",
    bestFor: "Growing businesses, custom features, large-scale operations",
  },
];

export default WebsitesTable;
