import { useRecoilState, useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { usePostUserSettings } from '../../hooks/settings';
import { stepState, userSettingsState } from '../../recoil/recoil';
import { DisabilityStep } from '../../components/Settings/DisabilityStep';
import { FontSizeStep } from '../../components/Settings/FontSizeStep';
import { VoiceStep } from '../../components/Settings/VoiceStep';
import { ComponentStep } from '../../components/Settings/ComponentStep';

export default function UserSettings(){
  const [currentStep, setCurrentStep] = useRecoilState(stepState);
  const [userSettings, setUserSettings] = useRecoilState(userSettingsState);
  const userSettingsValue = useRecoilValue(userSettingsState);
  
  const handleNextStep = (nextStep : number) => {
    setCurrentStep(nextStep);
  };

  const renderStep = () => {
    console.log('userSettingsState'+ JSON.stringify(userSettingsValue));
    switch (currentStep) {
      case 1:
        return <DisabilityStep onNext={handleNextStep} />;
      case 2:
        return <FontSizeStep onNext={handleNextStep} />;
      case 3:
        return <VoiceStep onNext={handleNextStep} />;
      case 4:
        return <ComponentStep onNext={handleNextStep} />;
    }
  }

    return(
      <Container>
        {renderStep()}
      </Container>

    );
}

const Container = styled.div`
  width: 100%;
`