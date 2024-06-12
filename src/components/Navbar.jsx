import { Box, Flex, Link } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Box bg="brand.700" px={4} py={2}>
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <Box>
          <Link as={NavLink} to="/" px={2} py={1} rounded="md" _hover={{ textDecoration: "none", bg: "brand.900" }} _activeLink={{ bg: "brand.900" }}>
            Home
          </Link>
          <Link as={NavLink} to="/transactions" px={2} py={1} rounded="md" _hover={{ textDecoration: "none", bg: "brand.900" }} _activeLink={{ bg: "brand.900" }}>
            Transactions
          </Link>
        </Box>
      </Flex>
    </Box>
  );
};

export default Navbar;