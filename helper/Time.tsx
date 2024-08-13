export const handleTimeCountDown = (
  timeRemaining: number,
  setTimeRemaining: React.Dispatch<React.SetStateAction<number>>,
  navigation: any
) => {
  if (timeRemaining > 0) {
    setTimeRemaining(timeRemaining - 1);
  } else {
    navigation.navigate("Verify");
  }
};

export const convertTimeToMinSecs = (time: number) => {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
};
