import { useState } from "react";

export default function useOpen() {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen((openState) => !openState);
  };

  return { open, toggleOpen };
}
