import { Button, Col, Row } from "antd";
import "./index.scss";
import { ArrowRightOutlined } from "@ant-design/icons";
import { benefitsSectionConfig } from "./benefitscSectionConfig";

export default function Benefits() {
  return (
    <section className="benefits">
      {benefitsSectionConfig.map((benefitConfig) => (
        <Row justify="center" align="middle">
          <Col order={benefitConfig.reverse ? 2 : 1} md={18} lg={7}>
            <img src={benefitConfig.smileyUrl} alt="emoji smiley face" />
            <h1>{benefitConfig.title}</h1>
            <p>{benefitConfig.description}</p>
            <Button
              className="learn-more-button"
              type="text"
              icon={<ArrowRightOutlined />}
            >
              Learn more
            </Button>
          </Col>
          <Col
            order={benefitConfig.reverse ? 1 : 2}
            md={18}
            lg={7}
            className="lady-image-container"
          >
            <img
              className="lady-image"
              src={benefitConfig.imageUrl}
              alt="Benefits section image of lady using BMC app"
            />
          </Col>
        </Row>
      ))}
    </section>
  );
}
