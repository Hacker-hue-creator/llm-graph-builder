import { Flex, IconButton } from '@neo4j-ndl/react';
import { ChevronLeftIconSolid, ChevronRightIconSolid } from '@neo4j-ndl/react/icons';
import TipWrapper from '../UI/TipWrapper';
import { capitalize, capitalizeWithPlus } from '../../utils/Utils';
import { chatModeReadableLables } from '../../utils/Constants';

export default function ChatModesSwitch({
  switchToOtherMode,
  currentModeIndex,
  modescount,
  currentMode,
  isFullScreen,
}: {
  switchToOtherMode: (index: number) => void;
  currentModeIndex: number;
  modescount: number;
  currentMode: string;
  isFullScreen: boolean;
}) {
  const chatmodetoshow = chatModeReadableLables[currentMode].includes('+')
    ? capitalizeWithPlus(chatModeReadableLables[currentMode])
    : capitalize(chatModeReadableLables[currentMode]);
  return (
    <Flex flexDirection='row' gap='1' alignItems='center'>
      <IconButton
        isDisabled={currentModeIndex === 0}
        size='small'
        isClean
        onClick={() => switchToOtherMode(currentModeIndex - 1)}
        ariaLabel='left'
      >
        <ChevronLeftIconSolid />
      </IconButton>
      <TipWrapper tooltip={chatmodetoshow} placement='top'>
        <span
          className={`n-body-medium  ${!isFullScreen ? 'max-w-[50px] text-ellipsis text-nowrap overflow-hidden' : ''}`}
        >
          {chatmodetoshow}
        </span>
      </TipWrapper>
      <IconButton
        isDisabled={currentModeIndex === modescount - 1}
        size='small'
        isClean
        onClick={() => switchToOtherMode(currentModeIndex + 1)}
        ariaLabel='right'
      >
        <ChevronRightIconSolid />
      </IconButton>
    </Flex>
  );
}
