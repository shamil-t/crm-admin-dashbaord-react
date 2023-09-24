import {
    ChartBarIcon,
    ChatBubbleLeftEllipsisIcon,
    Cog6ToothIcon,
    FolderIcon,
    HomeIcon,
    MagnifyingGlassCircleIcon,
    QuestionMarkCircleIcon,
    ShoppingBagIcon
} from "@heroicons/react/24/outline";

export const mainNavbarData = [
    {
        icon: <HomeIcon className="h-5"/>, title: 'Home', isActive: true
    }, {
        icon: <ChartBarIcon className="h-5"/>, title: 'Analytic', isActive: false
    }, {
        icon: <MagnifyingGlassCircleIcon className="h-5"/>, title: 'Explore', isActive: false
    }, {
        icon: <ShoppingBagIcon className="h-5"/>, title: 'Shop', isActive: false
    }, {
        icon: <ChatBubbleLeftEllipsisIcon className="h-5"/>, title: 'Inbox', isActive: false
    }]

export const toolsNavData = [{
    icon: <Cog6ToothIcon className="h-5"/>, title: 'Settings', isActive: false
}, {
    icon: <QuestionMarkCircleIcon className="h-5"/>, title: 'Help', isActive: false
}]

export const projectsNavData = [{
    icon: <FolderIcon className="h-5"/>, title: 'Amazon', isActive: false
}, {
    icon: <FolderIcon className="h-5"/>, title: 'Invinity HQ', isActive: false
}]
