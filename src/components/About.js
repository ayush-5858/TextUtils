import React from "react";

export default function About(props) {
  document.addEventListener("copy", (event) => {
    const selection = window.getSelection();
    const selectedElement = selection.anchorNode?.parentElement;

    // Check if the selected text is inside the div with id "canNotCopy"
    if (selectedElement?.closest("#canNotCopy")) {
      event.clipboardData.setData("text/plain", "Fuck You 🖕");
      event.preventDefault();
    }
  });

  return (
    <>
      <div
        className="container"
        style={{ backgroundColor: props.mode === "dark" ? "#042743" : "white" }}
      >
        <h2
          className="my-2"
          style={{ color: props.mode === "light" ? "black" : "white" }}
        >
          About Us
        </h2>
        <p style={{ color: props.mode === "light" ? "black" : "white" }}>
          <code>TextUtils</code> is typically a utility tool designed to perform
          text manipulation and analysis. The primary goal of such tools is to
          simplify repetitive or complex text-related tasks, often used in
          development projects, web applications, or standalone tools. Here's a
          breakdown of what <code>TextUtils</code> might include:
        </p>
        <div className="accordion" id="accordionExample">
          <div
            className="accordion-item"
            style={{
              backgroundColor: props.mode === "dark" ? "#042743" : "white",
              color: props.mode === "light" ? "black" : "white",
            }}
          >
            <h2 className="accordion-header">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
                style={{
                  backgroundColor: props.mode === "dark" ? "#042743" : "white",
                  color: props.mode === "light" ? "black" : "white",
                }}
              >
                <strong>Text Transformation</strong>
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                The <code>Text Transformation</code> in TextUtils is a powerful
                feature that allows you to modify and format text quickly and
                efficiently. Whether you need to convert text to uppercase,
                lowercase, or title case, remove extra spaces, reverse text, or
                apply other transformations, it simplifies the process and saves
                time. These tools are especially useful for creating consistent,
                professional-looking content, cleaning up text, or meeting
                specific formatting requirements. With just a click, you can
                transform your text into the desired style, making TextUtils an
                essential tool for students, writers, and professionals.
              </div>
            </div>
          </div>
          <div
            className="accordion-item"
            style={{
              backgroundColor: props.mode === "dark" ? "#042743" : "white",
              color: props.mode === "light" ? "black" : "white",
            }}
          >
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
                style={{
                  backgroundColor: props.mode === "dark" ? "#042743" : "white",
                  color: props.mode === "light" ? "black" : "white",
                }}
              >
                <strong>Word and Character Count</strong>
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                The <code>Word and Character Count</code> feature in TextUtils
                is a simple yet essential tool for analyzing text. It helps you
                quickly determine the number of words, characters (with or
                without spaces), and even sentences in your content. This is
                especially useful for writers adhering to specific word limits,
                students working on assignments, or professionals preparing
                concise documents. By providing instant and accurate counts,
                this feature ensures your content meets requirements, saves
                time, and improves overall productivity.
              </div>
            </div>
          </div>
          <div
            className="accordion-item"
            style={{
              backgroundColor: props.mode === "dark" ? "#042743" : "white",
              color: props.mode === "light" ? "black" : "white",
            }}
          >
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
                style={{
                  backgroundColor: props.mode === "dark" ? "#042743" : "white",
                  color: props.mode === "light" ? "black" : "white",
                }}
              >
                <strong>Text Formatting</strong>
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                The <code>Text Formatting</code> feature in TextUtils
                streamlines the process of customizing and organizing text for
                specific needs. It allows you to convert plain text into
                structured formats like HTML or Markdown, clean up messy text by
                removing special characters or punctuation, and adjust
                formatting to suit professional or creative requirements. This
                feature is invaluable for developers, writers, and content
                creators, ensuring their text is properly formatted, visually
                consistent, and ready for use in presentations, websites, or
                documents.
              </div>
            </div>
          </div>
          <div
            className="accordion-item"
            style={{
              backgroundColor: props.mode === "dark" ? "#042743" : "white",
              color: props.mode === "light" ? "black" : "white",
            }}
          >
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFourth"
                aria-expanded="false"
                aria-controls="collapseFourth"
                style={{
                  backgroundColor: props.mode === "dark" ? "#042743" : "white",
                  color: props.mode === "light" ? "black" : "white",
                }}
              >
                <strong>Text Analysis</strong>
              </button>
            </h2>
            <div
              id="collapseFourth"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                The <code>Text Analysis</code> feature in TextUtils provides
                valuable insights into your content by identifying key metrics
                like readability, keyword frequency, and unique word usage. It
                helps you understand the structure and quality of your text,
                making it especially useful for writers optimizing content for
                clarity, SEO specialists enhancing keyword relevance, and
                students analyzing essays or reports. By offering quick and
                detailed feedback, this feature ensures your text is both
                impactful and well-structured.
              </div>
            </div>
          </div>
        </div>
        <div
          id="canNotCopy"
          className="card container my-5"
          style={{
            backgroundColor: props.mode === "dark" ? "#042743" : "white",
            color: props.mode === "light" ? "black" : "white",
            borderColor:
              props.mode === "light" ? "rgba(0, 0, 0, 0.175)" : "white",
          }}
        >
          <div className="card-body">
            <h3>You can't copy this !!</h3>
            <p>
              The You can't copy this feature in TextUtils adds an extra layer
              of protection to your content by preventing unauthorized copying.
              It intercepts copy events on specified text elements and replaces
              the copied content with a custom message, ensuring your original
              work remains secure. This feature is especially useful for
              safeguarding intellectual property, preventing plagiarism, or
              controlling the distribution of sensitive information, making it
              ideal for bloggers, educators, and content creators.
            </p>
            <p>
              <strong>
                "If you try to copy the above content then you will get the
                special gift from my side whenever you paste it."
              </strong>
              -<code>Try it now !!</code>
            </p>
          </div>
        </div>
      </div>
      <footer
        className="bg-body-tertiary text-center text-lg-start"
        data-bs-theme={props.mode}
      >
        <div
          className="text-center p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
        >
          <p style={{ color: props.mode === "light" ? "black" : "white", marginBottom: "0px" }}>© 2024 Copyright</p>
          <p className="text-body m-0">
            Design and Maintained by <strong>Ayush Rathi</strong>
          </p>
        </div>
      </footer>
    </>
  );
}
