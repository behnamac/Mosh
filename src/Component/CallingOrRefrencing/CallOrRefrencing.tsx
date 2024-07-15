const clickHandler = () => {
  console.log("Hello Behnam");
};

const CallOrRefrencing = () => {
  return (
    <div>
      {/* If you put clickHandler(), it's gonna immadiatly execute  without waiting for click from user */}
      <button onClick={clickHandler}>click me</button>
    </div>
  );
};

export default CallOrRefrencing;
