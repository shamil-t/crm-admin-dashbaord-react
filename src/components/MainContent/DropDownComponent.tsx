import {Dropdown} from "antd";
import {CalendarIcon, ChevronDownIcon} from "@heroicons/react/24/outline";
import {ItemType} from "antd/es/menu/hooks/useItems";

interface DropDownComponentProps {
    data: { title: string }
    items: ItemType[]
    onClick: (e: Event) => void
    icon: boolean
}

export function DropDownComponent(props: DropDownComponentProps) {
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

export function DropDownComponentGrey(props: DropDownComponentProps) {
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
