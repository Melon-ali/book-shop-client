import { Typography, Row, Col, Card, Timeline, Space } from "antd";
import bgImage from '../assets/images/hero2.png'
import bannerImg from '../assets/images/banner2.jpg'
import {
  ShopOutlined,
  TeamOutlined,
  TrophyOutlined,
  SafetyCertificateOutlined,
} from "@ant-design/icons";

const { Title, Paragraph } = Typography;

export default function About() {
  return (
    <div style={{ padding: "2rem" }}>
      <Row justify="center" style={{ marginBottom: "3rem" }}>
        
        <Col>
          <Title className="text-center" level={1}>
            Welcome to Koparion Book Shop
          </Title>
          
          <Paragraph style={{ fontSize: "1.2rem", textAlign: "center" }}>
            Your Premium Destination for All Things Books!
          </Paragraph>
          
      <div className="md:w-full lg:w-full sm:w-full"><img className="rounded-md" src={bannerImg} alt="banner" /></div>
        </Col>
      </Row>
      <Row gutter={[24, 24]} justify="center">
        <Col xs={24} md={7}>
          <Card hoverable style={{ height: "100%" }}>
            <ShopOutlined style={{ fontSize: "2rem", color: "#1890ff" }} />
            <Title level={4}>Premium Selection</Title>
            <Paragraph style={{ height: "80px" }}>
              Offering the finest collection of library, mountain, and urban
              books from top author
            </Paragraph>
          </Card>
        </Col>
        <Col xs={24} md={7}>
          <Card hoverable style={{ height: "100%" }}>
            <TeamOutlined style={{ fontSize: "2rem", color: "#1890ff" }} />
            <Title level={4}>Expert Staff</Title>
            <Paragraph style={{ height: "80px" }}>
              Our certified category and sales team bring decades of cycling
              experience
            </Paragraph>
          </Card>
        </Col>
        <Col xs={24} md={7}>
          <Card hoverable style={{ height: "100%" }}>
            <SafetyCertificateOutlined
              style={{ fontSize: "2rem", color: "#1890ff" }}
            />
            <Title level={4}>Quality Service</Title>
            <Paragraph style={{ height: "80px" }}>
              Professional maintenance, delevery, and customization services
            </Paragraph>
          </Card>
        </Col>
      </Row>

      <Row justify="center" style={{ marginTop: "4rem" }}>
        <Col xs={24} md={16}>
          <Title level={2}>Our Journey</Title>
          <Timeline
            items={[
              {
                color: "green",
                children: "1995 - Founded as a small book shop",
              },
              {
                color: "green",
                children: "2000 - Expanded to full-service koparion book",
              },
              {
                color: "green",
                children: "2010 - Opened our flagship store",
              },
              {
                color: "blue",
                children:
                  "2023 - Celebrating serving over 100,000 happy cyclists",
              },
            ]}
          />
        </Col>
      </Row>

      <Row justify="center" className="py-7 md:w-full lg:w-full sm:w-full rounded-md" style={{ marginTop: "4rem", backgroundImage: `url(${bgImage})` }}>
        <Col xs={24} md={16}>
          <>
            <Title level={2}>Why Choose Us?</Title>
            <Space direction="vertical" size="middle">
              <Paragraph>
                <TrophyOutlined
                  style={{ color: "#1890ff", marginRight: "8px" }}
                />
                Voted Best Book Shop 5 years in a row
              </Paragraph>
              <Paragraph>
                <SafetyCertificateOutlined
                  style={{ color: "#1890ff", marginRight: "8px" }}
                />
                Lifetime free maintenance on all new books
              </Paragraph>
              <Paragraph>
                <TeamOutlined
                  style={{ color: "#1890ff", marginRight: "8px" }}
                />
                Community read and events every month
              </Paragraph>
            </Space>
          </>
        </Col>
      </Row>
    </div>
  );
}
