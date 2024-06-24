import React, { useState } from 'react';
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UploadOutlined,
    UserOutlined,
    AppstoreOutlined,
} from '@ant-design/icons';
import { Button, Layout, Menu, theme } from 'antd';
import logo from '../../assets/logo.png';
import { Outlet, useNavigate } from 'react-router-dom';

const { Header, Sider, Content } = Layout;

const LayoutPage = () => {
    const [collapsed, setCollapsed] = useState(false);
    const navigate = useNavigate();
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    return (
        <Layout className='min-h-screen'>
            <Sider trigger={null} collapsible collapsed={collapsed}>
                <div className='flex justify-center align-middle'>
                    <img src={logo} alt="logo" className='w-[120px]' />
                </div>
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    items={[
                        {
                            key: '1',
                            icon: <AppstoreOutlined />,
                            label: 'DASHBOARD',
                            onClick: () => {
                                navigate('/');
                            }
                        },
                        {
                            key: '2',
                            icon: <UserOutlined />,
                            label: 'USERS',
                            children: [
                                {
                                    key: '2.1',
                                    icon: <UserOutlined />,
                                    label: 'Vendors',
                                    onClick: () => {
                                        navigate('/vendors');
                                    }
                                },
                                {
                                    key: '2.2',
                                    icon: <UserOutlined />,
                                    label: 'Clients',
                                    onClick: () => {
                                        navigate('/clients');
                                    }
                                },
                            ]
                        },
                        {
                            key: '3',
                            icon: <UploadOutlined />,
                            label: 'nav 3',
                        },
                    ]}
                />
            </Sider>
            <Layout>
                <Header
                    style={{
                        padding: 0,
                        background: colorBgContainer,
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                    }}
                >
                    <Button
                        type="text"
                        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                        onClick={() => setCollapsed(!collapsed)}
                        style={{
                            fontSize: '16px',
                            width: 64,
                            height: 64,
                        }}
                    />
                    {/* profile */}
                    <div className='flex-1 flex justify-end pr-5 items-center'>
                        <div className="relative flex items-center gap-4 dropdown">
                            <span className="hidden text-right lg:block">
                                <span className="block text-sm font-medium text-black dark:text-white">Thomas Anree</span>
                                <span className="block text-xs">UX Designer</span>
                            </span>
                            <span className="h-12 w-12 rounded-full">
                                <img tabIndex={0} src={logo} alt="User" />
                            </span>
                            <div tabIndex={0} className="dropdown-content z-[1] card card-compact w-64 p-2 shadow bg-gray-500 absolute top-[60px] right-[10px]">
                                <div className="card-body">
                                    <h3 className="card-title">Card title!</h3>
                                    <p>You can use any element as a dropdown.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Header>
                <Content
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                        background: colorBgContainer,
                        borderRadius: borderRadiusLG,
                    }}
                >
                    <Outlet />
                </Content>
            </Layout>
        </Layout>
    );
};

export default LayoutPage;