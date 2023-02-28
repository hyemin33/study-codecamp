export default function TypeScriptBasic() {
  let nnn: number = 10;

  let bbb: boolean = true;
  bbb = false;
  //bbb = "false"; // js에서 true로 작동

  //배열타입
  let arrayNumber: number[] = [1, 2, 3, 4, 5];
  let arrayString: string[] = ["철수", "영희"];
  let arrayAll: (string | number)[] = ["철수", 3]; //타입을 추론해서 어떤 타입 사용하는지 알아볼 수 있음

  //객체타입
  interface IProfile {
    name: string;
    age: number | string;
    school: string;
  }

  const profile: IProfile = {
    name: "다람쥐",
    age: 9,
    school: "도토리 고등학교",
  };

  profile.age = "10살";

  //함수타입은 어디서든 호출 가능하므로, 반드시 타입명시가 필요하다! 함수 뒤에는 return type을 명시할 수 있다.
  const handleAdd = (
    number1: number,
    number2: number,
    unit: string
  ): string => {
    return number1 + number2 + unit;
  };

  handleAdd(1000, 2000, "원");

  return <></>;
}
