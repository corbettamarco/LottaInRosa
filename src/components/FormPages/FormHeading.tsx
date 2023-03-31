
import {Flex, Heading, Text } from "@chakra-ui/react"


type formHeadingProps = {
    pagenumber?: number,
    title?: string,
    subtitle?: string
}
export const FormHeading = ({ pagenumber, title, subtitle }: formHeadingProps) => {

    return (
        <>
            <Flex justifyContent={"center"} alignItems="baseline">

                <Text fontWeight={"light"} color={"lightgrey"} fontSize="2xl" paddingRight={"1%"}>
                    .{pagenumber
                        ? pagenumber
                        : "1"}
                </Text>

                <Heading textAlign={"center"} fontWeight="semibold" mb="2%" textTransform={"uppercase"} color={"black"} overflow="hidden">
                    {title
                        ? title
                        : "TITLE TITLE TILE ? "}
                </Heading>

            </Flex>
            {subtitle &&
                    <Text fontWeight={"medium"} color={"black"}>
                        {subtitle
                            ? subtitle
                            : "sottotitolo"}
                    </Text>}
        </>
    )
}