import "./App.css";
import useModel from "./model";
function App() {
  const {
    elements,
    footers,
    footer,
    submitFooter,
    deleteFooter,
    onFooterChange,
    onElementChange,
    commitMessage,
  } = useModel();

  const handleFooterSubmit = (e) => {
    e.preventDefault()
    submitFooter()
  }

  const renderFooters = () => {
    var footer_elements = []
    for (let key in footers) {
      footer_elements.push(<p key={key} onClick={(e) => deleteFooter(key)}>
        {key}: {footers[key]}
      </p>)
    }
    return footer_elements;
  }

  return (
    <div className="App">
      <a href="https://www.conventionalcommits.org/en/v1.0.0/#specification">Learn about conventional commits!</a>
      <form>
        <label>Type</label>
        <input className="type"
          list="types"
          name="type"
          value={elements.type}
          onChange={(e) => onElementChange(e.target.name, e.target.value)}
        />
        <datalist id="types">
          <option value="feat" />
          <option value="docs" />
          <option value="fix" />
          <option value="change" />
        </datalist>
        <label>Scope</label>
        <input
          type="text"
          name="scope"
          value={elements.scope}
          onChange={(e) => onElementChange(e.target.name, e.target.value)}
        />
        <label>Description</label>
        <input
          type="text"
          name="description"
          value={elements.description}
          onChange={(e) => onElementChange(e.target.name, e.target.value)}
        />
        <label>Body</label>
        <textarea
          name="body"
          value={elements.body}
          onChange={(e) => onElementChange(e.target.name, e.target.value)}
        />

        <label>Footers</label>
        <label>name</label>
        <input
          list="names"
          name="name"
          value={footer.name}
          onChange={(e) => onFooterChange(e.target.name, e.target.value)}
        />
        <datalist id="names">
          <option value="BREAKING CHANGE"/>
        </datalist>
        <label>content</label>
        <input
          type="text"
          name="content"
          value={footer.content}
          onChange={(e) => onFooterChange(e.target.name, e.target.value)}
        />
        <button onClick={(e) => handleFooterSubmit(e)}>Add Footer</button>
      </form>
      <section>
        {renderFooters()}
      </section>
      <textarea readOnly value={commitMessage}></textarea>
    </div>
  );
}

export default App;
