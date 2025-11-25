"use client";

import { Box, Grid, Stack, Typography, Divider, IconButton, Button } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { useState } from "react";
import RHFTextInput from "@/components/shared/form/RHFTextInput";
import { useForm } from "react-hook-form";
import FormProvider from "@/providers/FormProvider";
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import RHFTextarea from "@/components/shared/form/RHFTextarea";
import RHFUploadButton from "@/components/shared/form/RHFChooseFile";
import TextIcon from "@/components/shared/textIcon";
import FolderOpenOutlinedIcon from '@mui/icons-material/FolderOpenOutlined';

const contactItems = [
  {
    id: 1,
    type: "email",
    title: "آدرس ایمیل",
    content: "info@kishlandyar.com",
    icon: ContentCopyIcon,
    hasCopy: false,
  },
  {
    id: 2,
    type: "phone",
    title: "تلفن تماس با مدیریت رزرواسیون سایت",
    content: "۰۹۱۵۳۲۵۹۴۵۸ - آقای قیاسی",
    icon: ContentCopyIcon,
    hasCopy: false,
  },
  {
    id: 3,
    type: "office",
    title: "آدرس دفتر کیش",
    address: "میدان امیرکبیر، مجتمع خانه گستر، واحد ۱۰ (آژانس آسان گشت کیش)",
    phone: "۰۷۶ - ۴۴۴۴۴۴۹۹",
    icon: ContentCopyIcon,
    hasLocation: true,
  },
  {
    id: 4,
    type: "office",
    title: "آدرس دفتر مشهد",
    address: "نبش راهنمایی ۸ - ساختمان ممتاز",
    phone: "۰۵۱-۳۸۰۹۶",
    icon: ContentCopyIcon,
    hasLocation: true,
  },
  {
    id: 5,
    type: "office",
    title: "آدرس دفتر تهران",
    address: "نیاوران خیابان امیدوار نبش سبزی",
    phone: "۰۲۱ - ۴۳۰۰۰۰۲۰",
    icon: ContentCopyIcon,
    hasLocation: true,
  },
];

export default function ContactUsFormSection() {
  const methods = useForm();
  const onSubmit = (data: any) => {
    console.log(data);
  };
  return (
    <Box>
      <Grid container spacing={{ xs: 2, md: 4 }}>
        <Grid size={{ xs: 12, md: 7 }}>
          <FormProvider methods={methods} >
            <Grid container spacing={2} className="border-1! border-slate-200! rounded-2xl! md:p-6! p-4!">
              <Typography fontWeight={500} className="text-2xl! text-slate-900! w-full! mb-2!">ارتباط با ما</Typography>

              <Grid size={{ xs: 12, md: 6 }}>
                <RHFTextInput name="firstName" startIcon={<PersonOutlineOutlinedIcon />} placeholder="نام خانوادگی" />
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <RHFTextInput name="lastName" startIcon={<PersonOutlineOutlinedIcon />} placeholder="تلفن یا ادرس ایمیل" />
              </Grid>
              <Grid size={{ xs: 12 }}>
                <RHFTextInput name="lastName" startIcon={<PersonOutlineOutlinedIcon />} placeholder="عنوان پیام (اختیاری)" />
              </Grid>

              <Grid size={{ xs: 12 }}>
                <RHFTextInput multiline rows={6} name="message" label="متن پیام شما" />
              </Grid>

              <Grid size={{ xs: 12 }}>
                <Stack spacing={{xs: 2, md: 0}} className="flex! md:flex-row! flex-col! md:justify-between! justify-center! items-center! p-5! border-1! border-slate-400! rounded-2xl! border-dashed!">
                  <Stack spacing={{xs: 2, md: 1}} className="justify-center! items-center! md:justify-start! md:items-start!">
                    <TextIcon sx={{ fontWeight: 500 }} className="text-black! text-base! md:text-lg!" text="افزودن فایل (اختیاری)" startIcon={<FolderOpenOutlinedIcon sx={{ color: "text.secondary" }} />} />
                    <Typography className="text-sm! md:text-base! text-slate-500!">فایل را به ینجا بکشید و رها کنیدو یا </Typography>
                  </Stack>
                  <RHFUploadButton name="file" sx={{ py:1}} />
                </Stack>
              </Grid>

              <Grid size={{ xs: 12, md: 6 }} className="flex! justify-end!">
                <Button className="w-full! text-lg! text-white! rounded-2xl!" variant="contained" type="submit">ارسال پیام</Button>
              </Grid>
            </Grid>
          </FormProvider>
        </Grid>


        <Grid size={{ xs: 12, md: 5 }}>
          <Stack className="bg-[#E7F2FF]! rounded-2xl! overflow-hidden!">
            {contactItems.map((item, index) => (
              <ContactItem key={item.id} item={item} isLast={index === contactItems.length - 1} />
            ))}
          </Stack>
        </Grid>
      </Grid >
    </Box >
  );
}
// --------------------------------------------------------------


function ContactItem({ item, isLast }: { item: typeof contactItems[0]; isLast: boolean }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async (textToCopy: string) => {
    try {
      await navigator.clipboard.writeText(textToCopy);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  const getCopyText = () => {
    if (item.type === "office") {
      return `${item.address}\n${item.phone}`;
    }
    return item.content || "";
  };

  return (
    <>
      <Stack
        direction="row"
        className="py-6! items-center! justify-between! flex-row-reverse! px-4!"
        sx={{ px: { xs: 2, md: 0 } }}
      >
        {/* Icons Container */}
        <Stack className=" gap-3! flex! flex-col! items-center! justify-center!">
          {/* Main Icon */}

          <IconButton
            onClick={() => handleCopy(getCopyText())}
            className="bg-white! border-1! border-slate-200! rounded-2xl! p-2!"
            sx={{
              minWidth: { xs: 40, md: 58 },
              height: { xs: 40, md: 48 },
              "&:hover": {
                bgcolor: "#f8fafc",
              },
            }}
          >
            <ContentCopyIcon
              sx={{
                color: copied ? "#10b981" : "#64748b",
                fontSize: { xs: 20, md: 24 },
                transition: "color 0.2s",
              }}
            />
          </IconButton>

          {/* Copy Icon - only show if hasCopy is true */}
          {item.hasLocation && (
            <IconButton
              className="bg-white! border-1! border-slate-200! rounded-2xl! p-2!"
              sx={{
                minWidth: { xs: 40, md: 58 },
                height: { xs: 40, md: 48 },
                "&:hover": {
                  bgcolor: "#f8fafc",
                },
              }}
            >
              <LocationOnOutlinedIcon
                sx={{
                  color: "error.main",
                  fontSize: { xs: 20, md: 24 },
                  transition: "color 0.2s",
                }}
              />
            </IconButton>
          )}
        </Stack>

        {/* Content */}
        <Stack className="gap-3! items-start! justify-start!">
          {/* Title with arrow */}
          <Stack direction="row" spacing={1} className="items-center!">
            <PlayArrowIcon
              sx={{
                color: "#088DEF",
                fontSize: 20,
                transform: "rotate(180deg)",
              }}
            />
            <Typography className="font-bold! text-base! md:text-lg! text-slate-900!">
              {item.title}
            </Typography>
          </Stack>

          {/* Content */}
          {item.type === "office" ? (
            <Stack className="mr-7! gap-3!">
              <Typography className="text-sm! md:text-base! text-slate-900! leading-6!">
                {item.address}
              </Typography>
              <Stack direction="row" spacing={1} className="items-center!">
                <PhoneIcon sx={{ fontSize: 16, color: "#1e293b" }} />
                <Typography className="text-sm! md:text-base! text-slate-900!">
                  {item.phone}
                </Typography>
              </Stack>
            </Stack>
          ) : (
            <Typography className="text-sm! md:text-base! text-slate-900! mr-7!">
              {item.content}
            </Typography>
          )}
        </Stack>
      </Stack>
      {!isLast && <Divider variant="middle" className="bg-secondary-500!" sx={{ backgroundColor: "#B8DFFF" }} />}
    </>
  );
}
