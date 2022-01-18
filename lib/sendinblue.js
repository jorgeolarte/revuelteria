const apiKey = process.env.NEXT_PUBLIC_SENDINBLUE_API_KEY;

export const getAllContacts = async () => {
  const response = await fetch(
    "https://api.sendinblue.com/v3/contacts?limit=50&offset=0&sort=desc",
    {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "api-key": apiKey,
      },
    }
  );

  const data = await response.json();
  console.log("Los resultados: ", data);
};

export const createContact = async ({
  firstName,
  lastName,
  email,
  phoneNumber,
}) => {
  const url = "https://api.sendinblue.com/v3/contacts";
  const options = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "api-key": apiKey,
    },
    body: JSON.stringify({
      attributes: {
        NOMBRE: `${firstName}`,
        APELLIDOS: `${lastName}`,
        SMS: `${phoneNumber}`,
      },
      listIds: [7],
      updateEnabled: true,
      email: email,
    }),
  };

  return await fetch(url, options)
    .then((res) => res)
    // .then((json) => {
    //   console.log("aqui: ", json);
    // })
    .catch((error) => {
      throw { message: error };
    });
};

export const sendInvoice = async ({ email }) => {
  const url = "https://api.sendinblue.com/v3/smtp/templates/14/send";
  const options = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "api-key": apiKey,
    },
    body: JSON.stringify({
      emailTo: [`${email}`],
    }),
  };

  return await fetch(url, options)
    .then((res) => res.json())
    .then((json) => console.log(json))
    .catch((error) => {
      throw { message: error };
    });
};
