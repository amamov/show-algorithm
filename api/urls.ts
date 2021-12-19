const domain = (domain: string, root: string = API_ROOT) => `${root}/${domain}`;

export const API_ROOT = `${process.env.API_ROOT}`;

export const api = {
  index: domain(""),
  //   users: {
  //     index: domain("users"),
  //     login: domain("users/login/"),
  //     logout: domain("users/logout/"),
  //   },
};
