import { Layout } from 'antd';

import Navbar from './Navbar';
import Sidebar from './Sidebar';

import '../../styles/components/MainLayout.css';

const { Content } = Layout;

function MainLayout({ children }) {
  return (
    <Layout className="main-layout">
      <Navbar />

      <Layout>
        <Sidebar />

        <Content className="main-layout__content">
          {children}
        </Content>
      </Layout>
    </Layout>
  );
}

export default MainLayout;