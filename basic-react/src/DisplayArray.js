const DisplayArray = ({ handleClickEvent }) => {
  const numbers = [1, 2, 3, 4, 5];
  return (
    <>
      {/* <p>Javascript expression inside JSX</p>
      {numbers.map((item) => (
        <p>{item}</p>
      ))} */}
      <button onClick={handleClickEvent}>Click Me</button>
    </>
  );
};

export default DisplayArray;
