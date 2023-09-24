import {Bar, BarChart, ResponsiveContainer, XAxis, YAxis} from "recharts";

export const AnalyticsChart = () => {
    const ChartData = [
        {
            name: '1-10 Aug',
            total: 20,
            fill: "#d3cffc"
        },
        {
            name: '11-20 Aug',
            total: 35,
            fill: "#6e62e5"
        },
        {
            name: '11-20 Aug',
            total: 25,
            fill: "#d3cffc"
        },
        {
            name: '11-20 Aug',
            total: 60,
            fill: "#6e62e5"
        },
        {
            name: '21-30 Aug',
            total: 15,
            fill: "#d3cffc"
        },
        {
            name: '11-20 Aug',
            total: 30,
            fill: "#6e62e5"
        },
    ];
    return (
        <ResponsiveContainer className="min-h-[100px] max-w-full w-[100px] h-[100px]"
                             width={'100%'}>
            <BarChart width={100} height={200} data={ChartData}
                      style={{height: '180px', maxWidth: '300px'}}>
                <XAxis dataKey="name" axisLine={false} tickLine={false} interval={1}/>
                <YAxis axisLine={false} tickLine={false} interval={1}/>
                <Bar dataKey="total" fill="#d3cffc" radius={[10, 10, 10, 10]}/>
            </BarChart>
        </ResponsiveContainer>
    );
};
