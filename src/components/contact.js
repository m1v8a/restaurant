import locationIcon from "../asset/icons/location.svg";
import phoneIcon from "../asset/icons/phone.svg";

export default function contact() {
    const container = document.createElement("section");
    container.id = "contact";

    const heading = document.createElement("h2");
    heading.className = "head-text";
    heading.textContent = "Contact Us";

    const divAddress = document.createElement("div");
    divAddress.className = "inner-div";

    const iconAddress = document.createElement("img");
    iconAddress.width = "32";
    iconAddress.height = "32";
    iconAddress.src = locationIcon;

    const address = document.createElement("address");
    address.className = "address";
    address.textContent = "Unknown Street, Fake City, Random Country"

    const divPhone = document.createElement("div");
    divPhone.className = "inner-div";

    const iconPhone = document.createElement("img");
    iconPhone.width = "32";
    iconPhone.height = "32";
    iconPhone.src = phoneIcon;

    const phone = document.createElement("tel");
    phone.className = "phone";
    phone.textContent = "+123-4567-890";

    const form = document.createElement("form");
    const nameInput = document.createElement("input");
    const emailInput = document.createElement("input");
    const messageInput = document.createElement("textarea");
    const nameInputLabel = document.createElement("label");
    const emailInputLabel = document.createElement("label");
    const messageInputLabel = document.createElement("label");

    form.className = "form";

    nameInputLabel.textContent = "Your Name: ";
    nameInputLabel.append(nameInput);
    emailInputLabel.textContent = "Your Email: ";
    emailInputLabel.append(emailInput);
    messageInputLabel.textContent = "Message";
    messageInputLabel.append(messageInput);

    form.append(nameInputLabel, emailInputLabel, messageInputLabel);

    const div = document.createElement("div");
    div.className = "outer-div"

    divAddress.append(iconAddress, address);
    divPhone.append(iconPhone, phone);
    div.append(divAddress, divPhone, form);
    container.append(heading, div);

    return container;

}
