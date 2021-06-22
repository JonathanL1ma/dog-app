import React from 'react';
import { Center, Badge, Box, Wrap, WrapItem, Table, Thead, Tbody, Tr, Th, Td, Link } from "@chakra-ui/react"
import { Link as RouterLink } from 'react-router-dom';

interface BreedsListProps {
  breeds: Object
}

const BreedsList = ({ breeds }: BreedsListProps) => {
  return (
    <Center>
      <Box w='50%'>
        <Table colorScheme='twitter' variant='striped'>
          <Thead>
            <Tr>
              <Th>Breed</Th>
              <Th>Sub Breeds</Th>
            </Tr>
          </Thead>
          <Tbody>
            { Object.entries(breeds).map(([breed, subBreeds]) => (
              <Tr>
                <Td>
                  <Link as={ RouterLink } to={`/breed/${breed}`}>{breed}</Link>
                </Td>
                <Td>
                  <Wrap spacing='12px'>
                    { subBreeds.map((subBreed: string) => (
                      <WrapItem>
                        <Badge>
                          <Link as={ RouterLink } to={`/subbreed/${breed}/${subBreed}`}>{subBreed}</Link>
                        </Badge>
                      </WrapItem>
                    )) }
                  </Wrap>
                </Td>
              </Tr>
            )) }
          </Tbody>
        </Table>
      </Box>
    </Center>
  )
}

export default BreedsList;
