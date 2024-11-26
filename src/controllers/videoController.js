import Video from "../models/Video";

export const trending = (req, res) => {
  Video.find({})
    .then((videos) => {
      console.log("videos", videos);
      return res.render("home", { pageTitle: "Home", videos: videos });
    })
    .catch((error) => {
      console.log("errors", error);
    });
};
export const watch = (req, res) => {
  const { id } = req.params;
  return res.render("watch", { pageTitle: `Watcing` });
};
export const getEdit = (req, res) => {
  const { id } = req.params;
  res.render("edit", { pageTitle: `Editing` });
};
export const postEdit = (req, res) => {
  const { id } = req.params;
  const { title } = req.body;
  return res.redirect(`/videos/${id}`);
};
export const getUpload = (req, res) => {
  return res.render("upload", { pageTitle: "Upload Video" });
};
export const postUpload = (req, res) => {
  const { title } = req.body;
  return res.redirect("/");
};

export const search = (req, res) => res.send("Search");
export const deleteVideo = (req, res) => res.send("Delete Viedo");
