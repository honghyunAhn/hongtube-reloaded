export const trending = (req, res) => res.send("Home Page Videos");
export const see = (req, res) => res.render("home");
export const edit = (req, res) => {
  res.send("Edit");
};
export const search = (req, res) => res.send("Search");
export const upload = (req, res) => res.send("upload");
export const deleteVideo = (req, res) => {
  res.send("Delete Viedo");
};
