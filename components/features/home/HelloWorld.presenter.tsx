import { HelloWorldStyle } from "./HelloWorld.style";

export default function HelloWorldPresenter() {
  return (
    <HelloWorldStyle.HelloWorldWrapper>
      Hello World!
    </HelloWorldStyle.HelloWorldWrapper>
  );
}
