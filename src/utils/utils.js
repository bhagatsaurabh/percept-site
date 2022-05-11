export const toBlobURL = (data, type) => {
  return URL.createObjectURL(new Blob([data], { type }));
};

export const findExampleData = (examplesData, slug) => {
  let exampleData;
  for (let category of examplesData) {
    exampleData = category.examples.find((example) => example.slug === slug);
    if (exampleData) break;
  }
  return exampleData;
};

export const classes = (...args) => {
  const classList = [];

  for (let arg of args) {
    if (typeof arg === "string") classList.push(arg);
    else if (typeof arg === "object") {
      for (let key in arg) arg[key] && classList.push(key);
    }
  }

  return classList.join(" ");
};

export const debounce = (callback, lastTimer, cooldown) => {
  clearTimeout(lastTimer);
  return setTimeout(callback, cooldown);
};

export const allowIFrame =
  "accelerometer; camera; encrypted-media; display-capture; geolocation; gyroscope; microphone; midi; clipboard-read; clipboard-write; web-share";
export const sandboxIFrame =
  "allow-downloads allow-forms allow-modals allow-pointer-lock allow-popups allow-presentation allow-same-origin allow-scripts allow-top-navigation-by-user-activation";
