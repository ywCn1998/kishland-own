import { Stack, Typography } from "@mui/material";

export default function priceDetailsSection({ info }: { info: any }) {
    return (
        <Stack className="border-1! border-slate-200! rounded-2xl! md:p-6! p-4!">
            <Typography className="md:text-2xl! text-xl! font-semibold!">جزئیات هزینه </Typography>
            <Stack className="flex! md:flex-row! flex-col! justify-between! items-center! mt-6! gap-4! md:gap-0!">
                <Stack className="flex! md:flex-col! flex-row! items-center! md:items-start! justify-between! md:justify-start! w-full! md:w-auto! gap-4!">
                    <Typography color="text.secondary" className="md:text-base! text-sm! font-medium!">قیمت پایه</Typography>
                    {/* seprate price from each other 3 by 3 */}
                    <Typography className="md:text-xl! text-lg! font-medium!">{info.pricing.basePrice.toLocaleString("fa-IR") || "-"} تومان</Typography>
                </Stack>

                <Stack className="flex! md:flex-col! flex-row! items-center! md:items-start! justify-between! md:justify-start! w-full! md:w-auto! gap-4!">
                    <Typography color="text.secondary" className="md:text-base! text-sm! font-medium!">مالیات هتل</Typography>
                    {/* seprate price from each other 3 by 3 */}
                    <Typography className="md:text-xl! text-lg! font-medium!" color="text.secondary">{info.pricing.hotelTax.toLocaleString("fa-IR") || "-"} تومان</Typography>
                </Stack>

                <Stack className="flex! md:flex-col! flex-row! items-center! md:items-start! justify-between! md:justify-start! w-full! md:w-auto! gap-4!">
                    <Typography color="text.secondary" className="md:text-base! text-sm! font-medium!">تخفیف</Typography>
                    {/* seprate price from each other 3 by 3 */}
                    <Typography className="md:text-xl! text-lg! font-medium!" color="text.secondary">{info.pricing.discount.toLocaleString("fa-IR") || "-"} تومان</Typography>
                </Stack>


                <Stack className="flex! md:flex-col! flex-row! items-center! md:items-start! justify-between! md:justify-start! w-full! md:w-auto! gap-4!">
                    <Typography color="text.secondary" className="md:text-base! text-sm! font-medium!">مجموع پرداختی</Typography>
                    {/* seprate price from each other 3 by 3 */}
                    <Typography className="md:text-xl! text-lg! font-semibold!">{info.pricing.totalPaid.toLocaleString("fa-IR") || "-"} تومان</Typography>
                </Stack>
            </Stack>
        </Stack>
    )
}