import React from 'react'
import {
    Card,
    Theme,
    OutlinedInput,
    InputAdornment,
    FormControl,
    FormControlLabel,
    FormLabel,
    FormGroup,
    Checkbox,
    Grid,
    Button,
} from '@mui/material'
import { SectionTitle } from '../common/custom/CustomTitles'
import { Search } from '@mui/icons-material'

import { RequestType } from '../../shared/types/RequestType'
import RequestMethod from '../../api/RequestMethod'
import { Category } from '../../shared/types/Category'

type OffersFilterProps = {
    theme: Theme
    searchValue: string
    // eslint-disable-next-line no-unused-vars
    handleSearchValueChange: (event: React.BaseSyntheticEvent) => void
    // eslint-disable-next-line no-unused-vars
    handleCategoryChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

type CheckboxType = {
    category: string
    label: string
}

export default function OffersFilter({
    theme,
    searchValue,
    handleSearchValueChange,
    handleCategoryChange,
}: OffersFilterProps) {
    const [categories, setCategories] = React.useState<Category[]>([])
    const [checkboxCategories, setCheckboxCategories] = React.useState<
        CheckboxType[]
    >([])
    const [toggleCategories, setToggleCategories] = React.useState(false)
    const [getCheckboxes, setGetCheckboxes] = React.useState(false)

    const requestParams: RequestType = {
        endpoint: '/offers-categories',
        method: 'GET',
    }

    async function getCategories() {
        try {
            await RequestMethod(requestParams)
                .then((response) => response.json())
                .then((data) => setCategories(data))
        } catch (error: any) {
            // eslint-disable-next-line no-console
            console.log(error)
        }
    }

    React.useEffect(() => {
        getCategories()
        if (getCheckboxes)
            setCheckboxCategories(
                categories.map(({ machine_name, label }) => ({
                    category: machine_name,
                    label,
                    checked: false,
                }))
            )
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [getCheckboxes])

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
                <Grid container justifyContent="center" m={1}>
                    <Grid item md={6}>
                        <OutlinedInput
                            fullWidth
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
                            sx={{ justifyContent: 'center' }}
                        />
                        <Button
                            onClick={() => {
                                setToggleCategories(!toggleCategories)
                                setGetCheckboxes(!getCheckboxes)
                            }}
                            sx={{
                                my: 2,
                                color: theme.palette.primary.main,
                                fontWeight: 'bold',
                            }}
                        >
                            + de filtres
                        </Button>
                    </Grid>

                    {toggleCategories && (
                        <Grid container justifyContent="center">
                            <FormControl
                                component="fieldset"
                                variant="standard"
                            >
                                <Grid item xs={12}>
                                    <FormLabel component="legend">
                                        Choisir une ou plusieurs catégorie(s)
                                    </FormLabel>
                                    <FormGroup row>
                                        {checkboxCategories.map(
                                            ({ label, category }, index) => (
                                                <FormControlLabel
                                                    key={index}
                                                    control={
                                                        <Checkbox
                                                            onChange={
                                                                handleCategoryChange
                                                            }
                                                            value={category}
                                                        />
                                                    }
                                                    label={label}
                                                />
                                            )
                                        )}
                                    </FormGroup>
                                </Grid>
                            </FormControl>
                        </Grid>
                    )}
                </Grid>
            </Card>
        </>
    )
}
