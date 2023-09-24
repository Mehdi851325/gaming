import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}
const CardContainer = ({ children }: Props) => {
  return (
    <Box _hover={{
      transform: 'scale(1.03)',
      transformBox: 'transform .15s ease-in '
    }} borderRadius={10} overflow={"hidden"}>
      {children}
    </Box>
  );
};

export default CardContainer;
