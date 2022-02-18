export const join = (req, res) => res.send("Join");
export const edit = (req, res) => res.send("Edit User Profile");
export const remove = (req, res) => res.send("Remove User Profile ");
export const login = (req, res) => res.send("Login Here");
export const logout = (req, res) => res.send("Log out");
export const see = (req, res) => {
  console.log(req.params);
  return res.send("See User Profile");
};
