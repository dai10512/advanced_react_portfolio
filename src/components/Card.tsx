import {
  CardBody,
  Heading,
  HStack,
  Image,
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
    <ChakraCard>
      <CardBody>
        <Text>View a summary of all your customers over the last month.</Text>
      </CardBody>
    </ChakraCard>
  );
};

export default Card;
