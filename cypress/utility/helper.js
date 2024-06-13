
export function generateDynamicEmail() {
    // Generate a timestamp to ensure uniqueness
    const timestamp = new Date().getTime();
    // Define a static part of the email address
    const staticPart = "Banp"; // You can change this to your desired static part
    // Concatenate the static part with the timestamp to create a unique email address
    const email = `${staticPart}_${timestamp}@gmail.com`;
    return email;
  } 


   function getTotal(label) {
    return cy
      .contains("td", label)
      .next()
      .find("strong")
      .invoke("text")
      .then((totalText) => {
        return totalText.trim();
      });
  }

  function getTotalOrderHistory(label) {
    return (
      cy
        .contains("tfoot td", label)
        .filter((index, element) => {
          return Cypress.$(element).text().trim() === label;
        })
        .siblings()
        .eq(1)
        .invoke("text")
        .then((totalText) => {
          return totalText.trim();
        })
    );
  }