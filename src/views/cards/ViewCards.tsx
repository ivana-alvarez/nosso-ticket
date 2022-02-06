// ==============================|| SAMPLE PAGE ||============================== //

import ProductCard from '../../components/cards/ProductCard'

const SamplePage = () => {
    return (
        <div className="flex flex-wrap">
            <div className="w-1/3 px-2">
                <ProductCard />
            </div>
            <div className="w-1/3 px-2">
                <ProductCard />
            </div>
            <div className="w-1/3 px-2">
                <ProductCard />
            </div>
        </div>
    )
}

export default SamplePage
