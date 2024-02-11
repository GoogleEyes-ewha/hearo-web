//우리가 공통적으로  설정해야 되는 색상 있으면 여기에 대입하고, 가져다 쓰면 된다.


export const Colors = {
    Basic_Black: '#000000',
  };
  
  
  export const BasicSize = {
    Title: '24px',
  };
  
  Object.freeze(Colors);
  Object.freeze(BasicSize);

const size = {
    desktop: '1440px',
    tablet: '975px',
};

const theme = {
    orange: '#FF7455',
    lightorange: '#FFF1EE',
    black: '#212121',

    // 브레이크 포인트
    mobile: `(max-width: ${size.tablet})`,
    tablet: `(max-width: ${size.desktop})`,
    desktop: `(min-width: ${size.desktop})`,
};

export default theme;
  