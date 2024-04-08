import { Flex, Heading, HStack, Text } from "@chakra-ui/react";
import React from "react";

type formHeadingProps = {
  pageNumber?: number | string;
  title?: string;
  subtitle?: string;
};
export const FormHeading = ({
  pageNumber,
  title,
  subtitle,
}: formHeadingProps) => {
  return (
    <>
      <Flex justifyContent={"center"} justifyItems="center">
        <HStack alignItems="baseline">
          <Heading
            fontSize={["md", "lg", "xl", "2xl", "2xl"]}
            textAlign={"center"}
            fontWeight="semibold"
            mb="2%"
            mt=".3em"
            // textTransform={"uppercase"}
            color={"black"}
            overflow="hidden"
          >
            <span
              style={{
                color: "#858585",
                fontFamily: "serif",
                fontWeight: "lighter",
                paddingRight:".1rem"
              }}
            >
              {pageNumber ? pageNumber : ""}.&nbsp;
            </span>
            {title ? title : ""}
          </Heading>
        </HStack>
      </Flex>
      <Text textAlign={"center"} my={"1rem"}>
        {subtitle ? subtitle : ""}
      </Text>
    </>
  );
};
