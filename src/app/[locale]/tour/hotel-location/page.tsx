import { Stack, Container, Typography, Button } from "@mui/material";
import {
    CommonQuestions,
} from "@/components/shared/ui";
import { TourCard } from "../list/_components/tours/toursCard";
import TicketTypeSection from "../list/_components/ticketType";
import CustomAccordion from "@/components/shared/collapse/collapse";
import { RoomCard } from "@/components/shared/cards/tour/roomCard";
import Question from "@/components/shared/ui/commonQuestions/_components/question";
import CityCenterLoactions from "./_components/cityCenterLocations";
import ViewsOfHotel from "../(landing)/_components/ViewsOfHotelSection";
import PeopleComments from "@/components/shared/ui/peopleComments";
import RulesOfHotel from "@/components/shared/ui/rules";
import ChooseRoomCardResponsive from "../list/_components/tours/chooseRoomCardResponsive";
import SmallListCard from "@/components/shared/cards/hotel/smallListCard";
import SmallRoomCard from "@/components/shared/cards/tour/roomCardResponsive";
import BedroomParentIcon from '@mui/icons-material/BedroomParentOutlined';
import WifiOutlinedIcon from '@mui/icons-material/WifiOutlined';
import FixedBottomButton from "@/components/shared/fixedBottomBotton/fixedBottomBotton";
import Image from "next/image";
import Link from "next/link";
import ReserveButtonWithModal from "@/components/shared/modal/reserveModal/reserveModal";


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
            <Container maxWidth="xl" sx={{ mt: 2 }}>
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
                            <Stack sx={{ background: "#f5f7fa" }} className="py-4! rounded-2xl! mt-5 px-4! gap-5! hidden! md:block!" spacing={2}>
                                <RoomCard isSelected={true} />
                                <RoomCard />
                                <RoomCard />
                                <Button
                                    // onClick={() => onClick!(true)}
                                    sx={{ bgcolor: "bg.primary" }}
                                    variant="contained" className="text-white! rounded-xl! w-[300px]! self-end!">
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

                <FixedBottomButton className="flex! flex-col!">
                    <Stack className="flex! flex-row! items-center! justify-between! w-full!" mb={2}>
                        <div className="flex! flex-row! items-center! gap-2!">
                            <div className={`w-7! h-7! relative`}>
                                <Image src="/images/phone-message.png" alt="s" fill />
                            </div>
                            <Typography color="text.secondary" className="text-sm!">ارتباط با پشتیبانی</Typography>
                        </div>
                        <Typography component={Link} href={"#"} color="secondary" className="text-base!" fontWeight={500}>03939848392</Typography>
                    </Stack>
                    {/* <Button className="text-white! w-full" variant="contained">رزرو و ثبت اطلاعات</Button> */}
                    <ReserveButtonWithModal room={2} />
                </FixedBottomButton>

            </Container>



            {/* <ExtraFooterInformation /> */}
        </>
    );
}
