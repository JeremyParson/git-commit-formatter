import { useEffect, useState } from "react";

export default function FormatterModel() {
  var [elements, setElements] = useState({
    type: "feat",
    scope: "",
    description: "what did you do?",
    body: "",
  });

  var [footers, setFooters] = useState({});
  var [footer, setFooter] = useState({
    name: "",
    content: "",
  });

  var [commitMessage, setCommitMessage] = useState("");

  const onElementChange = (property, value) => {
    console.log(property, value);
    setElements({ ...elements, [property]: value });
  };

  const onFooterChange = (property, value) => {
    setFooter({ ...footer, [property]: value });
  };

  const submitFooter = () => {
    setFooters({ ...footers, [footer.name]: footer.content });
    setFooter({
      name: "",
      content: "",
    });
  };

  const deleteFooter = (name) => {
    let temp = {...footers}
    delete temp[name]
    setFooters(temp);
  };

  useEffect(() => {
    var scope = elements.scope.length ? `(${elements.scope})` : "";
    var footer_text = ''
    var body_text = elements.body.length ? `\n\n${elements.body}` : ''
    for (let key in footers) {
      footer_text += `\n${key}: ${footers[key]}`
    }
    var message = `${elements.type}${scope}: ${elements.description}${body_text}\n${footer_text}`;
    setCommitMessage(message);
  }, [elements, footers]);

  return {
    elements,
    footers,
    footer,
    deleteFooter,
    submitFooter,
    commitMessage,
    onElementChange,
    onFooterChange,
  };
}
