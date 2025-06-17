const DisplayArray = () => {
  const numbers = [1, 2, 3, 4, 5];
  return (
    <>
      <p>Javascript expression inside JSX</p>
      {numbers.map((item) => (
        <p>{item}</p>
      ))}
    </>
  );
};

export default DisplayArray;
