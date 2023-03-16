// indext.spec.ts == indext.test.ts
// react 에서는 __test__ 폴더를 만든 후 모아둔다.
// next 에서는 __test__ 폴더를 만든 후 모아둔다. -> next에서는 __test__ 라는 페이지가 만들어지기 때문에 pages 밖에 만든다.
//

import { add } from "../../pages/23-01-jest";

it("더하기 테스트", () => {
  const result = add(3, 5);
  expect(result).toBe(8);
});

// 여러개 한번에 하고 싶을때 그룹을 만든다
describe("나만의 테스트 그룹만들기", () => {
  it("내가 하고 싶은 테스트1", () => {});
  it("내가 하고 싶은 테스트2", () => {});
});
