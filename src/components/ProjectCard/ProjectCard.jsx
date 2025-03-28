import { Box, Text, Stack, Heading } from "@chakra-ui/react";

function ProjectCard({ title, points }) {
  return (
    <Box
      maxW="sm"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="md"
      p={4}
    >
      {/* Título do Card */}
      <Heading as="h3" size="lg" mb={4}>
        {title}
      </Heading>
      
      {/* Listando os pontos sobre o projeto */}
      <Stack spacing={2}>
        {points.map((point, index) => (
          <Text key={index} fontSize="md" color="gray.600">
            - {point}
          </Text>
        ))}
      </Stack>
    </Box>
  );
}

export default ProjectCard;
