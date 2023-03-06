import { useState } from "react";

export function useSearch() {
  const [keyword, setKeyword] = useState("");

  const onChangeKeyword = (value: string) => {
    setKeyword(value);
  };

  return {
    keyword,
    onChangeKeyword,
  };
}

//사용할때는 const {keyword, onChangeKeyword} = useSearch()
