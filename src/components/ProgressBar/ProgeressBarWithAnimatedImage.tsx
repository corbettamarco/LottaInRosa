import { Progress, Box, Image, Center } from "@chakra-ui/react";
import "./progressBar.css";
type PropsType = {
  progress: number;
  setProgress: (prevProgress: any) => void;

};

export const ProgressBarWithAnimatedImage = ({
  progress,
  setProgress,
}: PropsType) => {
  return (
    <Center>
    <Box position="relative" mb="5%" w="80%" mt="1rem" shadow={'lg'} border={'1px solid black'} borderRadius={'.5rem'}>
      <Image
        src={
          "fiocco.jpg"
        }
        alt="shoe"
        className={"shoe"}
        style={{ left: `${progress-1}%` }}
        
        w="40px"
        h="40px"
      />
      <Progress  rounded={"md"} value={progress} bgColor="#F0B2BE"  isAnimated size="md"  />
    </Box></Center>
  );
};

export default ProgressBarWithAnimatedImage;
