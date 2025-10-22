import ReusableSwiper from "@/components/shared/reusableSwiper";
import TextNumber from "@/components/shared/textNumber";
import { Typography, Stack, Container, Divider } from "@mui/material";

export default function ChooseTicketSection({ data }: { data: any[] }) {
    const perView = 7;

    // numeric values ONLY for comparison (display stays as given)
    const nums = data.map((it) => Number(it.price));
    const minVal = Math.min(...nums);
    const maxVal = Math.max(...nums);

    return (
        <Container maxWidth="xl">
            <Stack className="w-full! flex! flex-row! items-center! justify-between! mb-5!">
                <TextNumber number={3} text="انتخاب تور" />
                <Typography className="text-sm! text-slate-400!">
                    ارزان‌ترین قیمت تور های 4 روزه قبل و بعد از تاریخ جستجوی شما
                </Typography>
            </Stack>

            <Stack className="border-1! border-slate-200! rounded-2xl! py-5!">
                <ReusableSwiper
                    pagination={true}
                    dots={false}
                    navigation={true}
                    slidePerviewLg={perView}
                    style={{ width: "90%" }}
                >
                    {data.map((item, i) => {
                        const val = Number(item.price);
                        const isMin = val === minVal;
                        const isMax = val === maxVal;
                        const color = isMin ? "success" : isMax ? "error" : "inherit";

                        return (
                            <Stack
                                key={i}
                                direction="row"
                                className="flex! flex-row! items-center! justify-center! relative!"
                            >
                                <Stack className="mx-auto! p-1! flex! flex-col! items-center! justify-center! pl-5!">
                                    <Typography className="text-gray-500! text-sm! mb-1!">
                                        {item.date}
                                    </Typography>

                                    <Typography className="text-base!" color={color}>
                                        {item.price}
                                    </Typography>
                                    <Typography className="text-base!" color={color}>
                                        میلیون تومان
                                    </Typography>
                                </Stack>

                                {i !== data.length - 1 && (
                                    <Divider
                                        orientation="vertical"
                                        flexItem
                                        className="!bg-slate-200! mx-3!"
                                    />
                                )}
                            </Stack>
                        );
                    })}
                </ReusableSwiper>
            </Stack>
        </Container>
    );
}
