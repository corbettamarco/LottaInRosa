import { Progress, Box, Image } from "@chakra-ui/react";
import "./progressBar.css";
type PropsType = {
  progress: number;
  setProgress: (prevProgress: any) => void;
  jump: boolean;
};

export const ProgressBarWithAnimatedImage = ({
  progress,
  setProgress,
  jump
}: PropsType) => {
  return (
    <Box position="relative" mx="5%" mb="5%">
      <Image
        src={
          "scarpa.png"
        }
        alt="Jumping cat"
        className={jump ? "jumping-cat jumping-cat--jump" : "jumping-cat"}
        style={{ left: `${progress}%` }}
        w="40px"
        h="40px"
      />
      <Progress rounded={"md"} value={progress} bgColor="#F5F5DC"  isAnimated size="md"  />
    </Box>
  );
};

export default ProgressBarWithAnimatedImage;
