import {NavButtonType} from "../../types/nav-button.type.ts";

interface NavButtonProps {
    data: NavButtonType
}

export function NavButton({data}: NavButtonProps) {
    return <a className={`transition-all nav-button w-full p-2.5
                    rounded-md flex flex-row justify-start items-center mb-3 ${data.isActive ? 'bg-[#6e62e5] text-white hover:text-white hover:shadow-md hover:shadow-violet-500' : ''}`}>
        <div className="icon">
            {data.icon}
        </div>
        <div className="nav-text font-[Poppins] ps-4">
            {data.title}
        </div>
    </a>;
}
