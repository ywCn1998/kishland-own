"use client";
import ImgTextGrid from "@/components/shared/_components/banner/ImageAndText";
import {
  Box,
  Button,
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
  Stack,
  Typography,
} from "@mui/material";
import { useState } from "react";

export default function EconomyPackageSection() {
  const [value, setValue] = useState(" 1 ");

  const handleChange = (event: SelectChangeEvent) => {
    setValue(event.target.value);
  };
  return (
    <>
      <Stack className="flex! flex-row! bg-[#F5F7FA]! mt-10! py-8! px-6! rounded-2xl! gap-5! justify-center items-center">
        <Button
          variant="contained"
          className="w-4/12! text-white! reveal-down"
          sx={{ bgcolor: "secondary.main" }}
        >
          پکیج اکونومی
        </Button>
        <Button
          variant="contained"
          className="w-4/12! reveal-down"
          sx={{ bgcolor: "white" }}
        >
          پکیج اقتصادی
        </Button>
        <Button
          variant="contained"
          className="w-4/12! reveal-down"
          sx={{ bgcolor: "white" }}
        >
          پکیج VIP
        </Button>
      </Stack>
      <Stack mt={10}>
        <ImgTextGrid
          imgHeight={500}
          imgUrl="/images/acconamy.png"
          imgGridSIze={6}
          childrenGridSIze={6}
          height={"auto"}
        >
          <Typography className="text-slate-400! text-lg! mb-4! reveal-down">
            مناسب برای سفرهای جمع‌وجور، بی‌دردسر و با امکانات کاربردی در کیش
          </Typography>
          <Typography className="text-5xl! font-bold! leading-[75px]! reveal-down">
            <span className="text-primary">پکیج‌های </span>
            <span className="text-secondary-500">اکونومی </span> کیش کیش
            تجربه‌ای جذاب با امکانات پایه و مقرون‌به‌صرفه
          </Typography>
          <Typography className="text-lg! mt-5! leading-[40px] reveal-down">
            پکیج‌های اکنومی مخصوص افرادی طراحی شده که به‌دنبال تجربه‌ای ساده،
            خودمانی و کاربردی از سفر به کیش هستند. اقامتگاه‌های راحت، امکانات
            پایه و تفریحات عمومی در محیطی دوستانه و مقرون‌به‌صرفه، بدون
            هزینه‌های اضافه. انتخابی هوشمندانه برای سفرهایی با برنامه‌ریزی سبک و
            انعطاف‌پذیر.
          </Typography>

          <Stack className="p-4! border-1! border-slate-200! rounded-lg! flex! flex-row! justify-between! items-center w-full! mt-4!">
            <div>
              <Typography className="text-2xl! font-semibold! mb-4! reveal-down">
                پکیج اکنومومی شامل 4 تفریح
              </Typography>
              <Typography className="reveal-down">
                <span
                  style={{ textDecoration: "line-through" }}
                  className="text-primary text-lg!"
                >
                  3,050,000{" "}
                </span>
                <span
                  style={{ textDecoration: "line-through" }}
                  className="text-slate-400"
                >
                  1 نفر
                </span>
                <span className="text-secondary text-3xl! font-semibold text-secondary-500">
                  {" "}
                  2,570,000 تومان
                </span>
              </Typography>
            </div>
            <FormControl
              className="reveal"
              sx={{
                minWidth: 170,
                "& .MuiOutlinedInput-root": {
                  py: 0.3,
                  backgroundColor: "#F5F7FA", // background
                  borderRadius: 1,
                  "& fieldset": {
                    borderColor: "#E1E6F0", // border color
                  },
                  "&:hover fieldset": {
                    borderColor: "#E1E6F0",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#E1E6F0",
                  },
                },
              }}
              size="small"
            >
              <Select
                value={value}
                onChange={handleChange}
                displayEmpty
                renderValue={(selected) => (
                  <Box
                    component="span"
                    sx={{ display: "flex", alignItems: "center", gap: 0.5 }}
                  >
                    <span>{selected}</span>
                    <span style={{ color: "#94a3b8" /* slate-400 */ }}>
                      نفر
                    </span>
                  </Box>
                )}
                MenuProps={{
                  PaperProps: {
                    sx: {
                      backgroundColor: "#ffffff", // dropdown background
                    },
                  },
                }}
              >
                <MenuItem value="1">
                  ۱ <span style={{ color: "#94a3b8" }}>نفر </span>
                </MenuItem>
                <MenuItem value="2">
                  ۲ <span style={{ color: "#94a3b8" }}>نفر</span>
                </MenuItem>
                <MenuItem value="3">
                  ۳ <span style={{ color: "#94a3b8" }}>نفر</span>
                </MenuItem>
                <MenuItem value="4">
                  ۴ <span style={{ color: "#94a3b8" }}>نفر</span>
                </MenuItem>
              </Select>
            </FormControl>
          </Stack>
          <Stack className="text-red bg-[#FA50501A] text-center! rounded-xl! py-2! border-[1px] border-text-red mt-4!">
            پکیج‌ها تک نفره می باشد و در صورت نیاز، می‌توان چندین پکیج برای
            افراد مختلف خریداری کرد.
          </Stack>
        </ImgTextGrid>
      </Stack>
    </>
  );
}
