interface IPropsExample {
  title: string;
  children: JSX.Element;
}

export default function Example(props: IPropsExample) {
  return (
    <>
      <div>
        이것은 샘플 컴포넌트의 헤더입니다. 하단에 page들을 props 했습니다.
      </div>
      <div>{props.title}</div>
      <div>{props.children}</div>
      <div>이것은 샘플 컴포넌트의 바닥입니다.</div>
    </>
  );
}
