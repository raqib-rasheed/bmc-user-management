import { Button, Col, Input, Row } from "antd";
import Nav from "./Nav";
import "./index.scss";
import { SearchOutlined } from "@ant-design/icons";

export default function Header() {
  const linkAndLogoSpanProps = {
    xs: { flex: "60%" },
    sm: { flex: "43%" },
    md: { flex: "45%" },
    lg: { flex: "40%" },
    xl: { flex: "30%" },
  };

  const searchAndButtonsSpanProps = {
    xs: { flex: "40%" },
    sm: { flex: "57%" },
    md: { flex: "55%" },
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
    <Col span={14}>
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
          <Row justify="space-around">
            {HeaderSearch}
            {AuthenticationButtons}
          </Row>
        </Col>
      </Row>
    </header>
  );
}
