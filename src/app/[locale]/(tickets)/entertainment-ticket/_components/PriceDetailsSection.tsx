import { Stack, Typography } from "@mui/material";

export default function priceDetailsSection({ info }: { info: any }) {
    return (
        <Stack className="border-1! border-slate-200! rounded-2xl! p-6!">
            <Typography className="md:text-2xl! text-xl! font-semibold!">جزئیات هزینه </Typography>
            <Stack className="flex! md:flex-row! justify-between! md:items-center! mt-6! gap-4!">
                <Stack className="flex! md:flex-col! justify-between! md:justify-start! flex-row! gap-4!">
                    <Typography color="text.secondary" className="md:text-base! text-sm! font-medium!">قیمت پایه</Typography>
                    {/* seprate price from each other 3 by 3 */}
                    <Typography className="md:text-xl! text-lg! font-medium!">{info.pricing.basePrice.toLocaleString("fa-IR") || "-"} تومان</Typography>
                </Stack>

                <Stack className="flex! md:flex-col! justify-between! md:justify-start! flex-row! gap-4!">
                    <Typography color="text.secondary" className="md:text-base! text-sm! font-medium!">تخفیف</Typography>
                    {/* seprate price from each other 3 by 3 */}
                    <Typography className="md:text-xl! text-lg! font-medium!" color="text.secondary">{info.pricing.discount.toLocaleString("fa-IR") || "-"} تومان</Typography>
                </Stack>


                <Stack className="flex! md:flex-col! justify-between! md:justify-start! flex-row! gap-4!">
                    <Typography color="text.secondary" className="md:text-base! text-sm! font-medium!">مجموع پرداختی</Typography>
                    {/* seprate price from each other 3 by 3 */}
                    <Typography className="md:text-xl! text-lg! font-semibold!">{info.pricing.totalPaid.toLocaleString("fa-IR") || "-"} تومان</Typography>
                </Stack>
            </Stack>
        </Stack>
    )
}