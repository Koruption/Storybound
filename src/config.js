import { FlumeConfig, Colors, Controls } from "flume";

const config = new FlumeConfig();

// ports & nodes
config
  .addPortType({
    type: "dialogue",
    name: "dialogue",
    label: "Dialogue",
    color: Colors.blue,
    controls: [
      Controls.text({
        name: "dialogue",
        label: "Dialogue",
      }),
    ],
  })
  .addPortType({
    type: "choice",
    name: "choice",
    label: "Choice",
    color: Colors.green,
    controls: [
      Controls.text({
        name: "choice",
        label: "Choice",
      }),
    ],
  })
  .addPortType({
    type: "question",
    name: "question",
    label: "Question",
    color: Colors.orange,
    controls: [
      Controls.text({
        name: "question",
        label: "Question",
      }),
    ],
  })
  .addPortType({
    type: "boolean",
    name: "boolean",
    label: "True/False",
    color: Colors.blue,
    controls: [
      Controls.checkbox({
        name: "boolean",
        label: "True/False",
      }),
    ],
  })
  .addPortType({
    type: "conditional",
    name: "conditional",
    label: "If/Else",
    color: Colors.blue,
    controls: [
      Controls.checkbox({
        name: "boolean",
        label: "True/False",
      }),
    ],
  })
  .addNodeType({
    type: "conditional",
    label: "Conditional",
    description: "Outputs a true/false value",
    initialWidth: 140,
    inputs: (ports) => [ports.boolean()],
    outputs: (ports) => [
      ports.choice({
        name: "If True",
        label: "If True",
      }),
      ports.choice({
        name: "If False",
        label: "If False",
      }),
    ],
  })
  .addNodeType({
    type: "boolean",
    label: "True/False",
    description: "Outputs a true/false value",
    initialWidth: 140,
    inputs: (ports) => [ports.boolean()],
    outputs: (ports) => [ports.boolean()],
  })
  .addNodeType({
    type: "Question",
    label: "Question",
    description: "Outputs a string of text",
    inputs: (ports) => [ports.dialogue(), ports.question(), ports.choice()],
    outputs: (ports) => [ports.question()],
  })
  .addNodeType({
    type: "Dialogue",
    label: "Dialogue",
    description: "Outputs a string of text",
    inputs: (ports) => [ports.dialogue(), ports.choice()],
    outputs: (ports) => [ports.dialogue()],
  })
  .addNodeType({
    type: "Choice",
    label: "Choice",
    description: "Outputs a string of text",
    inputs: (ports) => [
      ports.question(),
      ports.choice(),
      ports.boolean({
        name: "Yes/No",
        label: "Yes/No",
      }),
    ],
    outputs: (ports) => [
      ports.choice(),
      ports.boolean({
        name: "Yes/No",
        label: "Yes/No",
      }),
    ],
  });

export default config;
