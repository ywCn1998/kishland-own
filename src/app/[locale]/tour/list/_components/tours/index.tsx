import { BlitType } from "@/app/[locale]/entertainment/list/_components/blitType";
import FilterBox from "@/app/[locale]/entertainment/list/_components/filterBox";
import { PingoCard } from "@/app/[locale]/entertainment/list/_components/pingoCard";
import { WindowOutlined, Menu } from "@mui/icons-material";
import { Grid, IconButton, Stack } from "@mui/material";
import { TourCard } from "./toursCard";
import { MianBanner } from "@/components/shared/_components";
import FilterListIcon from "@mui/icons-material/FilterList";
import MainTabs from "@/components/shared/mainTabs";
import SortIcon from '@mui/icons-material/Sort';

export const sortTabsData = [
    { label: "5 ستاره" },
    { label: "4 ستاره" },
    { label: "3 ستاره", },
    { label: "2 ستاره", },
    { label: "1 ستاره", },
];

export default function ToursSection() {

    return (

        <Grid container className='mt-4' spacing={2}>

            <Grid size={{ md: 3 }} >
                <Stack className="border-1 border-slate-200  rounded-xl p-4">
                    <FilterBox />
                </Stack>

            </Grid>


            <Grid size={{ md: 9 }}>
                <Grid size={{ md: 12 }} spacing={3} container>
                    <Grid size={{ md: 10.5 }} >
                        <MainTabs
                            data={sortTabsData}
                            tabStyle={{
                                borderRadius: "999px",
                                px: 2,
                                py: 0.5,
                                minHeight: 36,
                            }}
                        />
                    </Grid>

                    <Grid size={{ md: 1.5 }} className='border-1 border-slate-200 rounded-2xl   h-16  '>
                        <Stack className="flex flex-row! h-full justify-center">
                            <IconButton>
                                <Menu color="primary" sx={{ fontSize: 32 }} />
                            </IconButton>

                            <IconButton>
                                <WindowOutlined sx={{ fontSize: 32 }} />
                            </IconButton>
                        </Stack>
                    </Grid>




                </Grid>



                <Grid size={{ md: 12 }} container spacing={2}>


                    <Grid size={{ md: 12 }} container
                        spacing={3}
                        className='rounded-3xl '
                    >
                        <TourCard />
                        <TourCard />
                        <TourCard />

                    </Grid>


                    <MianBanner />

                    <Grid size={{ md: 12 }} container
                        spacing={3}
                        className='rounded-3xl '
                    >
                        <TourCard />
                        <TourCard />
                        <TourCard />

                    </Grid>
                    <img
                        src={'/images/entertainment/list/banner.png'}
                        className="w-full! rounded-2xl "
                    />

                    <Grid size={{ md: 12 }} container
                        spacing={3}
                        className='rounded-3xl'
                    >
                        <TourCard />
                        <TourCard />
                        <TourCard />

                    </Grid>


                </Grid>
            </Grid>
        </Grid>
    )
}