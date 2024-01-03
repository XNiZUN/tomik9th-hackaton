import { Box, Center } from "@chakra-ui/react";
import Image from "next/image";
export default function LeftConnection() {
  const socialLink: any = [
    {
      src: "/codepen.svg",
      text: "Codepen",
    },
    {
      src: "/twitter.svg",
      text: "Twitter",
    },
    {
      src: "/github.svg",
      text: "Github",
    },
    {
      src: "/linked.svg",
      text: "Linkedin",
    },
    {
      src: "/instagram.svg",
      text: "Instagram",
    },
    {
      src: "/codepen.svg",
      text: "Codepen",
    },
    {
      src: "/twitter.svg",
      text: "Twitter",
    },
    {
      src: "/github.svg",
      text: "Github",
    },
    {
      src: "/linked.svg",
      text: "Linkedin",
    },
    {
      src: "/instagram.svg",
      text: "Instagram",
    },
  ];
  return (
    <Box
      padding="0 10px"
      display={"flex"}
      justifyContent={"space-between"}
      pos="fixed"
      top="80px"
    >
      <Box display={"flex"} flexDir={"column"}>
        {socialLink.map((el: any, key: any) => {
          return (
            <Box key={key} display={"flex"} flexDir={"row"}>
              <Center w="65px" h="35px" m="10px 0">
                <Image
                  height={30}
                  width={30}
                  alt=""
                  src={socialLink[key].src}
                />
              </Center>
              <Center>{socialLink[key].text}</Center>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}
