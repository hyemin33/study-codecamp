// generic 타입 1
// 무엇을 넣든 상관없지만 처음 들어간 값의 타입으로 계속 유지가 된다. -> 타입추론을 위해서 (라이브러리를 만들때 쓰임)
function getGeneric<myType1, myType2, myType3>(
  arg1: myType1,
  arg2: myType2,
  arg3: myType3
): [myType3, myType2, myType1] {
  return [arg1, arg2, arg3];
}

const result = getGeneric(123, false, true);

// generic 타입 2
function getGeneric2<T1, T2, T3>(arg1: T1, arg2: T2, arg3: T3): [T3, T2, T1] {
  return [arg1, arg2, arg3];
}

const result = getGeneric2(123, false, true);

// generic 타입 3
function getGeneric3<T, U, V>(arg1: T, arg2: U, arg3: V): [V, U, T] {
  return [arg1, arg2, arg3];
}

const result = getGeneric3(123, false, true);

// generic 타입 4
const getGeneric4 = <T, U, V>(arg1: T, arg2: U, arg3: V): [V, U, T] => {
  return [arg1, arg2, arg3];
};

const result = getGeneric3(123, false, true);
