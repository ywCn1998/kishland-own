import { Stack, Container, Typography, Dialog, Grid } from "@mui/material";
import { setRequestLocale } from "next-intl/server";
import { useTranslations } from "next-intl";
import TitlePlusBack from "@/components/shared/titlePlusBack";
import TicketCard from "@/components/shared/cards/tour/ticketCard";
import FilterBox from "@/app/[locale]/(main)/entertainment/list/_components/filterBox";
import MainTabs from "@/components/shared/mainTabs";
import SortIcon from '@mui/icons-material/Sort';


const tabsData = [
    {
        label: "مرتب سازی",
        icon: <SortIcon className="ml-1!" fontSize="small" />,
        disabled: true
    },
    {
        label: "کمترین قیمت",
    },
    {
        label: "بیشترین قیمت",
    },
    {
        label: "پیشنهادی کیش لندیار",
    },
    {
        label: "محبوب ترین",
    },
];
export default function ChangeTicket() {

    return (
        <Dialog
            fullWidth
            open={true}
            maxWidth={false} // disables default maxWidth
            sx={{
                padding: 0,
                margin: 0,
                '& .MuiDialog-paper': {
                    width: '100%',
                    height: '93%',
                    maxHeight: '93%',
                    margin: 0,
                    borderRadius: 0,
                    maxWidth: '100%',
                    alignSelf: 'flex-end',
                    borderTopLeftRadius: '24px',
                    borderTopRightRadius: '24px',
                    pt: 5,
                    background: 'white'
                },
            }}
        // onClose={() => onClose(false)}
        >

            <Container maxWidth="xl" >
                <TitlePlusBack title="تغییر بلیط رفت و برگشت" />
                <Stack className="w-full! flex! flex-row! w-full! gap-5 ">
                    <TicketCard isFade={true} ticketType="انتخاب بلیط رفت جدید" />
                    <TicketCard isFade={true} ticketStatus="canBuyTicket" ticketType="انتخاب بلیط برگشت جدید" />
                </Stack>

                <Grid container spacing={2} mt={6}>

                    <Grid size={{ md: 3 }} >
                        <Stack className="border-1 border-slate-200  rounded-xl p-4">
                            <FilterBox />
                        </Stack>

                    </Grid>


                    <Grid size={{ md: 9 }}>
                        <MainTabs data={tabsData} />
                        <Stack gap={4}>
                            <TicketCard ticketStatus="hasBought"/>
                            <TicketCard ticketStatus="hasBought"/>
                            <TicketCard ticketStatus="hasBought"/>
                            <TicketCard ticketStatus="hasBought"/>
                            <TicketCard ticketStatus="hasBought"/>
                            <TicketCard ticketStatus="hasBought"/>
                        </Stack>
                    </Grid>
                </Grid>
            </Container>



            {/* <ExtraFooterInformation /> */}
        </Dialog >
    );
}
