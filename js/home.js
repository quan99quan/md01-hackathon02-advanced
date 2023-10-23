let cards = [];
function display() {
  let html = ``;
  for (let i = 0; i < cards.length; i++) {
    let cvvMasked = cards[i].cvv.replace(/\d/g, "*");
    html += `
        <tr>
        <td><img src="${cards[i].image}"></td>
        <td>${cards[i].number}</td>
        <td>${cards[i].date}</td>
        <td>${cvvMasked}</td>
        <td>
        <button onclick="pressView(${i})">View</button>
        <button onclick="pressEdit(${i})">Edit</button>
        <button onclick="pressDelete(${i})">Delete</button>
        </td>

        </tr>
        
        `;
  }
  document.getElementById("tbody1").innerHTML = html;
  resetValue();
}
display();

function resetValue() {
  document.getElementById("number").value = "";
  document.getElementById("date").value = "";
  document.getElementById("cvv").value = "";
}

function add(event) {
  event.preventDefault();
  let number = document.getElementById("number").value;
  let date = document.getElementById("date").value;
  let cvv = document.getElementById("cvv").value;
  let image = document.getElementById("image").src;
  if (number.length !== 16) {
    return alert("Card Number nhập đủ 16 số");
  }
  function hideNumbers(number) {
    let hiddenNumber = "";
    for (let i = 0; i < number.length; i++) {
      if (i >= 6 && i < 12) {
        hiddenNumber += "*";
      } else {
        hiddenNumber += number[i];
      }
    }
    return hiddenNumber;
  }
  let hiddenNumber = hideNumbers(number);

  if (date == "" || date.length !== 5) {
    return alert("Nhập chuẩn ngày/tháng");
  }

  if (cvv.length !== 3) {
    return alert("CVV đủ 3 số");
  }
  cards.push({
    number: hiddenNumber,
    date,
    cvv,
    image,
  });
  display();
}
function pressDelete(index) {
  cards.splice(index, 1);
  display();
}
function setInputValue(id, value) {
  document.getElementById(id).value = value;
}
function pressEdit(index) {
  let cards2 = cards[index];
  setInputValue("number", cards2.number);
  setInputValue("date", cards2.date);
  setInputValue("cvv", cards2.cvv);
  document.getElementById("save").value = index;
  cards.splice(index, 1);
}


