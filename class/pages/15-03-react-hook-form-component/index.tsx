import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
  writer: yup.string().required("작성자를 입력해주세요."),
  title: yup.string().required("제목을 입력해주세요."),
  contents: yup.string().required("내용를 입력해주세요."),

  //   email: yup
  //     .string()
  //     .email("이메일 형식에 적합하지 않습니다.")
  //     .required("이메일은 필수 입력입니다."),
  //   password: yup
  //     .string()
  //     .min(4, "비밀번호는 최소 4자리 이상입니다.")
  //     .max(15, "비밀번호는 최대 15자리 입니다.")
  //     .required("필수 입력입니다."),
  //   phone: yup
  //     .string()
  //     .matches(/^\d{3}-\d{3,4}-\d{4}$/, "휴대폰 형식에 맞지 않습니다."), //정규표현식 사용
});

interface IFormData {
  writer: string;
  title: string;
  contents: string;
}

export default function ReactHookFormPage() {
  const { register, handleSubmit, formState } = useForm<IFormData>({
    resolver: yupResolver(schema),
    mode: "onChange", //변경할때마다 검증하겠다 (제어컴포넌트)
  });

  const onClickSubmit = (data: IFormData) => {
    console.log(data);
  };

  console.log("리렌더링");

  return (
    <form onSubmit={handleSubmit(onClickSubmit)}>
      작성자:
      <input type="text" {...register("writer")} />
      <div>{formState.errors.writer?.message}</div>
      제목:
      <input type="text" {...register("title")} />
      <div>{formState.errors.title?.message}</div>
      내용:
      <input type="text" {...register("contents")} />
      <div>{formState.errors.contents?.message}</div>
      {/* 주소:
      <input type="text" {...register("boardAddress.addressDetail")} /> */}
      <button style={{ backgroundColor: formState.isValid ? "yellow" : "" }}>
        보내기
      </button>
    </form>
  );
}
