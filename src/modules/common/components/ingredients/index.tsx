import React, { useEffect, useState } from "react"
import {
  Heading,
  Text,
  Container,
  Grid,
  GridItem,
  Flex,
  Stack,
  Center,
} from "@chakra-ui/react"
import Separator from "../separator"
import Image from "next/image"
import contentfulClient from "@lib/util/contentful-client"

const Ingredients = ({ data }: { data: any }) => {
  const numIngredients = data.ingredients.length
  const [ingredients, setIngredients] = useState<Array<any>>([])

  useEffect(() => {
    async function getIngredients() {
      const response = await contentfulClient.getEntries({
        content_type: "tile",
        "sys.id[in]": data.ingredients
          .map((ingredient: any) => ingredient.sys.id)
          .join(","),
      })
      setIngredients(response.items)
    }
    if (numIngredients) getIngredients()
  }, [data.ingredients, numIngredients])

  const cols = [...ingredients]
  const firstCol = ingredients
    ? ingredients.slice(0, Math.ceil(numIngredients / 2))
    : []
  const secondCol = ingredients
    ? ingredients.slice(Math.ceil(numIngredients / 2), numIngredients)
    : []

  return (
    <Container centerContent textAlign="center" my={10} maxW="8xl">
      <Heading as="h3" fontSize={42} color="brand.400" fontWeight="400">
        {data.title}
      </Heading>
      <Text size="sm" maxW="2xl" mt={4}>
        {data.subtitle}
      </Text>
      <Separator />
      <Grid templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)", "repeat(7, 1fr)"]} gap={6} width="100%">
        <GridItem colSpan={[1, 1, 3]}>
          {firstCol.map((i: any) => (
            <Flex
              key={i.sys.id}
              alignItems="center"
              width={["100%", "100%", "80%"]}
              marginLeft="auto"
            >
              <Image
                alt={i.fields?.image?.fields?.title}
                src={`https:${i.fields?.image?.fields?.file.url}`}
                height={192}
                width={192}
              />
              <Stack width="100%" ml={12}>
                <Text color="brand.400" textAlign="left" size="xl">
                  {i.fields?.title}
                </Text>
                <Text textAlign="left" size="md">
                  {i.fields?.subtitle}
                </Text>
              </Stack>
            </Flex>
          ))}
        </GridItem>
        <GridItem colSpan={1} display={["none", "none", "block"]}>
          <Center height="100%">
            <Image
              alt={data.productImage?.fields?.title || ""}
              src={`https:${data.productImage?.fields?.file?.url || ""}`}
              height={384}
              width={384}
            />
          </Center>
        </GridItem>
        <GridItem colSpan={[1, 1, 3]}>
          {secondCol.map((i: any) => (
            <Flex key={i.sys.id} alignItems="center" width={["100%", "100%", "80%"]}>
              <Image
                alt={i.fields?.image?.fields?.title}
                src={`https:${i.fields?.image?.fields?.file.url}`}
                height={192}
                width={192}
              />
              <Stack width="100%" ml={12}>
                <Text color="brand.400" textAlign="left" size="xl">
                  {i.fields?.title}
                </Text>
                <Text textAlign="left" size="md">
                  {i.fields?.subtitle}
                </Text>
              </Stack>
            </Flex>
          ))}
        </GridItem>
      </Grid>
    </Container>
  )
}

export default Ingredients
