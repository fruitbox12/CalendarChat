import { Spinner } from '@chakra-ui/react'

interface Props { 
    show?: boolean
}

export const Loader = ({ show=true }: Props) => {
    return (
        show? <Spinner /> : null
    )
}