import { useEffect } from "preact/hooks";

export default function Widget() {
  useEffect(() => {
    const widget = document.getElementById("widget");
    const doc = widget?.contentDocument;
    const style = document.createElement("style");
    style.innerHTML = `
    body {
      background: red;
    }
    `;
    doc?.head.appendChild(style);
  }, []);

  return (
    <iframe
      src="https://www.speakpipe.com/widget/inline/8r629w2k3l6um3cbifa7q3hqbp5nmybw"
      allow="microphone"
      width="100%"
      height="200"
      frameborder="0"
    >
    </iframe>
  );
}
