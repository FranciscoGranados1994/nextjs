export const loginValidator = {
  email: {
    required: true,
    validator: {
      regexp: /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
      error: 'Invalid email format.',
    },
  },
  password: {
    required: true,
    validator: {
      regexp: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/,
      error: 'Invalid password format.',
    },
  },
};

export const singUpValidator = {
  email: {
    required: true,
    validator: {
      regexp: /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
      error: 'Invalid email format.',
    },
  },
  password: {
    required: true,
    validator: {
      regexp: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/,
      error: 'Invalid password format.',
    },
  },
  passwordComfirmation: {
    required: true,
    validator: {
      regexp: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/,
      error: 'The password format is wrong',
    },
  },
  username: {
    required: true,
    validator: {
      regexp: /^[a-zA-Z]+$/,
      error: 'Invalid username format.',
    },
  },
};

export const resetValidator = {
  email: {
    required: true,
    validator: {
      regexp: /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
      error: 'Invalid email format.',
    },
  },
};
