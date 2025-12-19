import { CategorySlider, CommentSlider, CommonQuestions, ExtraFooterInformation, MainBlog } from '@/components/shared/ui'
import { Container, Stack } from '@mui/material'
import React from 'react'
import PackageHeroSection from './_components/packageHeroSection'
import CompanyCards from './_components/companyCards'
import PackageChooseHero from './_components/packageChooseHero'
import FavouritePackages from './_components/favouritePackages'

function Home() {
  return (
    <>
      <Container maxWidth="xl" disableGutters className="px-6! mt-6!">
        <Stack className="hidden! md:block!">
          <CategorySlider />
        </Stack>
        <PackageHeroSection />
        <Stack className="hidden! md:block!">
          <CompanyCards />
        </Stack>
        <FavouritePackages />
        <Stack className="hidden! md:block!">
          <PackageChooseHero />
        </Stack>
        <Stack className="hidden! md:block!">
          <img src='/images/package/watchbanner.png' alt='package choose hero' className='w-full! h-full! object-cover! mt-20!' />
          <CommonQuestions />
          <CommentSlider />
          <MainBlog />
          <ExtraFooterInformation honerOfColobrate={false} />
        </Stack>

      </Container>
    </>
  )
}

export default Home
