import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { Fragment } from "react";
import {
  handleOnFacebookShare,
  handleOnLinkedShare,
  handleOnTwitterShare,
} from "./function";

const listButton = [
  {
    name: "facebook",
    icon: FaFacebookF,
    backgroundColor: "#1877f2",
    shareFunc: handleOnFacebookShare,
  },
  {
    name: "twitter",
    icon: FaTwitter,
    backgroundColor: "#1da1f2",
    shareFunc: handleOnTwitterShare,
  },
  {
    name: "linkedIn",
    icon: FaLinkedinIn,
    backgroundColor: "#0077b5",
    shareFunc: handleOnLinkedShare,
  },
];

function SocialShare({
  iconWidth,
  iconHeight,
  title,
  titleClass,
  iconCLass,
  socialList,
  params,
}) {
  const SocialButton = ({ data, width, height }) => {
    switch (data.name) {
      case "facebook":
        data = { ...data, ...listButton.find((x) => x.name === "facebook") };
        break;
      case "twitter":
        data = { ...data, ...listButton.find((x) => x.name === "twitter") };
        break;
      case "linkedIn":
        data = { ...data, ...listButton.find((x) => x.name === "linkedIn") };
        break;
      default:
        break;
    }

    const CustomTag = data.icon;

    return (
      <button
        onClick={(e) => data.shareFunc(e, data?.title, data?.url)}
        style={{
          width: data?.width || width,
          height: data?.height || height,
          backgroundColor: data?.backgroundColor,
        }}
        className={`hover:brightness-110  ${
          data?.styles || "mb-0 mr-2 rounded-full p-0 lg:mb-2"
        }`}
      >
        <CustomTag width={16} height={16} color="#fff" className="m-auto" />
        <span className="capitalize">{data?.text}</span>
      </button>
    );
  };

  return (
    <Fragment>
      {title && <span className={`block ${titleClass}`}>{title}</span>}
      <div
        id="social"
        className={`
           sticky flex items-end lg:items-start ${iconCLass || ""}`}
      >
        {socialList && socialList.length > 0 ? (
          <>
            {socialList.map((item, index) => {
              return (
                <SocialButton
                  key={index}
                  data={item}
                  width={iconWidth}
                  height={iconHeight}
                />
              );
            })}
          </>
        ) : (
          <>
            {listButton.map((item, index) => {
              const CustomTag = item.icon;
              return (
                <button
                  key={index}
                  onClick={(e) => item.shareFunc(e, { ...params })}
                  style={{
                    backgroundColor: item.backgroundColor,
                    width: iconWidth,
                    height: iconHeight,
                  }}
                  className={
                    "mb-0 mr-2 rounded-full p-0 hover:brightness-110 lg:mb-2"
                  }
                >
                  <CustomTag
                    width={16}
                    height={16}
                    color="#fff"
                    className="m-auto"
                  />
                </button>
              );
            })}
          </>
        )}
      </div>
    </Fragment>
  );
}

export default SocialShare;
