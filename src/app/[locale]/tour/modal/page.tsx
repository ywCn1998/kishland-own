"use client"
import { Stack, Container, Typography, Dialog, Button } from "@mui/material";
import {
    CommonQuestions,
} from "@/components/shared/_components";
import { TourCard } from "../list/_components/tours/toursCard";
import TicketTypeSection from "../list/_components/ticketType";
import CustomAccordion from "@/components/shared/collapse/collapse";
import { RoomCard } from "@/components/shared/cards/tour/roomCard";
import Question from "@/components/shared/_components/commonQuestions/_components/question";
import CityCenterLoactions from "./_locationModalComponents/cityCenterLocations";
import ViewsOfHotel from "../(landing)/_components/ViewsOfHotelSection";
import PeopleComments from "@/components/shared/_components/peopleComments";
import RulesOfHotel from "@/components/shared/_components/rolesOfHotel";
import { useState } from "react";
import { useRouter } from "next/navigation";


export default function LocationModal(
    // { params }: { params: { locale: string } }
) {
    // const { locale } = params;
    // setRequestLocale(locale);
    const router = useRouter()
    const [open, onClose] = useState(true)
    return (
        <>
            <Dialog
                fullWidth
                open={open}
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
                        pt: 8,
                        background: 'white'
                    },
                }}
                onClose={() => {
                    router.back()
                    onClose(false)
                }}
            >

                <Container maxWidth="xl" >
                    <Stack >
                        <TourCard isLocationModal={true} />

                        <Stack className="mt-20!" gap={5}>
                            <CustomAccordion title="بلیط شما">
                                <Stack sx={{ background: "#f5f7fa" }} className="py-4! rounded-2xl! mt-5">
                                    <TicketTypeSection isLocationModal={true} />
                                </Stack>
                            </CustomAccordion>

                            <CustomAccordion title={<Typography className="text-lg!" fontWeight={500}>لیست اتاق ها <span className="text-slate-500! text-sm!">(مبنای قیمت 1نفر/1شب می باشد)</span></Typography>}>
                                <Stack sx={{ background: "#f5f7fa" }} className="py-4! rounded-2xl! mt-5 px-4! gap-5!">
                                    <RoomCard isSelected={true} />
                                    <RoomCard />
                                    <RoomCard />
                                    <Button
                                        // onClick={() => onClick!(true)}
                                        sx={{ bgcolor: "bg.primary" }}
                                        variant="contained" className="text-white! rounded-xl! w-[300px]! self-end! mt-4!">
                                        <Typography className="text-lg! py-1! font-semibold!" variant="button">رزرو و ثبت اطلاعات</Typography>
                                    </Button>
                                </Stack>
                            </CustomAccordion>


                            <CustomAccordion title="فاصله هتل تا مکان های مهم کیش">
                                <CityCenterLoactions />
                            </CustomAccordion>

                            <CustomAccordion title="هتل کوروش را بهتر ببینید و بشناسید">
                                <Stack mt={2}>
                                    <ViewsOfHotel hasDetails={true} />
                                </Stack>
                            </CustomAccordion>

                            <CustomAccordion title="شرایط و ضوابط">
                                <RulesOfHotel />
                            </CustomAccordion>
                            <CustomAccordion title="سوالات متداول">
                                <Stack mt={3}>
                                    <CommonQuestions hasFooter={false} hasTItle={false} />
                                </Stack>
                            </CustomAccordion>
                            <Stack className="border-1! border-slate-200! p-3! rounded-2xl!">
                                <Question animation={false} />
                            </Stack>

                            <Stack mb={15}>
                                <PeopleComments />
                            </Stack>

                        </Stack>
                    </Stack>

                </Container>



                {/* <ExtraFooterInformation /> */}
            </Dialog >
        </>
    );
}
