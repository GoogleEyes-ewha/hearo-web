export const getColors = (colorBlindMode: string) => {
    switch(colorBlindMode) {
      case 'type1':
        return {
          background: '#ffffff',
          // 기타 색상 정의
        };
      case 'type2':
        return {
          background: '#색맹 타입2에 맞는 색상',
          // 기타 색상 정의
        };
      default:
        return {
          background: '#기본 색상',
          // 기타 색상 정의
        };
    }
  };
  