import { Stack, Container, Typography, Button } from "@mui/material";
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
import ChooseRoomCardResponsive from "../list/_components/tours/chooseRoomCardResponsive";
import SmallListCard from "@/components/shared/cards/hotel/smallListCard";
import SmallRoomCard from "@/components/shared/cards/tour/roomCardResponsive";
import BedroomParentIcon from '@mui/icons-material/BedroomParentOutlined';
import WifiOutlinedIcon from '@mui/icons-material/WifiOutlined';


export default function LocationHotel() {
    const options = [
        {
            label: "صبحانه",
            icon: <BedroomParentIcon />
        },
        {
            label: "دسترسی به اینترنت",
            icon: <WifiOutlinedIcon />
        }
    ]
    return (
        <>
            <Container maxWidth="xl">
                <Stack >
                    <Stack className="hidden! md:inline!">
                        <TourCard isLocationModal={true} />
                    </Stack>
                    <Stack className="md:hidden!">
                        <ChooseRoomCardResponsive />
                    </Stack>

                    <Stack className="mt-20!" gap={5}>
                        <Stack className="hidden! md:block!">
                            <CustomAccordion title="بلیط شما">
                                <Stack sx={{ background: "#f5f7fa" }} className="py-4! rounded-2xl! mt-5">
                                    <TicketTypeSection isLocationModal={true} />
                                </Stack>
                            </CustomAccordion>
                        </Stack>

                        <CustomAccordion title={<Typography className="text-lg!" fontWeight={500}>لیست اتاق ها <span className="text-slate-500! text-sm!">(مبنای قیمت 1نفر/1شب می باشد)</span></Typography>}>
                            <Stack sx={{ background: "#f5f7fa" }} className="py-4! rounded-2xl! mt-5 px-4! gap-5! hidden! md:block!">
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
                            <Stack className="md:hidden!" spacing={2}>
                                <SmallRoomCard rate={"4.9"} title="اتاق استاندارد با یک تخت دو نفره با دید رو به دریا" price={"8,500,000"} options={options} />
                                <SmallRoomCard rate={"4.9"} title="اتاق استاندارد با یک تخت دو نفره با دید رو به دریا" price={"8,500,000"} options={options} />
                                <SmallRoomCard rate={"4.9"} title="اتاق استاندارد با یک تخت دو نفره با دید رو به دریا" price={"8,500,000"} options={options} />
                                <SmallRoomCard rate={"4.9"} title="اتاق استاندارد با یک تخت دو نفره با دید رو به دریا" price={"8,500,000"} options={options} />
                                <SmallRoomCard rate={"4.9"} title="اتاق استاندارد با یک تخت دو نفره با دید رو به دریا" price={"8,500,000"} options={options} />
                            </Stack>
                        </CustomAccordion>


                        <CustomAccordion title="فاصله هتل تا مکان های مهم کیش">
                            <CityCenterLoactions />
                        </CustomAccordion>

                        <CustomAccordion title="هتل کوروش را بهتر ببینید و بشناسید">
                            <Stack mt={2} className="hidden! md:block!">
                                <ViewsOfHotel hasDetails={true} />
                            </Stack>
                            <Stack mt={2} className="md:hidden!">
                                <ViewsOfHotel isHotelLocation isIntegrated hasDetails={true} />
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
                        <Stack className="border-1! border-slate-200! p-3! rounded-2xl! hidden! md:block!">
                            <Question animation={false} />
                        </Stack>

                        <Stack mb={15}>
                            <PeopleComments />
                        </Stack>

                    </Stack>
                </Stack>

            </Container>



            {/* <ExtraFooterInformation /> */}
        </>
    );
}
