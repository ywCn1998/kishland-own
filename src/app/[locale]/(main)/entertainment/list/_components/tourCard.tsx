import { Search } from "@mui/icons-material";
import { Button, Divider, Stack, Typography } from "@mui/material";




export function TourCard() {


    return (
        <Stack
            alignItems={"center"}
            className="flex flex-col border-1 border-slate-200 rounded-lg py-8 p-3 mb-10! bg-[#F5F7FA]! reveal"
        >

            <Typography variant="h3" fontWeight={'500'}>تور مشهد به کیش</Typography>

            <Divider className="w-full " sx={{ backgroundColor: '#E1E6F0', my: 4 }} />

            <Stack
                display={'flex'}
                flexDirection={'row'}
                alignItems={'center'}
                justifyContent={'center'}
                className="gap-34 relative mt-2 w-full" >

                <Stack>
                    <Typography>بلیط پرواز رفت و برگشت</Typography>
                </Stack>

                <Stack>
                    <Typography>از چهارشنبه 14 خرداد تا سه شنبه 20 خرداد 1404 ( 6 شب و 7 روز )</Typography>
                </Stack>

                <Stack>
                    <Typography>با صبحانه و خدمات</Typography>
                </Stack>

                <Button
                    variant="contained"
                    // className="absolute right-0 top-0"
                    sx={{
                        position: 'absolute',
                        right: 0,
                        width: '56px',
                        height: '54px'
                    }}
                >
                    <Search className="text-white" sx={{ fontSize: '30px' }} />
                </Button>


            </Stack>



        </Stack>
    )
}
