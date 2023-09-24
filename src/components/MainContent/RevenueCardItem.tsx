interface RevenueCardItemProps {
    data: {
        subTitleText: string,
        revenue: string,
        subRevenue: string,
        titleText: string,
        icon: string,
        revenuePercentage: string
    }
}

export function RevenueCardItem({data}: RevenueCardItemProps) {
    return <div
        className="revenue-comp md:mx-3 mt-1 md:mt-0 flex flex-row w-full mx-auto md:justify-center items-center overflow-hidden">
        <img src={data.icon} alt="" className="h-14 md:h-20 ms-10 md:ms-0 me-1 md:me-3 relative"/>
        <div className="flex flex-col ms-3">
            <div className="title text-md md:text-lg text-gray-300">{data.titleText}</div>

            <div className="revenue-text flex mt-1 md:mt-3 items-center">
                <span className="text-white text-md md:text-xl font-medium md:font-bold">${data.revenue}</span>
                <span
                    className="bg-white ms-3 rounded-2xl text-[10px] md:text-sm p-0.5 md:p-1.5 text-violet-700">{data.revenuePercentage}%</span>
            </div>
            <div className="mt-1 md:mt-2">
                <span className="text-gray-300">{data.subTitleText}</span>
                <span className="ms-2 text-white font-bold">${data.subRevenue}</span>
            </div>
        </div>
    </div>;
}
