import { Button } from "antd";

export const ChatScreenDemoImage = () => (
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
);
