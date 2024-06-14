import { Button, Input } from "antd";
import "./index.scss";

export default function Hero() {
  return (
    <section className="hero">
      <h1>Stay close to your</h1>
      <h1>favorite people.</h1>
      <div className="phone-number-input">
        <Input
          suffix={<Button type="primary">Get started</Button>}
          size="large"
          placeholder="Enter your phone number"
        />
      </div>
      <img
        className="gradient-circle green"
        src="/hero-circle-green.svg"
        alt="hero section gradient circle"
      />
      <img
        className="gradient-circle purple"
        src="/hero-circle-purple.svg"
        alt="hero section gradient circle"
      />
      <img
        className="gradient-circle green right"
        src="/hero-circle-green.svg"
        alt="hero section gradient circle"
      />
      <div className="mobile-screen-images">
        <img
          alt="mobile screen image"
          className="mobile-screen"
          src="/hero-mobile-screen.svg"
        />
        <img
          alt="mobile screen image"
          className="voice-note"
          src="/hero-voice-note.svg"
        />
        <div className="gift-notification">
          <img
            width="50rem"
            height="50rem"
            src="/hero-giftbox.svg"
            alt="gift box image"
          />
          <h2>You received a Gift</h2>
          <Button>view gift</Button>
        </div>
        <img
          alt="girl face image"
          className="girl-face"
          src="/hero-girl-face.svg"
        />
      </div>
    </section>
  );
}
