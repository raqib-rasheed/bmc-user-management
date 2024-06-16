import { Col, Row } from "antd";
import { footerConfig } from "./footerConfig";
import { Link } from "react-router-dom";
import "./index.scss";

type footerLinksType = (typeof footerConfig)[0]["links"];

export default function Footer() {
  const getFooterLinks = (links: footerLinksType) =>
    links.map((link) => (
      <Col key={link.key} span={24}>
        <Link to={link.path}>{link.label}</Link>
      </Col>
    ));

  return (
    <footer id="footer">
      <Row justify="center">
        <Col span={2}>
          <img src="/BMC-logo.svg" alt="BMC logo for footer" />
        </Col>
        <Col span={16}>
          <Row>
            {footerConfig.map((typesConfig) => (
              <Col key={typesConfig.key} span={6}>
                <Row gutter={[0, 16]}>
                  <Col span={24}>
                    <h3 style={{ color: "black" }} key={typesConfig.key}>
                      {typesConfig.title}
                    </h3>
                  </Col>
                  {getFooterLinks(typesConfig.links)}
                </Row>
              </Col>
            ))}
            <Col className="app-download-container" span={18}>
              <Link
                target="_blank"
                to="https://play.google.com/store/apps/details?id=app.buymeacoffee&hl=en_US&pli=1"
              >
                <img
                  src="/footer-download-android-app.svg"
                  alt="Download button image for android app"
                />
              </Link>
              <Link
                target="_blank"
                to="https://apps.apple.com/us/app/buy-me-a-coffee/id1480229954"
              >
                <img
                  src="/footer-download-apple-app.svg"
                  alt="Download button image for apple app"
                />
              </Link>
            </Col>
            <Col span={12}>
              <p>&copy; {new Date().getFullYear()} Privacy & Terms.</p>
            </Col>
          </Row>
        </Col>
      </Row>
    </footer>
  );
}
