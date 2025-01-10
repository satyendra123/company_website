import React from "react";
import SolutionFeaturedPostAndTrending from "../../../../Utils/SolutionLayOut/SolutionFeaturedPostAndTrending/SolutionFeaturedPostAndTrending";
import Notebook from './FeaturedPostAndTrendingImages/notebook.png';
import Students from './FeaturedPostAndTrendingImages/students.png';
import Students1 from './FeaturedPostAndTrendingImages/students1.png';
import Students2 from './FeaturedPostAndTrendingImages/students2.png';

const App = () => {
  const featuredPost = {
    title: "Featured Post",
    image: Students,
    description: "Houston Systems is a leading provider in access a",
    content:
      "Houston Systems is a leading provider in access automation, parking, and security solutions for residential and industrial clients.",
    author: "John Doe",
    date: "Month, dd yyyy",
  };

  const posts = [
    {
      image: Notebook,
      title: "Houston Systems is a leading provider in access a",
      author: "John Doe",
      date: "Month, dd yyyy",
    },
    {
      image: Students1,
      title: "Another Post Title",
      author: "Jane Smith",
      date: "Month, dd yyyy",
    },
    // Add more posts as needed
  ];

  const trendingPosts = [
    { title: "Trending Post 1", author: "John Doe", date: "Month, dd yyyy" },
    { title: "Trending Post 2", author: "Jane Smith", date: "Month, dd yyyy" },
    // Add more trending posts as needed
  ];

  return (
    <div>
      <SolutionFeaturedPostAndTrending
        featuredPost={featuredPost}
        posts={posts}
        trendingPosts={trendingPosts}
      />
    </div>
  );
};

export default App;
