import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ResultsContext } from "../context/Results";

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "8px",
  },
  inputBox: {
    fontSize: "16px",
    padding: "8px",
    minHeight: "20vh",
    minWidth: "20vw",
    maxHeight: "50vh",
    maxWidth: "50vw",
  },
  button: {
    outline: "none",
    border: "none",
    padding: "8px 32px",
    backgroundColor: "#6666ff",
    color: "white",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "20px",
    fontWeight: 500,
  },
  text: {
    textAlign: "center",
    padding: "8px",
  },
};

const UserInput = () => {
  const [userAns, setUserAns] = useState("");
  const navigate = useNavigate();
  const { setUserInput } = useContext(ResultsContext);

  const handleSubmit = () => {
    navigate("/exitWithExcel");
    setUserInput(userAns.split(",").map((eachWord) => eachWord.trim()));
  };
  return (
    <div style={styles.container}>
      <h4 style={styles.text}>
        Please recollect the words which you have seen repeatedly before you
        have solved the maths problem. type the words as you recollect in the
        box given below. Try to recall and type as many words as possible.
      </h4>

      <label htmlFor="userInput">
        <h4 style={styles.text}>
          *After every word you have typed please put a coma<b>(,)</b>
        </h4>{" "}
      </label>

      <textarea
        style={styles.inputBox}
        id="userInput"
        name="userInput"
        rows="4"
        cols="30"
        value={userAns}
        onChange={(e) => setUserAns(e.target.value)}
      ></textarea>
      <button style={styles.button} onClick={handleSubmit}>
        SUBMIT
      </button>
    </div>
  );
};

export default UserInput;
