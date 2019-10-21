
const partyHeader = document.getElementById('party');

export const htmlGenerator = (string, htmlElement) => {
  if (htmlElement.children) {
    Array.from(htmlElement.children).forEach((child) => htmlElement.removeChild(child));
  }
  let newEl = document.createElement('p');
  newEl.innerHTML = string;
  htmlElement.append(newEl);
};

htmlGenerator('Party Time.', partyHeader);