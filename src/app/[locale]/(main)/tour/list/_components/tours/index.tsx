import { BlitType } from "@/app/[locale]/(main)/entertainment/list/_components/blitType";
import FilterBox from "@/app/[locale]/(main)/entertainment/list/_components/filterBox";
import { PingoCard } from "@/app/[locale]/(main)/entertainment/list/_components/pingoCard";
import { WindowOutlined, Menu } from "@mui/icons-material";
import { Grid, IconButton, Stack } from "@mui/material";
import { TourCard } from "./toursCard";
import MainTabs from "@/components/shared/mainTabs";
import SortIcon from '@mui/icons-material/Sort';
import SmallTourCard from "./toursCardResponsive";
import ChanceCard from "@/app/[locale]/(main)/entertainment/list/_components/chanceCard";
import FilterContainer from "@/app/[locale]/(main)/entertainment/list/_components/filterBox/_components/filterContainer";
import MainBanner from "@/components/shared/ui/banner/mainBanner";

export const sortTabsData = [
    { label: "5 ستاره" },
    { label: "4 ستاره" },
    { label: "2 ستاره و کمتر", },
    { label: "صبحانه", },
    { label: "هاف برد", },
];

export default function ToursSection() {
    const cards = [1, 2, 3]; // or your data array

    return (
        <Grid container className='md:mt-4' spacing={2}>
            <Grid
                size={{ md: 3 }}
                className="md:block! flex! flex-row! gap-2! md:p-0! px-5!"
            >
                <Grid className="md:hidden! w-9/12! md:w-auto!">
                    <BlitType />
                </Grid>
                <Grid className="md:border-1 border-slate-200  rounded-xl md:p-4 w-3/12! md:w-auto!">
                    <FilterContainer />
                </Grid>
            </Grid>

            <Grid size={{ xs: 12, md: 9 }} >
                <Grid size={{ md: 12 }} spacing={3} container className="hidden! md:flex!">
                    <Grid size={{ md: 12 }} >
                        <MainTabs
                            data={sortTabsData}
                            tabStyle={{
                                borderRadius: "999px",
                                px: 2,
                                py: 0.5,
                                minHeight: 36,
                            }}
                            sortByPrice
                        />
                    </Grid>

                    {/* <Grid size={{ md: 1.5 }} className='border-1 border-slate-200 rounded-2xl   h-16  '>
                        <Stack className="flex flex-row! h-full justify-center">
                            <IconButton>
                                <Menu color="primary" sx={{ fontSize: 32 }} />
                            </IconButton>

                            <IconButton>
                                <WindowOutlined sx={{ fontSize: 32 }} />
                            </IconButton>
                        </Stack>
                    </Grid> */}

                </Grid>



                <Grid size={{ md: 12 }} container spacing={2} sx={{
                    px: { xs: 2, md: 0 }, // xs=0, others keep normal spacing
                }}>


                    <Grid size={{ md: 12 }} container
                        spacing={3}
                        className='rounded-3xl hidden! md:flex!'
                    >
                        <TourCard />
                        <TourCard />
                        <TourCard />
                    </Grid>
                    <Grid size={{ md: 12 }} container
                        spacing={3}
                        className='rounded-3xl md:hidden!'>
                        <SmallTourCard />
                        <SmallTourCard />
                        <SmallTourCard />
                    </Grid>


                    <MainBanner href="/fa/tour/list" />

                    <Grid size={{ md: 12 }} container
                        spacing={3}
                        className='rounded-3xl hidden! md:flex!'
                    >
                        <TourCard />
                        <TourCard />
                        <TourCard />
                    </Grid>

                    <Grid size={{ md: 12 }} container
                        spacing={3}
                        className='rounded-3xl md:hidden!'                    >
                        <SmallTourCard />
                        <SmallTourCard />
                        <SmallTourCard />
                    </Grid>

                    <Stack className="md:hidden! w-full!">
                        <ChanceCard
                            // className="flex! flex-col!"
                            isToursSection
                            btnClassName="p-2! px-4! text-sm! w-fit! rounded-xl!"
                            title={`دو تا تفریح بخر یکی جایزه ببر !!`}
                            title_font='16px'
                            btn_title='بزن بریم'
                            img='/images/entertainment/list/beach.png'
                        // onClick={() => console.log('dsaf')}
                        />
                    </Stack>

                    <img
                        src={'/images/entertainment/list/banner.png'}
                        className="w-full! rounded-2xl hidden! md:inline!"
                    />
                    <img
                        src={'/images/entertainment/list/banner-mobile.png'}
                        className="w-full! rounded-2xl md:hidden!"
                    />
                    <Grid size={{ md: 12 }} container
                        spacing={3}
                        className='rounded-3xl hidden! md:flex!'
                    >
                        <TourCard />
                        <TourCard />
                        <TourCard />
                    </Grid>
                    <Grid size={{ md: 12 }} mb={5} container
                        spacing={3}
                        className='rounded-3xl md:hidden!'>
                        <SmallTourCard />
                        <SmallTourCard />
                        <SmallTourCard />
                    </Grid>



                </Grid>
            </Grid>
        </Grid>
    )
}
