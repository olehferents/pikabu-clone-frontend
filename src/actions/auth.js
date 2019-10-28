export const SIGN_IN = "SIGN_IN";

export const signIn = (usernameOrEmail, password) => {
    return {
        type: SIGN_IN,
        usernameOrEmail,
        password
    }
};

