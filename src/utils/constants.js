export const alphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

export const cardDetails = contact => {
  return [
    {
      title: "e-mail",
      data: contact.email,
    },
    {
      title: "phone",
      data: contact.phone,
    },
    {
      title: "street",
      data: contact.location?.street?.name || "---",
    },
    {
      title: "city",
      data: contact.location?.city || "---",
    },
    {
      title: "state",
      data: contact.location?.state || "---",
    },
    {
      title: "postcode",
      data: contact.location?.postcode || "---",
    },
  ];
};
