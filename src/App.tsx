import ReelsComponent from "./components/ReelsComponent";
// import {
//   ReelMetaInfoType,
//   ReelsType,
// } from "./components/ReelsComponent/reels.type";
import "./App.css";
import react, { useEffect, useState } from "react";
import axios from "axios";

// interface Props {
//   reels: Array<ReelsType>;
//   reelMetaInfo?: ReelMetaInfoType;
//   onMenuItemClicked?: (event: any) => any;
//   onLikeClicked?: (reel: ReelsType) => any;
//   onDislikeClicked?: (reel: ReelsType) => any;
//   onCommentClicked?: (reel: ReelsType) => any;
//   onShareClicked?: (reel: ReelsType) => any;
//   onAvatarClicked?: (reel: ReelsType) => any;
// }

function App() {
  const [resData, setResData] = useState([]);

  useEffect(() => {
    axios
      .get("https://mocki.io/v1/2db5c6ed-8d03-4f5b-b3b9-519d39b7a720")
      .then((data) => setResData(data?.data?.data));

    return () => {};
  }, []);

  console.log("resData", resData);

  const reels = [
    {
      id: 1,
      reelInfo: {
        url: "http://res.cloudinary.com/dxkoc9aao/video/upload/v1672385259/ShopAR/post/video/1672384978060/63aad77ca1bea9c14b8dfe20.mp4",
        type: "video/mp4",
        description:
          "Description for the product video will go here. Description for the product video will go here. Description for the product video will go here.",
        postedBy: {
          avatar:
            "https://avatars.dicebear.com/api/big-smile/trijit.svg?mood[]=happy&background=%23efefef",
          name: "Trijit Goswami",
        },
        likes: {
          count: 759878,
        },
        dislikes: {
          count: 124,
        },
        comments: {
          count: 10089.345,
        },
        shares: {
          count: 299792458,
        },
      },
      rightMenu: {
        options: [
          {
            id: 1,
            label: "Option 1",
            value: "option-1",
          },
          {
            id: 2,
            label: "Option 2",
            value: "option-2",
          },
          {
            id: 3,
            label: "Option 3",
            value: "option-3",
          },
        ],
      },
    },
    {
      id: 2,
      reelInfo: {
        url: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        type: "video/mp4",
        description:
          "Description for the product video will go here. Description for the product video will go here. Description for the product video will go here.",
        postedBy: {
          avatar:
            "https://avatars.dicebear.com/api/big-smile/sourav.svg?mood[]=happy&background=%23efefef",
          name: "Sourav Halder",
        },
        likes: {
          count: 559878,
        },
        dislikes: {
          count: 12,
        },
        comments: {
          count: 10089.345,
        },
        shares: {
          count: 299792458,
        },
      },
      rightMenu: {
        options: [
          {
            id: 1,
            label: "Option 1",
            value: "option-1",
          },
          {
            id: 2,
            label: "Option 2",
            value: "option-2",
          },
          {
            id: 3,
            label: "Option 3",
            value: "option-3",
          },
        ],
      },
    },
    {
      id: 3,
      reelInfo: {
        url: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
        type: "video/mp4",
        description: "Lorem ipsum dolor sit amet?",
        postedBy: {
          avatar:
            "https://avatars.dicebear.com/api/big-smile/sanjib.svg?mood[]=happy&background=%23efefef",
          name: "Sanjib Kumar Mandal",
        },
        likes: {
          count: 123,
        },
        dislikes: {
          count: 0,
        },
        comments: {
          count: 14,
        },
        shares: {
          count: 0,
        },
      },
      rightMenu: {
        options: [
          {
            id: 1,
            label: "Option 1",
            value: "option-1",
          },
          {
            id: 2,
            label: "Option 2",
            value: "option-2",
          },
          {
            id: 3,
            label: "Option 3",
            value: "option-3",
          },
        ],
      },
    },
  ];

  const reelMetaInfo = {
    videoDimensions: {
      height: 580,
      width: 330,
    },
    backGroundColor: "#000000",
    borderRadius: 10,
  };

  return (
    <>
      <ReelsComponent
        reels={reels}
        reelMetaInfo={reelMetaInfo}
        onMenuItemClicked={() => {}}
        onLikeClicked={() => {}}
        onDislikeClicked={() => {}}
        onCommentClicked={() => {}}
        onShareClicked={() => {}}
        onAvatarClicked={() => {}}
      />
    </>
  );
}

export default App;
