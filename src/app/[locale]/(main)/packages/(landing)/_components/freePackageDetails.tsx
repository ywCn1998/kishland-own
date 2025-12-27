"use client"
import { OfferBanner } from '@/components/shared/ui'
import { Button, Container, Grid, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import RemoveOutlinedIcon from "@mui/icons-material/RemoveOutlined";
import PackageCard from './packageCard'
import CartCards from '@/app/[locale]/(main)/entertainment/reserve/_components/cart/yourCart/CartCards'

export default function FreePackageDetails() {
  const [count, setCount] = useState(1);

  const handlePlus = () => {
    setCount((prev) => prev + 1);
  };

  const handleMinus = () => {
    setCount((prev) => (prev > 1 ? prev - 1 : 1));
  };
  return (
    <Stack className="lg:!bg-[#F0F7FF] !bg-[#F5F7FA] lg:rounded-3xl! reveal xs-fullwidth !hidden lg:!flex" >
      <Container maxWidth="xl" >
        <OfferBanner
        copyBtn ={true}
          caption="مناسب برای سفرهای جمع‌وجور، بی‌دردسر و با امکانات کاربردی در کیش"
          title="امکانات پکیج اقتصادی"
          buttonText="دریافت مشاوره"
          className="lg:!bg-[#F0F7FF] !bg-[#F5F7FA]"
        />
      </Container>
      <Stack sx={{ p: 4, pt: 0 }}  >
        <Stack className='flex! flex-row! flex-wrap! items-center! gap-6! w-full!'>
          <PackageCard />
          <PackageCard />
          <PackageCard />
          <PackageCard />
        </Stack>
        <Grid container spacing={4} className="mt-6! flex! flex-row! items-center! ">
          <Grid size={6} className="flex! flex-col! gap-3! ">
            <Stack className='bg-white! border-1! border-slate-200! p-4!  rounded-xl! flex! flex-row! justify-between! items-center! '>
              {/* <CartCards /> */}
              <Stack className='flex! flex-col! items-start! justify-between! gap-4!'>
                <Typography className='font-semibold! text-lg!'>
                پکیج اکونومی شامل 4 تفریح
                </Typography>   
                <Stack className='flex! flex-row! gap-1! items-center! '> 
                  <Typography className='text-sm! ' color='primary'>
                  3,050,000
                  </Typography>
                  <Typography className='text-sm! text-slate-500!'>
                  1 نفر/
                  </Typography>
                  <Typography className='text-xl! font-bold!' color='secondary'>
                  2,570,000 تومان
                  </Typography>
                </Stack>
              </Stack>
              <Stack>
                <Grid
                  display={{ xs: "none", lg: "flex" }}
                  alignItems={"center"}
                  gap={2}
                >
                  <Button
                    variant="contained"
                    color="inherit"
                    onClick={handlePlus}
                    sx={{
                      bgcolor: "#F5F7FA",
                      minWidth: 40,
                      minHeight: 40,
                      height: 32,
                      padding: "4px 8px",
                      fontWeight: 500,
                      borderRadius: 1,
                      border: "solid 1px #E1E6F0",
                      textTransform: "none",
                    }}
                  >
                    <AddOutlinedIcon />
                  </Button>
                  <Typography variant="body2" fontWeight={500}>
                    {count}
                  </Typography>
                  <Button
                    variant="contained"
                    color="inherit"
                    sx={{
                      bgcolor: "#F5F7FA",
                      minWidth: 40,
                      minHeight: 40,
                      height: 32,
                      padding: "4px 8px",
                      fontWeight: 500,
                      borderRadius: 1,
                      border: "solid 1px #E1E6F0",
                      textTransform: "none",
                    }}
                    onClick={handleMinus}
                    disabled={count === 1}
                  >
                    <RemoveOutlinedIcon />
                  </Button>
                </Grid>
                <Stack
                  sx={{
                    display: { xs: "flex", lg: "none" },
                    flexDirection: "row",
                    bgcolor: "#F5F7FA",
                    gap: 2,
                    p: 1,
                    borderRadius: 1,
                    alignItems: "center",
                  }}
                >
                  <Grid onClick={handlePlus} sx={{ cursor: "pointer" }}>
                    <AddOutlinedIcon fontSize="small" />
                  </Grid>
                  <Grid>
                    <Typography variant="body2" fontWeight={500}>
                      {count}
                    </Typography>
                  </Grid>
                  <Grid onClick={handleMinus} sx={{ cursor: "pointer" }}>
                    <RemoveOutlinedIcon fontSize="small" />
                  </Grid>
                </Stack>
              </Stack>
              

            </Stack>
           <Typography className='p-2! text-red-500! bg-red-100! border-1! border-red-500! rounded-lg! text-sm! px-4!'>
           پکیج‌ها تک نفره می باشد و در صورت نیاز، می‌توان چندین پکیج برای افراد مختلف خریداری کرد.
           </Typography>
          </Grid>

          <Grid className='flex! flex-col! gap-4! ' size={6}>
            <Button variant='contained' color='primary' className='text-white! text-lg! py-5!'>
              رزرو پکیج
            </Button>
            <Button variant='contained' color='secondary' className='text-white! text-lg! py-5!'>
              افزودن به سبد و ادامه خرید
            </Button> 
          </Grid>
        </Grid>
      </Stack>
    </Stack>
  )
}
