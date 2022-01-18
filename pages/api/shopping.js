// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const {
  addOrder,
  pushOrderToUser,
  ifUserExist,
  getEmailByPhoneNumber,
} = require("@/lib/firebaseAdmin");

const { sendInvoice } = require("@/lib/sendinblue");

export default async (req, res) => {
  const { answers } = req.body.form_response;
  const order = [];
  let phoneNumber = "";
  answers.map(({ type, choice, field, phone_number }) => {
    if (type === "choice") {
      order.push({
        id: field.id,
        choise: choice.label,
        ref: field.ref,
      });
    }

    if (type === "phone_number") {
      phoneNumber = phone_number;
    }
  });

  ifUserExist({ phoneNumber }).then((exist) => {
    exist &&
      addOrder({ phoneNumber, order }).then((result) =>
        pushOrderToUser({ phoneNumber, uidOrder: result, order })
      );
  });

  getEmailByPhoneNumber({ phoneNumber }).then(
    (email) => email && sendInvoice({ email })
  );

  res.status(200).json({ message: "ok" });
};
