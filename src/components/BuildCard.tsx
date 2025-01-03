import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { Card } from "@chakra-ui/react"

const BuildCard = ({ title, description, imageSrc }:{
  title: string,
  description: string,
  imageSrc: string
}) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <Card.Root width="320px">
      {/* <Card.Header />
      <Card.Body />
      <Card.Footer /> */}
    </Card.Root>
  );
};

export default BuildCard;
