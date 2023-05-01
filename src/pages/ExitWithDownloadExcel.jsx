import { CSVLink } from "react-csv";
import { useContext } from "react";
import { ResultsContext } from "../context/Results";
import { useNavigate } from "react-router-dom";

const headers = [
  { label: "Word Shown", key: "name" },
  { label: "Word Type", key: "type" },
  { label: "User Inputs", key: "userValue" },
];

const styles = {
  wrapper: {
    width: "50vw",
    height: "70vh",
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    gap: "32px",
  },
};

const ExitWithDownloadExcel = () => {
  const { systemInput, userInput } = useContext(ResultsContext);
  const navigate = useNavigate();

  const constructData = () => {
    if (systemInput.length >= userInput.length) {
      return systemInput.map((eachRow, index) => ({ ...eachRow, userValue: userInput[index] ? userInput[index] : "" }));
    } else {
      return userInput.map((userWord, index) => ({ userValue: userWord, ...systemInput[index] }));
    }
  };
  const csvReport = {
    data: constructData(),
    headers: headers,
    filename: `Mnemonics_${new Date().toLocaleString()}`,
    extension: ".csv",
  };

  console.log(constructData());

  return (
    <div style={styles.wrapper}>
      <h3>Results</h3>
      <p>
        A set of 20 words were presented to you in 3 trails. 10 are non-mnemonic and 10 are mnemonic words. Compare your
        results with the list of non-mnemonic and mnemonic words. Calculate the total no. of non-mnemonic and mnemonic
        words and enter the results in the following format in your record book.
      </p>
      <CSVLink {...csvReport}>Download me</CSVLink>
      <button onClick={() => navigate("/lastactivity")}>End</button>
    </div>
  );
};

export default ExitWithDownloadExcel;