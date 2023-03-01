export default function TypescriptUtilityPage() {
  interface IProfile {
    name: string;
    age: number;
    school: string;
    hobby?: string;
  }

  //1. Pick타입
  type aaa = Pick<IProfile, "name" | "age">;

  //2. Omit 타입 : 'school' 제외하고 타입만들기
  type bbb = Omit<IProfile, "school">;

  //3. Partial 타입 : 모두 선택사항으로
  type ccc = Partial<IProfile>;

  //4. Required 타입 : 모두 필수사항으로
  type ddd = Required<IProfile>;

  //5. Union 타입
  type eee = "철수" | "영희" | "훈이";
  let child: eee;
  child = "철수";

  //6. Record 타입
  type fff = Record<eee, IProfile>;

  // type vs interface 차이 : 선언병합
  interface IProfile {
    candy: number;
  }

  let profile: Partial<IProfile> = {};
  profile.candy = 10;
}
