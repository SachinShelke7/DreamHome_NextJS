import { Avatar, Box, Flex, Text } from "@chakra-ui/react";
import millify from "millify";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { GoVerified } from "react-icons/go";
import { FaBed, FaBath } from "react-icons/fa";
import { BsGridFill } from "react-icons/bs";

const defaultImage =
  "https://unsplash.com/photos/R-LK3sqLiBw/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8NHx8cmVudCUyMGElMjBob3VzZXxlbnwwfHx8fDE2NDU0NDQ5Nzg&force=true&w=640";

const Property = ({
  property: {
    coverPhoto,
    price,
    rentFrequency,
    rooms,
    title,
    baths,
    area,
    agency,
    isVerified,
    externalId,
  },
}) => {
  return (
    <div>
      <Link href={`/property/${externalId}`} passHref>
        <Flex
          flexWrap="wrap"
          w="420px"
          p="5"
          paddingTop="0"
          justifyContent="flex-start"
          cursor="pointer"
        >
          <Box>
            <div>
              <Image
                src={coverPhoto ? coverPhoto.url : defaultImage}
                width={400}
                height={260}
                alt="Image"
              />
            </div>
          </Box>
          <Box w="full">
            <Flex
              paddingTop="2"
              alignItems="center"
              justifyContent="space-between"
            >
              <Flex alignItems="center">
                <Box paddingRight="3" color="green.400">
                  {isVerified && <GoVerified />}
                </Box>
                <Text fontWeight="bold" fontSize="lg">
                  Rs {millify(price)}
                  {rentFrequency && `/${rentFrequency}`}
                </Text>
              </Flex>
              <Box>
                <Avatar size="xs" src={agency?.logo?.url} />
              </Box>
            </Flex>
            <Flex
              alignItems="center"
              justifyContent="space-between"
              w="250px"
              color="blue.400"
            >
              {rooms} <FaBed /> | {baths} <FaBath /> | {millify(area)} sqft{" "}
              <BsGridFill />
            </Flex>
            <Text fontSize="lg">
              {title.length > 30 ? `${title.substring(0, 30)}...` : title}
            </Text>
          </Box>
        </Flex>
      </Link>
    </div>
  );
};

export default Property;
