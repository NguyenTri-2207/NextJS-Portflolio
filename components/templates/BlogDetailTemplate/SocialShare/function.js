export const handleOnFacebookShare = (e, { ...params }) => {
  e.preventDefault();
  let width = 650,
    height = 450;
  let facebookWindow = window.open(
    "https://www.facebook.com/sharer/sharer.php?u=" +
      (params?.url || document.URL) +
      (params.quote ? "&quote=" + params.quote : ""),
    "facebook-popup",
    "height=450,width=650",
    "top=" + (screen.height / 2 - height / 2) + "",
    "left=" + (screen.width / 2 - width / 2) + "",
    "menubar=no,toolbar=no,resizable=yes,scrollbars=yes"
  );

  if (facebookWindow.focus) {
    facebookWindow.focus();
  }

  return false;
};
export const handleOnTwitterShare = (e, { ...params }) => {
  let width = 650,
    height = 450;
  let twitterWindow = window.open(
    "https://twitter.com/share?url=" +
      (params?.url || document.URL) +
      (params.title ? "&text=" + params.title : ""),
    "twitter-popup",
    "height=350,width=600"
  );

  if (twitterWindow.focus) {
    twitterWindow.focus();
  }

  return false;
};
export const handleOnLinkedShare = (e, { ...params }) => {
  let width = 650,
    height = 450;
  e.preventDefault();
  // let LinkedinWindow = window.open(
  //   "https://www.linkedin.com/sharer/sharer.php?u=" +
  //     (params?.url || document.URL) +
  //     (params.title ? "&title=" + params.title : ""),
  //   "linkedin-popup",
  //   "height=350,width=600"
  // );
  let LinkedinWindow = window.open(
    "https://www.linkedin.com/sharing/share-offsite?url=" +
      (params?.url || document.URL) +
      (params.title ? "&title=" + params.title : ""),
    "linkedin-popup",
    "height=350,width=600"
  );

  if (LinkedinWindow.focus) {
    LinkedinWindow.focus();
  }

  return false;
};
