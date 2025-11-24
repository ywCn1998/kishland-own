import { Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { OfferBanner } from "@/components/shared/_components";
import ReusableSwiper from "@/components/shared/reusableSwiper";

const certificates = [
    {
        image: "/images/general/about-us/certificate1.png",
        title: "مجوزهای رسمی",
    },
    {
        image: "/images/general/about-us/certificate2.png",
        title: "مجوزهای رسمی",
    },
    {
        image: "/images/general/about-us/certificate1.png",
        title: "مجوزهای رسمی",
    },
    {
        image: "/images/general/about-us/certificate2.png",
        title: "مجوزهای رسمی",
    },
    {
        image: "/images/general/about-us/certificate1.png",
        title: "مجوزهای رسمی",
    },
    {
        image: "/images/general/about-us/certificate2.png",
        title: "مجوزهای رسمی",
    },
    {
        image: "/images/general/about-us/certificate1.png",
        title: "مجوزهای رسمی",
    },
    {
        image: "/images/general/about-us/certificate2.png",
        title: "مجوزهای رسمی",
    },
];

function Certificate({ image, title }: { image: string, title: string }) {
    return (
        <Stack className="flex-col! gap-2! items-center! justify-center! bg-white! rounded-2xl! p-4">
            <Typography className="text-center! font-semibold! text-lg! mb-1! reveal-down">{title}</Typography>
            <Stack className="relative! h-46! w-46! reveal">
                <Image src={image} alt="certificate" fill className="object-contain!" />
            </Stack>
        </Stack>
    );
}

export default function HonorsSection() {
    return (
        <Stack className="mt-10! md:mt-16! bg-[#F0F7FF]! rounded-3xl! ">
            <OfferBanner
                caption="دارای مجوزهای رسمی و افتخارات متعدد در صنعت گردشگری کیش."
                responsiveCaption="دارای مجوزهای رسمی و افتخارات متعدد در صنعت گردشگری کیش."
                title="افتخارات و مجوز ها"
                buttonText="مشاهده همه مجوز ها"
                href="/fa/general/about-us/contact-us"
                classNameButton="hidden! md:block!"
                className="px-4!"
                isFullWidth={false}
            />
            <Grid container rowSpacing={3} columnSpacing={2} className="p-6! hidden! md:flex!">
                {certificates.map((certificate, index) => (
                    <Grid key={`${certificate.image}-${index}`} size={{ xs: 12, md: 3 }}>
                        <Certificate image={certificate.image} title={certificate.title} />
                    </Grid>
                ))}
            </Grid>

            <Stack
                className="xs-fullwidth! md:hidden! pr-3! mb-4!"
            >
                <ReusableSwiper slidePerviewLg={0} slidePerViewXs={1.2} slideperviewMd={2} spaceBetween={20} pagination={true} dots={false} autoplay={true}>
                    {certificates.map((certificate, index) => (
                        <Certificate key={`${certificate.image}-${index}`} image={certificate.image} title={certificate.title} />
                    ))}
                </ReusableSwiper>
            </Stack>
        </Stack>
    );
}

