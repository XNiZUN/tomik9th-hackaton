import { Box, Center } from "@chakra-ui/react";
import React, { useEffect } from "react";
import Menu from "../menu";

import { useRouter } from "next/router";

export default function Header() {
  let [menu, setMenu] = React.useState(false);
  let [top, setTop] = React.useState(false);
  useEffect(() => {
    window.addEventListener("scroll", (event): any => {
      let y: any = window.scrollY;
      y > 0 ? setTop(true) : setTop(false);
    });
  });
  const router = useRouter();
  return (
    <>
      <Menu openClose={() => setMenu(!menu)} menu={menu}></Menu>
      <Box
        pos="fixed"
        zIndex={9}
        width={"100%"}
        bgColor={menu == false ? "#051C2C70" : "#051C2C70"}
        padding={"10px"}
        display={"flex"}
        justifyContent={"space-between"}
        backdropFilter={"blur(2px)"}
        h="50px"
      >
        <Box
          fontWeight={900}
          display={"flex"}
          alignItems={"center"}
          transition={"800ms"}
          onClick={() => {
            window.location.href = "/";
          }}
          fontFamily={"Monoton"}
        >
          UBRO
        </Box>
        <Box display="flex">
          <Box
            fontSize={"12px"}
            display="flex"
            flexDir={top ? "row" : "column"}
          ></Box>
          <Box
            w={"calc(100vw/12)"}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"flex-end"}
            transition={"800ms"}
            onClick={() => {
              return menu === false ? setMenu(true) : setMenu(false);
            }}
          >
            <div>
              <Box
                w="2.2rem"
                h="2px"
                border={"1.5px solid #f5f2eb"}
                margin={"10px 0"}
                style={{
                  transition: ".4s",
                  transform:
                    menu === false
                      ? "rotate(0)"
                      : "rotate(45deg) translateY(9px)",
                }}
              ></Box>
              <Box
                w="2.2rem"
                h="2px"
                border={"1.5px solid #f5f2eb"}
                margin={"10px 0"}
                style={{
                  transition: ".4s",
                  transform:
                    menu === false
                      ? "rotate(0)"
                      : "rotate(-45deg) translateY(-9px)",
                }}
              ></Box>
            </div>
          </Box>
        </Box>
      </Box>
    </>
  );
}
