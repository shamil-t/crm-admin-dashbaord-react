import {Sidebar} from "../components/LeftSidebar/Sidebar.tsx";
import {Layout} from 'antd';
import {HeaderContent} from "../components/MainHeader/HeaderContent.tsx";
import {MainContentLayout} from "../components/MainContent/MainContentLayout.tsx";

const {Header, Content, Sider} = Layout;

export const DashboardPage = () => {
    return (
        <Layout>
            <Sider
                breakpoint="lg"
                collapsedWidth="0"
                style={{background: '#fff', height: '100vh', minWidth: '200px'}}
            >
                <Sidebar/>

            </Sider>
            <Layout className="h-[100vh] bg-white">
                <Header style={{padding: 0, minHeight: '80px'}} className="bg-white">
                    <HeaderContent/>
                </Header>
                <Content className="mt-16 md:mt-6">
                    <MainContentLayout/>
                </Content>
            </Layout>
        </Layout>
    );
};
