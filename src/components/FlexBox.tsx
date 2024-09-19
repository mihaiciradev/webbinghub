import { Box } from "@mui/material";

export const FlexBox = ({ alignItems = "center", justifyContent = "center", ...props }: any) => (
  <Box display="flex" alignItems={alignItems} justifyContent={justifyContent} {...props} />
);
