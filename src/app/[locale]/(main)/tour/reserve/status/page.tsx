"use client"
import React from "react";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import PagesIcon from "@mui/icons-material/Pages";
import ReserveStatus from "@/components/shared/sections/reserve/ReserveStatus";

const steps = [
  {
    title: "انتخاب تور",
    description: "توضیح این مرحله",
    iconPast: <CheckBoxIcon fontSize="small" sx={{ color: "#FF8C0B" }} />,
    iconActive: (
      <CheckBoxOutlineBlankIcon fontSize="small" sx={{ color: "#FF8C0B" }} />
    ),
    iconFuture: <PagesIcon fontSize="small" sx={{ color: "#E1E6F0" }} />,
  },
  {
    title: "اطلاعات مسافران",
    description: "مشاهده تفریحات",
    iconPast: <CheckBoxIcon fontSize="small" sx={{ color: "#FF8C0B" }} />,
    iconActive: (
      <CheckBoxOutlineBlankIcon fontSize="small" sx={{ color: "#FF8C0B" }} />
    ),
    iconFuture: <PagesIcon fontSize="small" sx={{ color: "#E1E6F0" }} />,
  },
  {
    title: "بازبینی اطلاعات",
    description: "توضیح این مرحله",
    iconPast: <CheckBoxIcon fontSize="small" sx={{ color: "#FF8C0B" }} />,
    iconActive: (
      <CheckBoxOutlineBlankIcon fontSize="small" sx={{ color: "#FF8C0B" }} />
    ),
    iconFuture: <PagesIcon fontSize="small" sx={{ color: "#E1E6F0" }} />,
  },
  {
    title: "پرداخت آنلاین",
    description: "درگاه پرداخت کلیه کارت‌های شتاب",
    iconPast: <CheckBoxIcon fontSize="small" sx={{ color: "#FF8C0B" }} />,
    iconActive: (
      <CheckBoxOutlineBlankIcon fontSize="small" sx={{ color: "#FF8C0B" }} />
    ),
    iconFuture: <PagesIcon fontSize="small" sx={{ color: "#E1E6F0" }} />,
  },
  {
    title: "صدور بلیط",
    description: "خوش بگذره :)",
    iconPast: <CheckBoxIcon fontSize="small" sx={{ color: "#FF8C0B" }} />,
    iconActive: (
      <CheckBoxOutlineBlankIcon fontSize="small" sx={{ color: "#FF8C0B" }} />
    ),
    iconFuture: <PagesIcon fontSize="small" sx={{ color: "#E1E6F0" }} />,
  },
];


export default function Page({
  params,
  searchParams,
}: any) {
  return <ReserveStatus isSuccess={true} code={554574} />;
}
