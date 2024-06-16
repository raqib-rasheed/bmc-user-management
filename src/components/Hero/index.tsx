import { Button, Input } from "antd";
import "./index.scss";

export default function Hero() {
  const Title = (
    <>
      <h1>Stay close to your</h1>
      <h1>favorite people.</h1>
    </>
  );

  const PhoneNumberInput = (
    <div className="phone-number-input">
      <Input
        suffix={<Button type="primary">Get started</Button>}
        size="large"
        placeholder="Enter your phone number"
      />
    </div>
  );

  const HeroImage = (
    <>
      <img
        alt="hero section gradient circle"
        src="/hero-image-gradient.svg"
        className="gradient-circles"
      />
      <img
        alt="mobile screen image"
        className="mobile-screen-images"
        src="/hero-mobile-screen.svg"
      />
    </>
  );

  return (
    <section className="hero">
      {Title}
      {PhoneNumberInput}
      {HeroImage}
    </section>
  );
}
