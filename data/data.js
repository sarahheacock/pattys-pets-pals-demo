
var blogID = '5991fea0f02ece3a473389de';

var data = {
  home: {},
  services: {},
  rates: {},
  contact: {},
  footer: {}
};

var links = ["home", "services", "rates", "contact"];


//========INITIAL DATA=========================

var initialUser = {
  token: ''
};

var initialEdit = {
  url: '',
  modalTitle: '',
  dataObj: {}
};

var initialMessage = '';
//==============================================

var loginData = {
  username: {
    type: 'text',
    placeholder: 'Admin Username',
    componentClass: 'input'
  },
  password: {
    type: 'password',
    placeholder: 'Password',
    componentClass: 'input'
  }
};


var messageData = {
  name: {
    type: 'text',
    placeholder: 'Your Name',
    componentClass: 'input'
  },
  email: {
    type: 'email',
    placeholder: 'Email Address',
    componentClass: 'input'
  },
  phone: {
    type: 'text',
    placeholder: 'Phone Number',
    componentClass: 'input'
  },
  message: {
    type: 'text',
    placeholder: 'Message',
    componentClass: 'textarea'
  }
};

var notRequired = ['description'];

var rateData = {
  title: {
    type: 'text',
    placeholder: 'Type of Service',
    componentClass: 'input'
  },
  cost: {
    type: 'text',
    placeholder: 'Cost of Service (US Dollars)',
    componentClass: 'input'
  },
  time: {
    type: 'text',
    placeholder: 'Length of Service',
    componentClass: 'input'
  },
  description: {
    type: 'text',
    placeholder: 'Description',
    componentClass: 'input'
  }
};

var editData = {
  p1: {
    type: 'text',
    placeholder: 'Write your paragraph here...',
    componentClass: 'textarea'
  }
};

var cloudName = "dhd1eov8v";

var messages = {
  inputError: "*Fill out required fields.",
  tokenError: 'You are unauthorized. Sign in to continue.',
  expError: 'Session expired. Log back in to continue.',
  phoneError: "Invalid phone number.",
  emailError: "Invalid email address.",
  authError: "You are not authorized to access this account.",
  usernameError: 'Username not found.',
  passError: 'Incorrect password for given username.',
  messageSent: "Message sent! I will get back to you within 24 business hours. Thank you!"
};

module.exports = {
  data: data,
  initialUser: initialUser,
  initialEdit: initialEdit,
  initialMessage: initialMessage,
  messageData: messageData,
  loginData: loginData,
  blogID: blogID,
  editData: editData,
  rateData: rateData,
  cloudName: cloudName,
  notRequired: notRequired,
  messages: messages,
  links: links
}
