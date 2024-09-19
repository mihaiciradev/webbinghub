import { Box, BoxProps } from "@mui/material";
import { FC } from "react";

interface FlexBoxProps extends BoxProps {
  alignItems?: string;
  justifyContent?: string;
}

export const FlexBox: FC<FlexBoxProps> = ({
  alignItems = "center",
  justifyContent = "center",
  ...props
}: any) => (
  <Box
    display="flex"
    alignItems={alignItems}
    justifyContent={justifyContent}
    {...props}
  />
);
