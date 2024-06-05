import { Box, Flex, Link } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Box bg="brand.800" px={4}>
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <NavLink to="/" style={{ color: "white", textDecoration: "none" }}>
          Home
        </NavLink>
        <NavLink to="/expenses" style={{ color: "white", textDecoration: "none" }}>
          Expenses
        </NavLink>
        <NavLink to="/savings" style={{ color: "white", textDecoration: "none" }}>
          Savings
        </NavLink>
        <NavLink to="/investments" style={{ color: "white", textDecoration: "none" }}>
          Investments
        </NavLink>
      </Flex>
    </Box>
  );
};

export default Navbar;
