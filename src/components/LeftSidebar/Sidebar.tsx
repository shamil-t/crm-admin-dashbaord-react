import icon from '../../assets/icon.png'
import {NavButton} from "./NavButton.tsx";
import {mainNavbarData, projectsNavData, toolsNavData} from "../../dummy-data/nav-data.tsx";

export const Sidebar = () => {

    return (
        <nav className="border-r border-gray-200 w-full md:w-[200px] h-full xl:fixed left-0 bottom-0 top-0">
            <div className="flex flex-col items-center justify-start p-4">
                <a href="/" className="flex items-center hover:text-violet-700">
                    <img src={icon} className="h-9 mr-3" alt="Omio logo"/>
                    <span className="text-2xl font-[700]">Omio</span>
                </a>
                <div className="w-full mt-8">
                    {mainNavbarData.map((data, i) =>
                        <NavButton key={i} data={data}/>
                    )}

                    <div className="text-gray-400 font-[500] text-xs mt-5 mb-4">Tools</div>
                    {toolsNavData.map((data, i) =>
                        <NavButton key={i} data={data}/>
                    )}
                    <div className="text-gray-400 font-[500] text-xs mt-5 mb-4">Projects</div>
                    {projectsNavData.map((data, i) =>
                        <NavButton key={i} data={data}/>
                    )}
                </div>
            </div>
        </nav>

    );
};
