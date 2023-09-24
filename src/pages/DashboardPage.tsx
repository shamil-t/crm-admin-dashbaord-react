import {Sidebar} from "../components/SidebarComponent/Sidebar.tsx";
import {Layout} from 'antd';
import {HeaderContent} from "../components/HeaderComponent/HeaderContent.tsx";
import {MainContentLayout} from "../components/MainContentComponent/MainContentLayout.tsx";

const {Header, Content, Sider} = Layout;

export const DashboardPage = () => {
    return (
        <Layout>
            <Sider
                breakpoint="lg"
                collapsedWidth="0"
                onBreakpoint={(broken) => {
                    console.log(broken);
                }}
                onCollapse={(collapsed, type) => {
                    console.log(collapsed, type);
                }}
                style={{background: '#fff', height: '100vh'}}
            >
                <Sidebar/>

            </Sider>
            <Layout className="h-[100vh] bg-white">
                <Header style={{padding: 0, minHeight: '80px'}} className="bg-white">
                    <HeaderContent/>
                </Header>
                <Content className="mt-16 md:mt-10">
                    <MainContentLayout/>
                </Content>
            </Layout>
        </Layout>
    );
};
