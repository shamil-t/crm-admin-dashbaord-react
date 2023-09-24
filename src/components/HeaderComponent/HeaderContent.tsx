import {Avatar, Badge, Dropdown, MenuProps, Space} from "antd";
import user from '../../assets/3d-avatar.webp'
import {BellIcon, ChevronDownIcon, MagnifyingGlassIcon} from "@heroicons/react/24/outline";

export const HeaderContent = () => {
    const items: MenuProps['items'] = [
        {
            label: 'Settings',
            key: '0',
        },
        {
            label: 'Theme',
            key: '1',
        },
        {
            type: 'divider',
        },
        {
            label: 'Logout',
            key: '3',
        },
    ];
    return (
        <div className="m-3">
            <div className="header-title w-full h-full flex flex-col md:flex-row items-center">
                <div className="flex flex-row md:flex-1">
                    <Space size="middle">
                        <Badge count={3} offset={[-5, 10]} color="#6e62e5" className="font-[Poppins]">
                            <Avatar className="border-2 border-violet-500 p-0 m-0" shape="circle"
                                    size={{xs: 40, sm: 40, md: 40, lg: 64, xl: 72, xxl: 72}} src={user}/>
                        </Badge>
                    </Space>
                    <div className="flex flex-col items-start justify-center ms-5 flex-1">
                        <div className="text-xl md:text-3xl text-black font-bold">
                            Good Evening Team!
                        </div>
                        <div className="text-gray-400 text-xs md:text-sm font-[Poppins]">
                            Have an in-depth look at all the metrics within your dashboard
                        </div>
                    </div>
                </div>

                <div
                    className="header-options mt-2 md:mt-0 flex flex-row items-center justify-between w-full md:w-1/2 h-full">
                    <div className="flex flex-row items-center">
                        <button
                            className="rounded-full mx-8 p-2.5 bg-gray-200 text-gray-500 flex justify-center items-center">
                            <MagnifyingGlassIcon className="h-5"/>
                        </button>
                        <Badge className="md:mx-8" size="default" dot={true} color="#6e62e5"
                               offset={[-12, 22]}
                               style={{color: "#6e62e5"}}>
                            <Avatar src={<BellIcon className="h-6 text-gray-500"/>}/>
                        </Badge>
                    </div>
                    <div className="me-0 md:me-20">
                        <Dropdown menu={{items}} trigger={['click']}>
                            <a className="bg-white shadow-md rounded-2xl flex flex-row items-center px-5 h-10"
                               onClick={(e) => e.preventDefault()}>
                                <img src={user} alt="user image" className="h-8 rounded-3xl me-3 border"/>
                                <span className="font-[500] font-[Poppins] overflow-ellipsis truncate">Jon doe</span>
                                <ChevronDownIcon className="ps-4 h-4"/>
                            </a>
                        </Dropdown>
                    </div>

                </div>
            </div>

        </div>
    );
};
