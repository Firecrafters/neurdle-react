import LoadingScreen from "@/app/components/loadingScreen";
import OptionButton from "@/app/components/optionButton";

export default function Game() {
  return (
    <div>
      <div id="options">
        <OptionButton iconSrc="/icons/gear.svg" buttonDescriptor="Settings" />
        <OptionButton iconSrc="/icons/calendar.svg" buttonDescriptor="Daily Challenge" />
        <OptionButton iconSrc="/icons/dice.svg" buttonDescriptor="Random Word" />
      </div>
      <LoadingScreen />
    </div>
  );
}
