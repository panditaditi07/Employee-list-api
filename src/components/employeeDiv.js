class Employee {
  constructor(id, imageUrl, firstName, lastName, company, hobbies) {
    this.id = id;
    this.imageUrl = imageUrl;
    this.firstName = firstName;
    this.lastName = lastName;
    this.company = company;
    this.hobbies = hobbies;
  }

  render() {
    let employeeCard = document.createElement("div");
    employeeCard.className = "employee-card";
    employeeCard.innerHTML = `
        <div class="employee-image">
          <img src="${this.imageUrl}" alt="" />
        </div>
        <a src=""  target="_self" id="emp${this.id}" class="names">${this.firstName}  ${this.lastName}</a>
        <p class="company">${this.company}</p>
      </div>
`;
    employeeCard
      .querySelector(`#emp${this.id}`)
      .addEventListener("click", () => {
        this.printContent();
      });
    return employeeCard;
  }
  printContent() {}
}

export { Employee };
