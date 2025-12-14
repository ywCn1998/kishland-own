"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Breadcrumbs, Button, Stack, Typography } from "@mui/material";
import { KeyboardBackspaceOutlined } from "@mui/icons-material";
import { routeTranslations } from "./routTranslations";

export function BreadCrumbFa() {
    const pathname = usePathname();
    const paths = pathname
        .split("/")
        .filter((x) => x && x.toLowerCase() !== "fa");

    const items = ["صفحه اصلی ", ...paths];

    return (
        <Stack className="flex! flex-row-reverse! items-center! justify-between! w-full!">
            <Button endIcon={<KeyboardBackspaceOutlined />} sx={{ color: "secondary.main" }} className="" variant="text">برگشت</Button>
            <Breadcrumbs aria-label="breadcrumb" sx={{ direction: "ltr" }} className="">
                {items.map((segment, index) => {
                    const href = "/" + "fa/" + paths.slice(0, index).join("/");
                    const label = routeTranslations[segment] || segment;
                    const isLast = index === items.length - 1;

                    return isLast ? (
                        <Typography key={href} color="text.primary">
                            {label}
                        </Typography>
                    ) : (
                        <span key={href} style={{ display: "flex", alignItems: "center" }}>
                            <Link href={href} className="text-gray-500 hover:text-black">
                                {label}
                            </Link>
                        </span>
                    );
                })}
            </Breadcrumbs>
        </Stack>
    );
}
