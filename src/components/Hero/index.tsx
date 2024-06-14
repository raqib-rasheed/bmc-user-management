import { Button, Input } from "antd";
import "./index.scss";
import { gradientCirclesConfig } from "./heroGradientsConfig";
import { ChatScreenDemoImage } from "./ChatScreenImage";

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

  return (
    <section className="hero">
      {Title}
      {PhoneNumberInput}
      {gradientCirclesConfig.map((gradient) => (
        <img
          alt={gradient.alt}
          src={gradient.src}
          className={gradient.className}
        />
      ))}
      <ChatScreenDemoImage />
    </section>
  );
}
