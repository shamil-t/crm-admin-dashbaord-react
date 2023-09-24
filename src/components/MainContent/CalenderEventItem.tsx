import {ClockIcon, VideoCameraIcon} from "@heroicons/react/24/outline";

interface CalenderEventPropType {
    icon: string,
    title: string,
    location: string,
    time: string
}

export function CalenderEventItem(props: { event: CalenderEventPropType }) {
    return <div className="flex flex-row justify-start h-full w-full p-2">
        <div className="bg-gray-200 rounded-full h-fit p-4">
            <img src={props.event.icon} alt="icon" className="h-9"/>
        </div>
        <div className="flex flex-col flex-1 justify-between ms-5 py-2">
            <span className="text-sm md:text-base font-[500]">{props.event.title}</span>
            <span className="text-xs md:text-sm text-gray-400 flex flex-row items-center">
                <VideoCameraIcon className="h-4 text-gray-400 pe-3"/>
                {props.event.location}
            </span>
        </div>
        <div className="flex flex-col justify-end items-end">
            <span className="text-xs md:text-sm text-gray-400 flex flex-row">
            <ClockIcon className="h-4 me-2"/>{props.event.time}
            </span>
        </div>
    </div>;
}
