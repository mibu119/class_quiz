import { UseFormRegisterReturn } from "react-hook-form";

interface IInput01Props {
  register: UseFormRegisterReturn;
  type: "text" | "password"; // union type
}

export default function Input01(props: IInput01Props) {
  return <input type={props.type} {...props.register} />;
}
