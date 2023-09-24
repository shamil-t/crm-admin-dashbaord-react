import {Avatar, Badge, Button, Col, ConfigProvider, Divider, Dropdown, MenuProps, Row, Table} from "antd";
import user_icon from '../../assets/3d_avatar_3.webp'
import user_icon_3 from '../../assets/3d_avatar_3.webp'
import icon_r1 from '../../assets/icon_r_1.webp'
import icon_r2 from '../../assets/icon_r_2.webp'
import icon_r3 from '../../assets/icon_r_3.webp'
import user_icon_2 from '../../assets/3d_avatar_2.webp'
import user_icon_4 from '../../assets/3d_avatar_4.webp'
import user_icon_5 from '../../assets/3d_avatar_5.webp'
import user_icon_6 from '../../assets/3d_avatar_6.webp'
import user_icon_7 from '../../assets/3d_avatar_7.webp'


import {ChevronUpIcon} from "@heroicons/react/24/solid";
import {ArrowRightIcon, CalendarIcon, ChevronDownIcon} from "@heroicons/react/24/outline";
import {Bar, BarChart, ResponsiveContainer, XAxis, YAxis} from "recharts";
import {ItemType} from "antd/es/menu/hooks/useItems";
import React from "react";
import {ColumnsType} from "antd/es/table";

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

function RevenueCardItem({data}: RevenueCardItemProps) {
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

interface DropDownComponentProps {
    data: { title: string }
    items: ItemType[]
    onClick: (e: Event) => void
    icon: boolean
}

interface TransactionTableType {
    key: React.Key;
    Customer: CustomerType,
    Status: string;
    Date: string;
    Invoice: string;
    People: string[];
}

interface CustomerType {
    name: string,
    email: string,
    icon: string
}


function DropDownComponent(props: DropDownComponentProps) {
    return <Dropdown menu={{items: props.items}} trigger={["click"]}>
        <a className="bg-white border rounded-xl flex flex-row items-center px-2 md:px-5 h-10"
           onClick={() => props.onClick}>
 <span
     className="font-normal text-xs md:text-sm md:font-[400] font-[Poppins] overflow-ellipsis truncate flex flex-row items-center">
     {props.icon ? <CalendarIcon className="h-4 md:h-5 me-1 md:me-3"/> : null}
     {props.data.title}</span>
            <ChevronDownIcon className="ps-4 h-4"/>
        </a>
    </Dropdown>;
}

function DropDownComponentGrey(props: DropDownComponentProps) {
    return <Dropdown menu={{items: props.items}} trigger={["click"]}>
        <a className="bg-gray-200 rounded-xl flex flex-row items-center px-3 md:px-5 h-8 md:h-10"
           onClick={() => props.onClick}>
 <span
     className="font-normal text-xs md:text-sm md:font-[400] font-[Poppins] overflow-ellipsis truncate flex flex-row items-center">
     {props.icon ? <CalendarIcon className="h-5 me-3"/> : null}
     {props.data.title}</span>
            <ChevronDownIcon className="ps-2 md:ps-4 h-4"/>
        </a>
    </Dropdown>;
}

export const MainContentLayout = () => {
    const items: MenuProps['items'] = [
        {
            label: 'year',
            key: '0',
        },
        {
            label: 'week',
            key: '1',
        }
    ];
    const RevenueCardItemData = [{
        icon: icon_r1,
        titleText: 'Monthly Revenue',
        revenuePercentage: '+2.4',
        revenue: '3.500',
        subTitleText: 'Previous Month',
        subRevenue: '1.7k'
    }, {
        icon: icon_r2,
        titleText: 'Monthly Sales',
        revenuePercentage: '+1.4',
        revenue: '6.750',
        subTitleText: 'Previous Month',
        subRevenue: '3.1k'
    }, {
        icon: icon_r3,
        titleText: 'Monthly Sales',
        revenuePercentage: '+1.4',
        revenue: '10.900',
        subTitleText: 'Previous year',
        subRevenue: '8.9k'
    }];
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

    const TransactionDropDownData = [{title: 'Recipient'}, {title: 'Amount'}, {title: 'Status'}]

    const TransactionTableColumns: ColumnsType<TransactionTableType> = [{
        title: 'Customer',
        dataIndex: 'Customer',
        key: 'Customer',
        render: (data: CustomerType) => (<div className="flex flex-row justify-start items-center">
            <Badge count={'⭐'} offset={[-5, 42]} color="#000" className="font-[Poppins]">
                < Avatar shape="circle" size={{xs: 40, sm: 40, md: 40, lg: 64, xl: 64, xxl: 64}} src={data.icon}
                         className="h-5 md:h-16 rounded-full"/>
            </Badge>
            {/*<img src={data.icon} alt="user image"/>*/}
            <div className="flex flex-col ms-2 md:ms-5">
                <div className="text-lg text-black">{data.name}</div>
                <span className="text-xs md:text-sm text-gray-400">{data.email}</span>
            </div>

        </div>)
    }, {
        title: 'Status',
        dataIndex: 'Status',
        key: 'Status',
        render: (data: string) => (<div
            className="bg-white border rounded-2xl border-gray-300 h-8 flex flex-row items-center justify-around w-fit px-2">
            <Badge color={data === 'Success' ? 'green' : 'orange'} size={"default"}/>
            <span className="ms-3 font-[500]">{data}</span>
        </div>)
    }, {
        title: 'Date',
        dataIndex: 'Date',
        responsive: ['md'],
        key: 'Date', render: (data) => <div className="font-[500]">{data}</div>
    }, {
        title: 'Invoice',
        dataIndex: 'Invoice',
        responsive: ['xl'],
        key: 'Invoice', render: (data) => <div className="font-[500]">{data}</div>
    }, {
        title: 'People',
        dataIndex: 'People',
        responsive: ['xl'],
        key: 'People', render: (data: string[]) => <div className="font-[500]">
            <ConfigProvider theme={{components: {Avatar: {groupOverlapping: -12,}}}}>
                <Avatar.Group maxCount={data.length > 3 ? 2 : 3} maxStyle={{color: '#fff', backgroundColor: '#000'}}>
                    {data.map((u, i) => <Avatar key={i} src={u}/>)}
                </Avatar.Group>
            </ConfigProvider>
        </div>
    }]

    const transactionTableData: TransactionTableType[] = [{
        key: '1',
        Customer: {name: 'Floyd Chitosan', email: 'jhontosan@gmail.com', icon: user_icon},
        Status: 'Success',
        Date: 'Nov 02, 2021',
        Invoice: '$100,00',
        People: [user_icon, user_icon_2, user_icon_3, user_icon_4, user_icon_5, user_icon_6, user_icon_7, user_icon]
    }, {
        key: '2',
        Customer: {name: 'Floyd Chitosan', email: 'jhontosan@gmail.com', icon: user_icon_2},
        Status: 'Pending',
        Date: 'Nov 02, 2021',
        Invoice: '$100,00',
        People: [user_icon_7, user_icon_4, user_icon_6]

    }];

    const users = [user_icon_2, user_icon_3, user_icon_4, user_icon_7, user_icon_4,
        user_icon_2, user_icon_3, user_icon, user_icon_4, user_icon_5, user_icon_6, user_icon_7, user_icon]
    return (
        <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-8/12">
                {/**/}
                <div className="bg-white w-full h-[100%] p-5 flex flex-col justify-start items-center">
                    <div
                        className="revenue-card bg-[#6e62e5] py-3 md:py-6 md:p-3 min-h-[150px] my-auto rounded-2xl w-full
                         flex justify-between items-center">
                        <Row align="middle" className="w-full" justify="space-between" gutter={[8, 8]}>
                            {RevenueCardItemData.map((item, i) => (
                                <Col flex={1} key={i}>
                                    <RevenueCardItem data={item}/>
                                </Col>
                            ))}
                        </Row>
                    </div>
                    {/**/}
                    <div
                        className="analytics-card overflow-hidden bg-white border border-gray-300 min-h-[150px] h-fit w-full mt-5 rounded-2xl">
                        <Row className="h-full" align="middle">
                            <Col flex={2} className="h-fit xl:h-full md:h-fit">
                                <div className="flex flex-col justify-between w-full h-full ps-5 py-4">
                                    <div className="w-full">
                                        <div className="title text-lg md:text-3xl font-[500]">Total Sales & Cost</div>
                                        <div className="sub-title text-xs md:text-xl text-gray-400">Last 60 days</div>
                                    </div>
                                    <div className="flex flex-col items-start justify-end w-full">
                                        <div className="w-full flex flex-row items-center">
                                        <span
                                            className="total-revenue text-[#6e62e5] font-bold text-lg md:text-5xl me-2">$956.82k
                                        </span>
                                            <span
                                                className="text-green-500 bg-green-200 py-1 px-1 md:px-2 font-normal md:font-[500] rounded-2xl text-xs md:text-sm flex flex-row w-fit items-center h-fit">
                                                <ChevronUpIcon className="h-3 md:h-4 text-green-600 me-1"/>+5.4%</span>
                                        </div>
                                        <div className="md:mt-2">
                                            <span className="text-md md:text-lg text-green-500 ">+8.20k</span><span
                                            className="text-md md:text-lg text-gray-400"> vs prev. 60 days</span>
                                        </div>
                                    </div>

                                </div>

                            </Col>
                            <Col flex={3}>
                                <div className="flex flex-col p-3 w-full">
                                    <div className="flex flex-row justify-between items-center w-full">
                                        <div className="text-md md:text-lg font-[500] text-gray-600">Analytics
                                            <span className="text-green-500 font-normal text-md ms-3">+5.4%</span>
                                        </div>
                                        <div className="md:pe-5">
                                            <Dropdown menu={{items}} trigger={['click']}>
                                                <a className="bg-white flex flex-row items-center px-5 h-10"
                                                   onClick={(e) => e.preventDefault()}>
                                                    <span
                                                        className="font-normal text-xs md:text-sm md:font-[400] font-[Poppins] overflow-ellipsis truncate">month</span>
                                                    <ChevronDownIcon className="ps-4 h-4"/>
                                                </a>
                                            </Dropdown>
                                        </div>
                                    </div>
                                    <div
                                        className="w-full h-full min-h-[100%] flex items-center justify-center mt-5 md:mt-3">
                                        <ResponsiveContainer className="min-h-[100px] max-w-full w-[100px] h-[100px]"
                                                             width={'100%'}>
                                            <BarChart width={100} height={200} data={ChartData}
                                                      style={{height: '180px', maxWidth: '300px'}}>
                                                <XAxis dataKey="name" axisLine={false} tickLine={false} interval={1}/>
                                                <YAxis axisLine={false} tickLine={false} interval={1}/>
                                                <Bar dataKey="total" fill="#d3cffc" radius={[10, 10, 10, 10]}/>
                                            </BarChart>
                                        </ResponsiveContainer>
                                    </div>
                                </div>

                            </Col>
                        </Row>
                    </div>
                    {/*    Transaction History*/}
                    <div className="transaction-history mt-5 w-full overflow-hidden">
                        <div className="flex flex-col w-full justify-start items-start">
                            <div className="title flex flex-row justify-between items-center w-full">
                                <div className="text-lg md:text-3xl font-[Poppins]">Transaction History</div>
                                <DropDownComponent data={{title: 'Month'}} items={items} icon={true}
                                                   onClick={(e: Event) => e.preventDefault()}/>
                            </div>
                            <div className="flex flex-row mt-3">
                                {TransactionDropDownData.map((trans, i) =>
                                    <div className="mx-1 md:mx-3" key={i}><DropDownComponentGrey items={items}
                                                                                                 icon={false}

                                                                                                 data={trans}
                                                                                                 onClick={(e) => e.preventDefault()}/>
                                    </div>
                                )
                                }
                            </div>
                            <div className="transactions-table w-full">
                                <Table columns={TransactionTableColumns} dataSource={transactionTableData}
                                       pagination={false}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full md:w-4/12 xl:ps-8 p-3 overflow-hidden md:px-10">
                <div className="bg-white w-full h-full">
                    <div className="text-lg pb-3 text-violet-600">Premium Access</div>
                    <div
                        className="text-2xl md:text-3xl xl:text-5xl font-[500] flex flex-col justify-center items-center">
                        <span className="w-full">Take Back <br/> Your Creative <br/> Control</span>
                        <div className="flex sm:w-full md:w-full lg:w-fit flex-row justify-start items-center xl:-mt-5">
                            <ConfigProvider theme={{components: {Avatar: {groupOverlapping: -12,}}}}>
                                <Avatar.Group maxCount={3} maxStyle={{
                                    color: '#fff',
                                    backgroundColor: '#000',
                                    width: '30px',
                                    height: '30px',
                                    display: 'flex',
                                    alignItems: 'center', fontSize: '15px'
                                }}>
                                    {users.map((u, i) => <Avatar
                                        size={{xs: 30, sm: 40, md: 40, lg: 40, xl: 40, xxl: 40}}
                                        key={i} src={u}/>)}
                                </Avatar.Group>
                            </ConfigProvider>
                        </div>

                    </div>

                    <Dropdown menu={{items}} trigger={['click']}>
                        <a className="bg-white flex flex-row items-center h-10 mt-3 md:mt-5"
                           onClick={(e) => e.preventDefault()}><span
                            className="font-normal text-xs md:text-base text-gray-400 md:font-[400] font-[Poppins] overflow-ellipsis truncate">The Professional Platform</span>
                            <ChevronDownIcon className="ps-4 h-4 text-gray-400"/>
                        </a>
                    </Dropdown>

                    <Button
                        className="flex flex-row justify-between items-center w-full md:text-xl text-violet-800 py-6 rounded-2xl mt-3 md:mt-5">Upgrade
                        Now <ArrowRightIcon className="h-4"/></Button>

                    <Divider className="my-5 md:my-8"/>

                    {/*    Calendar*/}
                    <div>

                    </div>
                </div>
            </div>
        </div>
    );
};
