import { Button, Col, Input, Row } from "antd";
import Nav from "./Nav";
import "./index.scss";
import { SearchOutlined } from "@ant-design/icons";

export default function Header() {
  const linkAndLogoSpanProps = {
    xs: { flex: "20%" },
    sm: { flex: "45%" },
    md: { flex: "60%" },
    lg: { flex: "40%" },
    xl: { flex: "30%" },
  };

  const searchAndButtonsSpanProps = {
    xs: { flex: "80%" },
    sm: { flex: "55%" },
    md: { flex: "40%" },
    xl: { flex: "45%" },
  };

  const Logo = (
    <Col span={2}>
      <img src="/BMC-logo.svg" />
    </Col>
  );

  const NavLinks = (
    <Col span={20}>
      <Nav />
    </Col>
  );

  const HeaderSearch = (
    <Col className="header-search-container" {...searchAndButtonsSpanProps}>
      <Input
        className="search-creators-input"
        prefix={<SearchOutlined />}
        placeholder="Search Creators"
      />
    </Col>
  );

  const AuthenticationButtons = (
    <Col>
      <Button className="sign-in-button" type="text">
        Sign In
      </Button>
      <Button className="sign-up-button">Sign Up</Button>
    </Col>
  );

  return (
    <header>
      <Row align="middle" justify="space-between">
        <Col {...linkAndLogoSpanProps}>
          <Row justify="space-between" align="middle">
            {Logo}
            {NavLinks}
          </Row>
        </Col>
        <Col {...searchAndButtonsSpanProps}>
          <Row className="search-auth-buttons-container" justify="end">
            {HeaderSearch}
            {AuthenticationButtons}
          </Row>
        </Col>
      </Row>
    </header>
  );
}
