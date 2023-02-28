import BoardWrite from "@/components/units/board/07-write/BoardWrite.container";

export default function BoardNewPage() {
  return (
    <>{BoardWrite({ isEdit: false })}</>
    // <BoardWrite isEdit={false} />
  );
}
