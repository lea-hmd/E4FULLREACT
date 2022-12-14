import {
    Apartment,
    Devices,
    CameraOutdoor,
    Bed,
    Checkroom,
    GridView,
    ShoppingCartCheckout,
} from '@mui/icons-material'

type CategoryIconProps = {
    machine_name: string
    iconSize: 'small' | 'inherit' | 'large' | 'medium' | undefined
}

export function categoryIcon({ machine_name, iconSize }: CategoryIconProps) {
    switch (machine_name) {
        case 'REAL_ESTATE':
            return <Apartment color="primary" fontSize={iconSize} />
        case 'IT':
            return <Devices color="primary" fontSize={iconSize} />
        case 'AUTOMATION':
            return <CameraOutdoor color="primary" fontSize={iconSize} />
        case 'HOME_FURNISHINGS':
            return <Bed color="primary" fontSize={iconSize} />
        case 'OTHER_FURNITURE':
            return <ShoppingCartCheckout color="primary" fontSize={iconSize} />
        case 'CLOTHES':
            return <Checkroom color="primary" fontSize={iconSize} />
        default:
            return <GridView color="primary" fontSize={iconSize} />
    }
}

export function categoryName(machine_name: string) {
    switch (machine_name) {
        case 'REAL_ESTATE':
            return 'Immobilier'
        case 'IT':
            return 'High-tech'
        case 'AUTOMATION':
            return 'Domotique'
        case 'HOME_FURNISHINGS':
            return 'Mobilier de maison'
        case 'OTHER_FURNITURE':
            return 'Autres mobiliers'
        case 'CLOTHES':
            return 'VĂȘtements'
        default:
            return 'Autres'
    }
}
