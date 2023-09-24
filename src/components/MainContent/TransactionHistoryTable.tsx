import {Avatar, Badge, ConfigProvider, Table} from "antd";
import React from "react";
import {ColumnsType} from "antd/es/table";
import user_icon from "../../assets/3d_avatar_3.webp";
import user_icon_3 from "../../assets/3d_avatar_3.webp";
import user_icon_2 from "../../assets/3d_avatar_2.webp";
import user_icon_4 from "../../assets/3d_avatar_4.webp";
import user_icon_5 from "../../assets/3d_avatar_5.webp";
import user_icon_6 from "../../assets/3d_avatar_6.webp";
import user_icon_7 from "../../assets/3d_avatar_7.webp";

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

export const TransactionHistoryTable = () => {
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
    return (
        <Table columns={TransactionTableColumns} dataSource={transactionTableData}
               pagination={false}/>
    );
};
