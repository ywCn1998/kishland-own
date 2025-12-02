import { BreadCrumbFa } from '@/components/shared/breadCrumb/breadCrumbFa'
import { Container } from '@mui/material'
import React from 'react'
import CompareBanner from './_components/compareBanner'
import DataGrid from './_components/dataGrid'
import { ExtraFooterInformation } from '@/components/shared/_components'

export default function Home() {
    return (
        <>
            <Container maxWidth="xl" disableGutters className='px-6!'>
                <BreadCrumbFa />
                <CompareBanner/>
                <DataGrid/>
                <ExtraFooterInformation companies={false} honerOfColobrate={false} />
            </Container>



        </>
    )
}
