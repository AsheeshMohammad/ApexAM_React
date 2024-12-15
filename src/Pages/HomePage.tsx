import { Box } from "@mui/material"
import ClientsSectionComponent from "../Components/ClientsSectionComponent/ClientsSectionComponent"
import CollabComponent from "../Components/HomeComponent/CollabComponent/CollabComponent"
import Services from "../Components/HomeComponent/ServicesComponent/Services"
import PageContent from "../Components/PageContent/PageContent"

const HomePage = () => {
  return (
    <Box position={'relative'}>
      <PageContent />
      <Services />
      <CollabComponent />
      <ClientsSectionComponent />
    </Box>
  )
}

export default HomePage