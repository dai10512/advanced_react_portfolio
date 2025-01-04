import {
  Badge,
  Box,
  CardBody,
  Heading,
  HStack,
  Image,
  StackDivider,
  Text,
  VStack,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { Card as ChakraCard } from "@chakra-ui/react";
const Card = ({
  title,
  description,
  imageSrc,
}: {
  title: string;
  description: string;
  imageSrc: string;
}) => {
  return (
    <VStack
      spacing={3}
      align="stretch"
      color={"black"}
      bg="white"
      borderRadius="xl"
    >
      <Image src={imageSrc} alt={title} borderRadius="xl"/>

      <Box p="4">
        <VStack
          // divider={<StackDivider borderColor="gray.200" />}
          spacing={4}
          align="stretch"
          color={"black"}
        >
          spacing={3}
          <Heading as="h4" size="md">
            {title}
          </Heading>
          <Text fontSize="sm" color="gray.500">
            {description}
          </Text>
          <HStack>
            <Text fontSize="sm" color="black">
              See More
            </Text>
            <FontAwesomeIcon icon={faArrowRight} size="1x" />
          </HStack>
        </VStack>
      </Box>
    </VStack>
  );
};

export default Card;
