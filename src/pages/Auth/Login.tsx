import { useRecoilValue } from "recoil";
import { getColors } from "../../assets/styles/colors";
import { colorBlindModeState } from "../../recoil/recoil";

/*recoilValue로 전역상태 관리 해놓은 colorBlindModeState의 값을 가져오고, ex) type1
getColors라는 함수로 type1에 설정해놓은 색상 값들을 가져온다.
*/

export default function Login() {
    const colorBlindMode = useRecoilValue(colorBlindModeState);
    const colors = getColors(colorBlindMode);

    return(
      <div style={{ backgroundColor: colors.background }}> {/*type1에 설정해놓은 background */}
        로그인 페이지
      </div>
    );
}

/*여기서 return 된 값들이 App.tsx로 가서  화면에 보여지게 되는 것. 
그래서 return 안에 쭉쭉 컴포넌트들 적어주면 된다.
*/