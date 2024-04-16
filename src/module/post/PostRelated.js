import Heading from "components/layout/Heading";
import React, { useEffect, useState } from "react";
import PostItem from "./PostItem";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { db } from "firebase-app/firebase-config";
import { postStatus } from "utils/constants";

const PostRelated = ({ categoryId = "" }) => {
  const [posts, setPosts] = useState([]);
  //   console.log(categoryId);
  useEffect(() => {
    const docRef = query(
      collection(db, "posts"),
      where("categoryId", "==", categoryId)
    );

    onSnapshot(docRef, (snapshot) => {
      const results = [];
      snapshot.forEach((doc) => {
        results.push({
          id: doc.id,
          ...doc.data(),
        });
      });
      //   console.log(results);
      setPosts(results);
    });
  }, [categoryId]);
  if (!categoryId || posts.length <= 0) return null;

  return (
    <div className="post-related">
      <Heading>Bài viết liên quan</Heading>
      <div className="grid-layout grid-layout--primary">
        {posts.map(
          (item) =>
            item.status === postStatus.APPROVED && (
              <PostItem key={item.id} data={item}></PostItem>
            )
        )}
      </div>
    </div>
  );
};

export default PostRelated;
