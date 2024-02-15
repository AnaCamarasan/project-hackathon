import React, { useState } from "react"
import { Button, Card, CardContent, CardMedia, Chip } from "@mui/material"
import { Container, CssBaseline, FormControl, Grid } from "@mui/material"
import { InputLabel, MenuItem, OutlinedInput, Select } from "@mui/material"
import { Stack, Typography, Box, Link } from "@mui/material"
import CancelIcon from "@mui/icons-material/Cancel"
import { createTheme, ThemeProvider } from "@mui/material/styles"
import { useGetInterestsQuery } from "../generated/graphql"

const defaultTheme = createTheme()

const MultiSelect = () => {
  const [selectedNames, setSelectedNames] = useState<string[]>([])
  const { data: interestsData, error: interestsError } = useGetInterestsQuery()

  const interests = interestsData?.getInterests ?? []
  if (interestsError) return <p> Error</p>

  return (
    <FormControl sx={{ width: 550, marginTop: "1rem", marginLeft: "18rem" }}>
      <InputLabel>Interests</InputLabel>
      <Select
        multiple
        value={selectedNames}
        onChange={(event) => setSelectedNames(event.target.value as string[])}
        input={<OutlinedInput label="Interests" />}
        renderValue={(selected: any) => (
          <Stack gap={1} direction="row" flexWrap="wrap">
            {selected.map((value: string) => (
              <Chip
                key={value}
                label={value}
                onDelete={() =>
                  setSelectedNames(
                    selectedNames.filter((item) => item !== value)
                  )
                }
                deleteIcon={
                  <CancelIcon
                    onMouseDown={(event: React.MouseEvent) =>
                      event.stopPropagation()
                    }
                  />
                }
              />
            ))}
          </Stack>
        )}
      >
        {interests.map((interest) => (
          <MenuItem key={interest.id} value={interest.interest_name}>
            {interest.interest_name}
          </MenuItem>
        ))}
      </Select>
      <Button type="button" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
        Apply filters
      </Button>
    </FormControl>
  )
}

interface MediaCardProps {
  image: string
  title: string
  description: string
}

const MediaCard: React.FC<MediaCardProps> = ({ image, title, description }) => (
  <Card sx={{ width: "300px", height: "285px" }}>
    <CardMedia
      component="img"
      alt="Sample Image"
      height="100"
      image={image}
      title="Sample Image"
    />
    <CardContent>
      <Typography gutterBottom variant="h6" component="div">
        {title}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {description}
      </Typography>
      <Link href="#" variant="body2">
        Learn more
      </Link>
    </CardContent>
  </Card>
)

const ForYou = () => {
  const images = [
    "ps5.png",
    "fireman.jpg",
    "foot.jpg",
    "hogwarts.png",
    "disney.jpg",
    "golden.jpg",
    "plane.jpg",
    "space.png",
    "beyonce.png",
  ]

  const titles = [
    "I wish to have a PS5.",
    "I wish to be a firefighter.",
    "I wish to be in the Premier League.",
    "I wish to go to Hogwarts",
    "I wish to go to Disneyland.",
    "I wish to have a dog.",
    "I wish to be a pilot.",
    "I wish to go to space.",
    "I wish to meet Beyonce.",
  ]

  const descriptions = [
    "Looking for donations of a PS5 Console or PS5 Games.",
    "Looking for firefighters or a firestation that can give the child a tour.",
    "Searching for footballers in the Premier League or people who may have their contacts.",
    "Finding people with associations to Universal or Warner Bros.",
    "Looking for anyone who has a Disney mascot costume.",
    "Searching for anyone who has puppies they could donate.",
    "Looking for someone to offer a flight simulation or real pilot experience for the child.",
    "Hoping to organise a astronaut training session.",
    "Searching for someone with contacts to Beyonce or has tickets to a concert they no longer want.",
  ]

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="lg">
        <CssBaseline />
        <Box sx={{ marginBottom: "1rem" }}>
          <Typography variant="h4" sx={{ margin: "1rem 0" }}>
            Wish List For You
          </Typography>
          <MultiSelect />
        </Box>
        <Grid container spacing={2} justifyContent="center">
          {images.map((image, index) => (
            <Grid item key={index}>
              <MediaCard
                image={image}
                title={titles[index % titles.length]}
                description={descriptions[index % descriptions.length]}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </ThemeProvider>
  )
}

export default ForYou
