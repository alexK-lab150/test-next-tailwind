export default function ImageSection() {
    return (
        <div className="absolute z-0 top-45 left-40 overflow-hidden max-[1300px]:relative max-[1300px]:mt-20 max-[1300px]:pt-60 max-[1300px]:flex max-[1300px]:justify-center max-[1300px]:transform max-[1300px]:-translate-x-1/2 max-[1300px]:-translate-y-1/2 max-[1300px]:left-1/2 max-[1300px]:top-1/2">
            <img
                src="https://icdn.lenta.ru/images/2016/03/09/19/20160309192541249/detail_5c55e55f36c50a7b7b5a9c70891ba623.jpg"
                alt="Special Image"
                className="w-full max-w-lg md:max-w-md lg:max-w-lg object-contain opacity-70 max-[1300px]:mx-auto"
            />
        </div>
    );
}
