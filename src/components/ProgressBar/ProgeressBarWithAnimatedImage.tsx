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
          "https://toppng.com/uploads/preview/cute-frogs-11549528276ywl3dh0cxv.png"
        }
        alt="Jumping cat"
        className={jump ? "jumping-cat jumping-cat--jump" : "jumping-cat"}
        style={{ left: `${progress}%` }}
        w="40px"
        h="40px"
      />
      <Progress value={progress} colorScheme="tods" isAnimated size="md" />
    </Box>
  );
};

export default ProgressBarWithAnimatedImage;
