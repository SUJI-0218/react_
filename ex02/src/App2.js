import Header from "./Header"
import Main from "./Main"
import Nav from "./Nav"

function App() {
  const num = 100;
  console.log(`num : ${num}`)
  // function click(){}8~9번 모두 함수 만드는 방식임
  const click = () => {
    alert("클릭!!!")
  }

  return (
    <>
    num : {num}
      <Header test="연습" number={num} /><hr />
      <Nav name="홍길동" addr="산골짜기" /><hr />
      <Main myclick={click} tel="010-xxx" nick="도적" />   
    </>
  );
}

export default App;
