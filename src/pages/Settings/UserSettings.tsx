import { useRecoilState } from 'recoil';
import { colorBlindModeState } from '../../recoil/recoil';

/*recoil : 전역상태관리 관련 기술.
그냥 useState를 쓰면 딱 이 파일과 관련해서만 변경 사항이 적용되는 것에 비해
Recoil을 쓰면 전체 파일의 상태가 바뀐다.
하지만 새로고침을 하면 초기화되기 때문에 백 db에 저장 필수.

여기서 타입을 누르면 useRecoilState를 통해 전체 파일들의 상태가 type1과 관련된 것으로 변경된다.*/
export default function UserSettings(){
    const [colorBlindMode, setColorBlindMode] = useRecoilState(colorBlindModeState);
    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setColorBlindMode(e.target.value);
      };
    
    return(
      <select value={colorBlindMode} onChange={handleChange}>
        <option value="normal">일반</option>
        <option value="type1">타입 1</option>
        <option value="type2">타입 2</option>
      </select>
    );
}