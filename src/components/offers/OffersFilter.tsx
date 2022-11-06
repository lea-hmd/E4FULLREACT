import React from 'react'
import {
    Card,
    Theme,
    OutlinedInput,
    InputAdornment,
    FormControl,
} from '@mui/material'
import { SectionTitle } from '../common/custom/CustomTitles'
import { Search } from '@mui/icons-material'

type OffersFilterProps = {
    theme: Theme
    searchValue: string
    // eslint-disable-next-line no-unused-vars
    handleSearchValueChange: (event: React.BaseSyntheticEvent) => void
}

export default function OffersFilter({
    theme,
    searchValue,
    handleSearchValueChange,
}: OffersFilterProps) {
    return (
        <>
            <SectionTitle title="Rechercher une annonce" />
            <Card
                sx={{
                    backgroundColor: theme.palette.secondary.dark,
                    width: '100%',
                    padding: 3,
                }}
            >
                <FormControl sx={{ m: 1, width: '40%' }} variant="outlined">
                    <OutlinedInput
                        value={searchValue}
                        onChange={handleSearchValueChange}
                        placeholder="Rechercher"
                        endAdornment={
                            <InputAdornment position="end">
                                <Search />
                            </InputAdornment>
                        }
                        aria-describedby="outlined-weight-helper-text"
                        inputProps={{
                            'aria-label': 'weight',
                        }}
                    />
                </FormControl>
            </Card>
        </>
    )
}
