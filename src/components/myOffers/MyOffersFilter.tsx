import React from 'react'
import { useTheme } from '@mui/material/styles'
import {
    OutlinedInput,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    InputLabel,
    FormControl,
    InputAdornment,
    TextField,
    Grid,
    Select,
    MenuItem,
} from '@mui/material'
import { OfferBody } from '../../shared/types/OfferBody'
import { RequestType } from '../../shared/types/RequestType'
import request from '../../api/Request'

export default function MyOffersFilter() {
    const theme = useTheme()
    const [open, setOpen] = React.useState(false)
    const [title, setTitle] = React.useState('')
    const [description, setDescription] = React.useState('')
    const [price, setPrice] = React.useState(0)
    const [status, setStatus] = React.useState(1)
    const [category, setCategory] = React.useState('')
    const [image, setImage] = React.useState<File | null>(null)
    const [categories, setCategories] = React.useState([])

    const handleClickOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]) {
            setImage(event.target.files[0])
        }
    }

    const body: OfferBody = {
        title,
        description,
        price,
        status_id: status,
        machine_name: category,
        productPicture: image,
    }

    const requestParams: RequestType = {
        endpoint: '/admin_offer',
        method: 'POST',
        body,
        customHeaders: {
            Authorization: 'Bearer ',
        },
    }

    const categoriesParams: RequestType = {
        endpoint: '/offers-categories',
        method: 'GET',
    }

    async function getCategories() {
        try {
            await request(categoriesParams)
                .then((response) => response.json())
                .then((data) => setCategories(data))
        } catch (error: any) {
            // eslint-disable-next-line no-console
            console.log(error)
        }
    }

    React.useEffect(() => {
        getCategories()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const handleOfferCreationSubmit = async () => {
        // eslint-disable-next-line no-console
        console.log(body)
        const response = await request(requestParams).then(handleClose)
        // eslint-disable-next-line no-console
        console.log(response)
    }

    return (
        <div>
            <Button variant="contained" onClick={handleClickOpen}>
                Créer une annonce
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
                PaperProps={{
                    style: {
                        backgroundColor: theme.palette.secondary.dark,
                    },
                }}
            >
                <DialogTitle sx={{ fontWeight: 'bold' }}>
                    Création d'une annonce
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        <Grid
                            container
                            justifyContent="center"
                            alignItems="center"
                            spacing={2}
                            mb={1}
                        >
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                    label="Titre"
                                    variant="outlined"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    multiline
                                    fullWidth
                                    value={description}
                                    onChange={(e) =>
                                        setDescription(e.target.value)
                                    }
                                    label="Description"
                                    variant="outlined"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <FormControl fullWidth required>
                                    <InputLabel htmlFor="price" required>
                                        Prix
                                    </InputLabel>
                                    <OutlinedInput
                                        id="price"
                                        required
                                        fullWidth
                                        type="number"
                                        value={price}
                                        onChange={(e) =>
                                            setPrice(parseInt(e.target.value))
                                        }
                                        startAdornment={
                                            <InputAdornment
                                                position="start"
                                                component={'p'}
                                            >
                                                €
                                            </InputAdornment>
                                        }
                                        label="Prix"
                                    />
                                </FormControl>
                            </Grid>
                            <Grid item xs={12}>
                                <FormControl fullWidth required>
                                    <InputLabel id="category" required>
                                        Catégorie
                                    </InputLabel>
                                    <Select
                                        labelId="category"
                                        required
                                        value={category}
                                        label="Catégorie"
                                        MenuProps={{
                                            PaperProps: {
                                                style: {
                                                    backgroundColor:
                                                        theme.palette.secondary
                                                            .dark,
                                                },
                                            },
                                        }}
                                        onChange={(e) =>
                                            setCategory(e.target.value)
                                        }
                                    >
                                        {categories.map(
                                            (
                                                { machine_name, label },
                                                index
                                            ) => (
                                                <MenuItem
                                                    key={index}
                                                    value={machine_name}
                                                >
                                                    {label}
                                                </MenuItem>
                                            )
                                        )}
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12}>
                                <FormControl fullWidth required>
                                    <InputLabel id="status" required>
                                        Statut
                                    </InputLabel>
                                    <Select
                                        labelId="status"
                                        required
                                        value={status}
                                        label="Statut"
                                        MenuProps={{
                                            PaperProps: {
                                                style: {
                                                    backgroundColor:
                                                        theme.palette.secondary
                                                            .dark,
                                                },
                                            },
                                        }}
                                        onChange={(e) =>
                                            setStatus(Number(e.target.value))
                                        }
                                    >
                                        <MenuItem value={1}>Brouillon</MenuItem>
                                        <MenuItem value={2}>Publié</MenuItem>
                                        <MenuItem value={3}>Supprimé</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12}>
                                {/* TODO: Léa - Input file avec bouton et preview */}

                                <Button variant="contained" component="label">
                                    Télécharger une photo
                                    <input
                                        hidden
                                        accept="image/*"
                                        type="file"
                                        onChange={handleImageChange}
                                    />
                                </Button>
                            </Grid>
                        </Grid>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    {/* TODO: Léa - reset input content when clicked */}
                    <Button onClick={handleClose}>Retour</Button>
                    {/* TODO: Léa - Send data to request only if all inputs are specified (disabled button) */}
                    <Button
                        variant="contained"
                        onClick={handleOfferCreationSubmit}
                        autoFocus
                    >
                        Créer
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}
