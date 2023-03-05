import { useForm } from "react-hook-form";

interface IFormData {
  writer: string;
  title: string;
  contents: string;
}

export default function ReactHookFormPage() {
  const { register, handleSubmit } = useForm<IFormData>();

  const onClickSubmit = (data: IFormData) => {
    console.log(data);
  };

  console.log("리렌더링");

  return (
    <form onSubmit={handleSubmit(onClickSubmit)}>
      작성자:
      <input type="text" {...register("writer")} />
      제목:
      <input type="text" {...register("title")} />
      내용:
      <input type="text" {...register("contents")} />
      {/* 주소:
      <input type="text" {...register("boardAddress.addressDetail")} /> */}
      <button>보내기</button>
    </form>
  );
}
