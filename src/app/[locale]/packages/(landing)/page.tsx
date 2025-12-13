import { CategorySlider, CommentSlider, CommonQuestions, ExtraFooterInformation, MainBlog } from '@/components/shared/_components'
import { Container } from '@mui/material'
import React from 'react'
import PackageHeroSection from './_components/packageHeroSection'
import CompanyCards from './_components/companyCards'
import PackageChooseHero from './_components/packageChooseHero'
import FavouritePackages from './_components/favouritePackages'

function Home() {
  return (
    <>
     <Container maxWidth="xl" disableGutters className="px-6! mt-6!"> 
        <CategorySlider/>
        <PackageHeroSection/>
        <CompanyCards/>
        <FavouritePackages/>
        {/* <PackageList/> */}
        <PackageChooseHero/>
        <img src='/images/package/watchbanner.png' alt='package choose hero' className='w-full! h-full! object-cover! mt-20!'/>
        <CommonQuestions/>
        <CommentSlider/>
        <MainBlog />
        <ExtraFooterInformation honerOfColobrate={false} />
     </Container>
    </>
  )
}

export default Home