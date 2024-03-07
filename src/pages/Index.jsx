import React from "react";
import { Box, Flex, Heading, Stat, StatLabel, StatNumber, Input, Select, Image, SimpleGrid, StatGroup, VStack } from "@chakra-ui/react";
import { FaUserTie, FaUsers, FaChalkboardTeacher, FaMoneyCheckAlt, FaSearch } from "react-icons/fa";

const Index = () => {
  return (
    <Box p={8}>
      <Flex justifyContent="space-between" alignItems="center" mb={10}>
        <Heading as="h1" size="xl">
          Principal's Dashboard
        </Heading>
        <Image src="https://images.unsplash.com/photo-1590650213165-c1fef80648c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzY2hvb2wlMjBwcmluY2lwYWx8ZW58MHx8fHwxNzA5ODA1Mjk5fDA&ixlib=rb-4.0.3&q=80&w=1080" borderRadius="full" boxSize="100px" objectFit="cover" alt="Principal" />
      </Flex>

      <StatGroup mb={10}>
        <Stat>
          <StatLabel>Total Teachers Present Today</StatLabel>
          <StatNumber>32</StatNumber>
        </Stat>
        <Stat>
          <StatLabel>Total Students Present Today</StatLabel>
          <StatNumber>528</StatNumber>
        </Stat>
        <Stat>
          <StatLabel>Active Classes</StatLabel>
          <StatNumber>16</StatNumber>
        </Stat>
        <Stat>
          <StatLabel>Classes Without Teachers</StatLabel>
          <StatNumber>2</StatNumber>
        </Stat>
        <Stat>
          <StatLabel>Students Paid Fees This Week</StatLabel>
          <StatNumber>123</StatNumber>
        </Stat>
        <Stat>
          <StatLabel>Students With Pending Fees</StatLabel>
          <StatNumber>45</StatNumber>
        </Stat>
      </StatGroup>

      <Box bg="gray.100" p={6} borderRadius="md" mb={10}>
        <Heading as="h3" size="lg" mb={4}>
          <FaSearch /> Student Search
        </Heading>
        <VStack spacing={4} align="flex-start">
          <Select placeholder="Select Class" icon={<FaChalkboardTeacher />}>
            {Array.from({ length: 10 }, (_, i) => (
              <option key={i} value={`Class ${i + 1}`}>{`Class ${i + 1}`}</option>
            ))}
          </Select>
          <Select placeholder="Select Section" icon={<FaUsers />}>
            {["A", "B", "C", "D"].map((section) => (
              <option key={section} value={`Section ${section}`}>{`Section ${section}`}</option>
            ))}
          </Select>
          <Input placeholder="Enter Student Name" />
        </VStack>
      </Box>

      <SimpleGrid columns={2} spacing={10}>
        <Box p={6} borderRadius="md" bg="blue.100">
          <Flex alignItems="center" mb={3}>
            <FaUserTie size="2em" />
            <Heading as="h5" size="md" ml={3}>
              Teacher Summary
            </Heading>
          </Flex>
          <Image src="https://images.unsplash.com/photo-1512253022256-19f4cb92a4dc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx0ZWFjaGVycyUyMGluJTIwc2Nob29sfGVufDB8fHx8MTcwOTgwNTI5OXww&ixlib=rb-4.0.3&q=80&w=1080" borderRadius="md" />
        </Box>
        <Box p={6} borderRadius="md" bg="green.100">
          <Flex alignItems="center" mb={3}>
            <FaMoneyCheckAlt size="2em" />
            <Heading as="h5" size="md" ml={3}>
              Fees Summary
            </Heading>
          </Flex>
          <Image src="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzY2hvb2wlMjBmZWVzfGVufDB8fHx8MTcwOTgwNTI5OXww&ixlib=rb-4.0.3&q=80&w=1080" borderRadius="md" />
        </Box>
      </SimpleGrid>
    </Box>
  );
};

export default Index;
