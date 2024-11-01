import useButtonClick from "../customHooks/page";
import Switch from "@mui/material/Switch";
function ToogleClick() {
  const { isClicked, toogle } = useButtonClick();

  return (
    <div
      className={`h-screen flex justify-center items-center ${
        isClicked ? "bg-black text-white" : " text-black"
      }`}
    >
      <Switch checked={isClicked} onChange={toogle} color="default" />
      <p>{isClicked ? "Button is clicked!" : "Button is not clicked."}</p>
    </div>
  );
}
export default ToogleClick;
