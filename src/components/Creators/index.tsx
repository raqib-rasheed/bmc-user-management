import UserCardSlider from "./SliderView";
import "./index.scss";

export default function Creators() {
  const CreatorsTitleAndDescription = (
    <>
      <h1>Around 5M+ creators</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut la
      </p>
    </>
  );

  return (
    <section className="creators">
      {CreatorsTitleAndDescription}
      <UserCardSlider />
    </section>
  );
}
