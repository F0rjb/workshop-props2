import { Layout } from "antd";

const { Footer } = Layout;
const TodoFooter = () => {
  return (
    <Layout>
      {" "}
      <Footer
        style={{
          textAlign: "center",
        }}
      >
        Ant Design ©2023 Created by Ant UED
      </Footer>
    </Layout>
  );
};
export default TodoFooter;
