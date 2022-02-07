// ==============================|| SAMPLE PAGE ||============================== //

import ProductCard from '../../components/cards/ProductCard'

const data = [
    {
        cardType: 1,
        name: 'Boleto Monedero TSC',
        description:
            'Este soporte incluye 10 viajes luego de lo cual, el usuario deberá realizar su recarga en las Boleterias habilitadas en las Estaciones del Sistema Ferroviario Ezequiel Zamora. El Titulo de Transporte deberá ser retirado en las Oficinas de Atención Nosso Ticket ubicadas en la Estación de Charallave Norte en horario Comercial...',
        price: 10,
        benefits: [
            {
                name: 'Recarga en MATT',
                active: true,
            },
            {
                name: 'Recarga en Boleteria',
                active: true,
            },
            {
                name: 'Recarga via Web',
                active: true,
            },
            {
                name: 'Consulta en Linea',
                active: true,
            },
            {
                name: 'Uso en Moviles',
                active: false,
            },
            {
                name: 'Duplicable',
                active: false,
            },
        ],
    },
    {
        cardType: 1,
        name: 'Boleto Monedero TSC',
        description:
            'Este soporte incluye 10 viajes luego de lo cual, el usuario deberá realizar su recarga en las Boleterias habilitadas en las Estaciones del Sistema Ferroviario Ezequiel Zamora. El Titulo de Transporte deberá ser retirado en las Oficinas de Atención Nosso Ticket ubicadas en la Estación de Charallave Norte en horario Comercial...',
        price: 10,
        benefits: [
            {
                name: 'Recarga en MATT',
                active: true,
            },
            {
                name: 'Recarga en Boleteria',
                active: false,
            },
            {
                name: 'Recarga via Web',
                active: true,
            },
            {
                name: 'Consulta en Linea',
                active: true,
            },
            {
                name: 'Uso en Moviles',
                active: false,
            },
            {
                name: 'Duplicable',
                active: false,
            },
        ],
    },
    {
        cardType: 1,
        name: 'Boleto Monedero TSC',
        description:
            'Este soporte incluye 10 viajes luego de lo cual, el usuario deberá realizar su recarga en las Boleterias habilitadas en las Estaciones del Sistema Ferroviario Ezequiel Zamora. El Titulo de Transporte deberá ser retirado en las Oficinas de Atención Nosso Ticket ubicadas en la Estación de Charallave Norte en horario Comercial...',
        price: 10,
        benefits: [
            {
                name: 'Recarga en MATT',
                active: false,
            },
            {
                name: 'Recarga en Boleteria',
                active: false,
            },
            {
                name: 'Recarga via Web',
                active: true,
            },
            {
                name: 'Consulta en Linea',
                active: true,
            },
            {
                name: 'Uso en Moviles',
                active: true,
            },
            {
                name: 'Duplicable',
                active: true,
            },
        ],
    },
]

const SamplePage = () => {
    return (
        <div className="flex flex-wrap">
            {data.map((d) => (
                <div className="w-full md:w-1/2 xl:w-1/3 px-2">
                    <ProductCard {...d} />
                </div>
            ))}
        </div>
    )
}

export default SamplePage
