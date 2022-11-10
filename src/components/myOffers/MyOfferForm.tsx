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
import { RequestType } from '../../shared/types/RequestType'
import RequestMethod from '../../api/RequestMethod'
import { useAuth } from '../../context/AuthContext'

type MyOfferFormProps = {
    editOffer: any
    isEditing: boolean
    open: boolean
    handleClose: () => void
}

export default function MyOfferForm({
    editOffer,
    handleClose,
    open,
    isEditing,
}: MyOfferFormProps) {
    const { state } = useAuth()
    const token = state.token

    const theme = useTheme()
    const [title, setTitle] = React.useState(isEditing ? editOffer.title : '')
    const [description, setDescription] = React.useState(
        isEditing ? editOffer.description : ''
    )
    const [price, setPrice] = React.useState(isEditing ? editOffer.price : 0)
    const [status, setStatus] = React.useState(1)
    const [category, setCategory] = React.useState(
        isEditing ? editOffer.category : ''
    )
    const [image, setImage] = React.useState<File | null>(null)
    const [categories, setCategories] = React.useState([])

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]) {
            setImage(event.target.files[0])
        }
    }

    const handleRemoveImage = () => {
        setImage(null)
    }

    const categoriesParams: RequestType = {
        endpoint: '/offers-categories',
        method: 'GET',
    }

    async function getCategories() {
        try {
            await RequestMethod(categoriesParams)
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
        const body = new FormData()

        body.append('title', title)
        body.append('description', description)
        body.append('price', price.toString())
        body.append('status', status.toString())
        body.append('category', category)
        if (image) {
            body.append('productPicture', image)
        }

        const requestParams: RequestType = {
            endpoint: isEditing
                ? '/admin_offer/' + editOffer.id
                : '/admin_offer',
            method: isEditing ? 'PUT' : 'POST',
            body,
            token,
            formData: true,
        }
        await RequestMethod(requestParams).then(() => {
            window.location.reload()
            handleClose()
        })
    }

    return (
        <div>
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
                    {isEditing ? 'Modifier une annonce' : 'Créer une annonce'}
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
                                            setPrice(Number(e.target.value))
                                        }
                                        startAdornment={
                                            <InputAdornment position="start">
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
                            <Grid
                                item
                                xs={12}
                                container
                                justifyContent="center"
                                alignItems="center"
                                m={1}
                                p={2}
                            >
                                {!image && (
                                    <Grid
                                        item
                                        md={6}
                                        container
                                        justifyContent="center"
                                        alignItems="center"
                                    >
                                        <Button
                                            variant="contained"
                                            component="label"
                                        >
                                            Télécharger une photo
                                            <input
                                                hidden
                                                accept="image/*"
                                                type="file"
                                                onChange={handleImageChange}
                                            />
                                        </Button>
                                    </Grid>
                                )}
                                {image && (
                                    <Grid
                                        item
                                        md={6}
                                        container
                                        justifyContent="center"
                                        alignItems="center"
                                    >
                                        <img
                                            src={URL.createObjectURL(image)}
                                            width="80%"
                                            alt="Aperçu du fichier téléchargé"
                                        />
                                        <Button
                                            sx={{
                                                m: 2,
                                            }}
                                            size="small"
                                            variant="contained"
                                            onClick={handleRemoveImage}
                                        >
                                            Supprimer l'image
                                        </Button>
                                    </Grid>
                                )}
                            </Grid>
                        </Grid>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    {/* TODO: Léa - reset input content when clicked */}
                    <Button onClick={handleClose}>Retour</Button>
                    {/* TODO: Léa - Send data to Request only if all inputs are specified (disabled button) */}
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
