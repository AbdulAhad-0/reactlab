import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  return (
    <VStack
      backgroundColor="white"
      borderRadius="20px"
      overflow="hidden"
      alignItems="stretch"
      spacing={0}
      color="black"
    >
      <Image src={imageSrc} alt={title} width="100%" />

      <VStack
        alignItems="flex-start"
        padding={3}
        spacing={2}
      >
        <Heading size="md">{title}</Heading>

        <Text color="gray.500">
          {description}
        </Text>

        <HStack spacing={2}>
          <Text>See more</Text>
          <FontAwesomeIcon icon={faArrowRight} size="1x" />
        </HStack>
      </VStack>
    </VStack>
  );
};

export default Card;