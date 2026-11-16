"use strict";

const form = document.querySelector("#contact-form");
if (form) {
  const fields = ["name", "email", "topic", "message"].map((name) => ({
    name,
    input: document.querySelector(`#contact-${name}`),
    error: document.querySelector(`#${name}-error`)
  }));
  const summary = document.querySelector("#error-summary");
  const list = document.querySelector("#error-list");
  const status = document.querySelector("#form-status");
  let attempted = false;
  form.noValidate = true;
  document.querySelector("#contact-submit").disabled = false;

  function validate(field) {
    let message = "";
    if (!field.input.value.trim()) {
      message = field.name === "topic" ? "Choose a topic." : `Enter your ${field.name}.`;
    } else if (field.name === "email" && field.input.validity.typeMismatch) {
      message = "Enter a valid email address, such as name@example.com.";
    } else if (field.input.validity.tooLong) {
      message = `Shorten your ${field.name} to ${field.input.maxLength} characters.`;
    }
    field.error.textContent = message;
    field.error.hidden = !message;
    if (message) field.input.setAttribute("aria-invalid", "true");
    else field.input.removeAttribute("aria-invalid");
    return message;
  }

  function refreshSummary() {
    list.replaceChildren();
    for (const field of fields) {
      if (!field.error.hidden) {
        const item = document.createElement("li");
        const link = document.createElement("a");
        link.href = `#${field.input.id}`;
        link.textContent = field.error.textContent;
        link.addEventListener("click", (event) => {
          event.preventDefault();
          field.input.focus();
        });
        item.append(link);
        list.append(item);
      }
    }
    summary.hidden = !list.children.length;
  }

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    attempted = true;
    status.textContent = "";
    fields.forEach(validate);
    refreshSummary();
    if (!summary.hidden) summary.focus();
    else status.textContent = "Your message passed validation. This demo has not sent or stored your message.";
  });

  for (const field of fields) {
    field.input.addEventListener("input", () => {
      status.textContent = "";
      if (attempted) {
        validate(field);
        refreshSummary();
      }
    });
  }
}
