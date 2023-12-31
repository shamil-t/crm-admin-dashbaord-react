import {Avatar, Button, Col, ConfigProvider, Divider, Dropdown, MenuProps, Row} from "antd";


import {ChevronUpIcon} from "@heroicons/react/24/solid";
import {ArrowRightIcon, ChevronDownIcon, ChevronLeftIcon, ChevronRightIcon} from "@heroicons/react/24/outline";
import {DropDownComponent, DropDownComponentGrey} from "./DropDownComponent.tsx";
import {RevenueCardItem} from "./RevenueCardItem.tsx";
import {TransactionHistoryTable} from "./TransactionHistoryTable.tsx";
import {AnalyticsChart} from "./AnalyticsChart.tsx";
import {users} from "../../dummy-data/user-icons.tsx";
import {RevenueCardItemData} from "../../dummy-data/revenue-card.tsx";

import laptop from '../../assets/laptop.png'
import book from '../../assets/book.png'
import books from '../../assets/books.png'
import {CalenderEventItem} from "./CalenderEventItem.tsx";


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

    const TransactionDropDownData = [{title: 'Recipient'}, {title: 'Amount'}, {title: 'Status'}]

    const weekDays: string[] = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    const weekDates: number[] = [11, 12, 13, 14, 15, 16, 17];

    const calendarData = {
        weekDays: weekDays,
        activeDate: 13,
        weekDates: weekDates,
        events: [{
            icon: laptop,
            title: 'Meeting with Client',
            location: 'Google Meet',
            time: '12 pm'
        }, {
            icon: books,
            title: 'Weekly Report',
            location: 'Google Meet',
            time: '03 pm'
        }, {
            icon: book,
            title: 'Daily Scrum Meeting',
            location: 'Google Meet',
            time: '05 pm'
        }]
    }

    return (
        <div className="flex flex-col md:flex-row p-4 xl:px-10 xl:py-4">
            <div className="w-full md:w-8/12">
                {/**/}
                <div className="bg-white w-full h-[100%] flex flex-col justify-start items-center">
                    <div
                        className="revenue-card bg-[#6e62e5] px-3 py-3 md:py-4 md:p-3 min-h-[150px] my-auto rounded-2xl w-full
                         flex justify-between items-center">
                        <Row align="middle" className="w-full" justify="space-between">
                            {RevenueCardItemData.map((item, i) => (
                                <Col key={i}>
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
                                        <AnalyticsChart/>
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
                                    <div className="mx-1 md:mx-3" key={i}>
                                        <DropDownComponentGrey items={items}
                                                               icon={false}
                                                               data={trans}
                                                               onClick={(e) => e.preventDefault()}/>
                                    </div>
                                )
                                }
                            </div>
                            <div className="transactions-table w-full">
                                <TransactionHistoryTable/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full md:w-4/12 xl:ps-8 overflow-hidden px-6 xl:px-10 mt-10 md:mt-0">
                <div className="bg-white w-full h-full">
                    <div className="text-lg pb-3 text-violet-600">Premium Access</div>
                    <div
                        className="text-2xl md:text-3xl xl:text-5xl font-[500] flex flex-col justify-center items-center">
                        <span className="w-full">Take Back <br/> Your Creative <br/> Control
                        <span
                            className="ps-5 pt-4">
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
                                        size={{xs: 30, sm: 30, md: 35, lg: 40, xl: 40, xxl: 40}}
                                        key={i} src={u}/>)}
                                </Avatar.Group>
                            </ConfigProvider>
                        </span>
                    </span>
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
                    <div className="flex flex-col justify-start items-start w-full">
                        <div className="flex flex-row justify-between items-center w-full">
                            <div className="text-xl font-[500]">October 2023</div>
                            <div className="buttons flex flex-row justify-end">
                                <button
                                    className="rounded-full border border-gray-200 text-gray-500 flex justify-center items-center me-2"
                                    style={{width: '40px', height: '40px', fontSize: '14px'}}>
                                    <ChevronLeftIcon className="h-5"/>
                                </button>
                                <button
                                    className="rounded-full border border-gray-200 text-violet-800 flex justify-center items-center me-2"
                                    style={{width: '40px', height: '40px', fontSize: '14px'}}>
                                    <ChevronRightIcon className="h-5"/>
                                </button>
                            </div>
                        </div>
                        <div className="flex flex-col w-full mt-5">
                            <div className="flex flex-row justify-around items-center w-full">
                                {calendarData.weekDays.map((w, i) =>
                                    <span className="text-sm text-gray-400 w-8" key={i}>{w}</span>
                                )}
                            </div>
                            <div className="flex flex-row justify-around items-center w-full mt-3">
                                {calendarData.weekDates.map((w, i) =>
                                    <div
                                        className={`text-sm text-gray-600 p-2 px-3 text-center rounded-full ${calendarData.activeDate === w ? 'bg-violet-500 text-white' : ''}`}
                                        key={i}>{w}</div>
                                )}
                            </div>
                            <div className="flex flex-col mt-4">
                                {calendarData.events.map((e, i) => <div key={i}>
                                    <CalenderEventItem event={e}/>
                                </div>)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
