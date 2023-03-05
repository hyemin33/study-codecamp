import BoardWrite from "../../src/components/units/recoil-state/BoardWrite.container";
import { useRecoilState } from "recoil";
import { isEditState } from "../../src/commons/store";
import { useEffect } from "react";

export default function RecoilStatePage() {
  const [isEdit, setIsEdit] = useRecoilState(isEditState);

  useEffect(() => {
    setIsEdit(true);
  }, []);
  return <BoardWrite />;
}
