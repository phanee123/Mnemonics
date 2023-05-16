import "../App.css";

const lastPageStyles = {
  container: {
    padding: "2rem",
    display: "flex",
    flexDirection: "column",
    minHeight: "60vh",
    gap: "15px",
  },
  bottomArea: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },

  footer: {
    textAlign: "center",
  },
  dotted: {
    textDecorationLine: "underline",
    textDecorationStyle: "dotted",
  },
};

const LastPage = () => {
  return (
    <div style={lastPageStyles.container}>
      <h4>
        Table-1: Showing subject responses/results for Mnemonic and Non-Mnemonic
        words presented in the experiment
      </h4>
      <table>
        <thead>
          <tr>
            <th colSpan={3}>Number of correct words correctly recalled</th>
          </tr>
          <tr>
            <th>Mnemonic Words</th>
            <th>Non-Mnemonic Words</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
      <div style={lastPageStyles.bottomArea}>
        <h4>Discussion:</h4>
        <p style={lastPageStyles.dotted}>
          Discuss the phenomena of Mnemonic/Non-Mnemonic words having a bearing
          on memory.
        </p>
        <h4>Conclusion:</h4>
        <p style={lastPageStyles.dotted}>Add conclusion later.</p>
        <h4>Practical Application:</h4>
        <p style={lastPageStyles.dotted}>
          Mention two situations where you use Mnemonics technique in your day
          to day life.
        </p>
        <footer>
          <h5 style={lastPageStyles.footer}>
            .....*End of the Experiment*.....
          </h5>
        </footer>
      </div>
    </div>
  );
};

export default LastPage;
