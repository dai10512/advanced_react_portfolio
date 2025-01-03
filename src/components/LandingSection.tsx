import React from "react";
import {Avatar, Heading, Text, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Pete!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
    <FullScreenSection
      justifyContent="center"
      alignItems="center"
      isDarkBackground
      backgroundColor="#2A4365"
    >
      <Avatar size="md" name="Sage" src=" https://i.pravatar.cc/150?img=7" />
      <Heading as="h1" size="lg">
        {greeting}
      </Heading>
      <Text as="p" fontSize="lg">
        {bio1}
      </Text>
      <Text as="p" fontSize="xl">
        {bio2}
      </Text>
    </FullScreenSection>
);

export default LandingSection;
