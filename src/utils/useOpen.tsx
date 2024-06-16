import { useState } from "react";

export default function useOpen() {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => {
    console.log("called");
    setOpen((openState) => !openState);
  };

  return { open, toggleOpen };
}
