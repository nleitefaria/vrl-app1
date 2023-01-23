import React, { useState, useEffect } from 'react';

const Artworks = () => {

    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetch('https://api.artic.edu/api/v1/artworks?limit=10')
             .then((response) => response.json())
             .then((data) => {
                console.log(data);
                setPosts(data.data);
             })
             .catch((err) => {
                console.log(err.message);
             });
       }, []);


  return(
    <div className="container-fluid">
        <h1>Artworks</h1>

        <div>
              {posts.map((post) => {
                 return (

                       <h2>{post.id}</h2>

                 );
              })}
           </div>






    </div>

  );
};

export default Artworks;