const token = await mp.createCardToken({
  cardNumber: "4509953566233704",
  cardholderName: "Namecard a abcdec",
  identificationType: "CPF",
  identificationNumber: "83535924014",
  securityCode: "123",
  cardExpirationMonth: "11",
  cardExpirationYear: "2025",
});

// {
//   "id": 816441634,
//   "nickname": "TETE8434538",
//   "password": "qatest4026",
//   "site_status": "active",
//   "email": "test_user_626909@testuser.com"
// }
