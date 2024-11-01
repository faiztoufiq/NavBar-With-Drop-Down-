import { useState } from "react";

interface toogleButton {
  isClicked: boolean;
  toogle: () => void;
}

function useButtonClick(): toogleButton {
  const [isClick, setIsClick] = useState<boolean>(false);

  function toogle(): void {
    setIsClick((prev) => !prev);
  }

  return { isClicked: isClick, toogle };
}

export default useButtonClick;
